import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import type { Key, KeyboardEvent } from 'react';
import { flushSync } from 'react-dom';
import clsx from 'clsx';

import {
  HeaderRowSelectionChangeContext,
  HeaderRowSelectionContext,
  RowSelectionChangeContext,
  useCalculatedColumns,
  useColumnWidths,
  useGridDimensions,
  useLatestFunc,
  useViewportColumns,
  useViewportRows,
  type HeaderRowSelectionContextValue
} from './hooks';
import {
  abs,
  assertIsValidKeyGetter,
  canExitGrid,
  createCellEvent,
  getColSpan,
  getLeftRightKey,
  getNextSelectedCellPosition,
  isCtrlKeyHeldDown,
  isDefaultCellInput,
  isSelectedCellEditable,
  isValueInBetween,
  renderMeasuringCells,
  scrollIntoView,
  sign
} from './utils';
import type {
  CalculatedColumn,
  CellClickArgs,
  CellClipboardEvent,
  CellCopyEvent,
  CellKeyboardEvent,
  CellKeyDownArgs,
  CellMouseEvent,
  CellNavigationMode,
  CellPasteEvent,
  CellSelectArgs,
  CellsRange,
  Column,
  ColumnOrColumnGroup,
  ColumnWidths,
  Direction,
  FillEvent,
  Maybe,
  MultiCopyEvent,
  MultiPasteEvent,
  Position,
  Renderers,
  RowsChangeData,
  SelectHeaderRowEvent,
  SelectRowEvent,
  SortColumn
} from './types';
import { defaultRenderCell } from './Cell';
import { renderCheckbox as defaultRenderCheckbox } from './cellRenderers';
import {
  DataGridDefaultRenderersContext,
  useDefaultRenderers
} from './DataGridDefaultRenderersContext';
import DragHandle from './DragHandle';
import EditCell from './EditCell';
import GroupedColumnHeaderRow from './GroupedColumnHeaderRow';
import HeaderRow from './HeaderRow';
import { defaultRenderRow } from './Row';
import type { PartialPosition } from './ScrollToCell';
import ScrollToCell from './ScrollToCell';
import { default as defaultRenderSortStatus } from './sortStatus';
import {
  focusSinkClassname,
  focusSinkHeaderAndSummaryClassname,
  rootClassname,
  viewportDraggingClassname
} from './style/core';
import { rowSelected, rowSelectedWithFrozenCell } from './style/row';
import SummaryRow from './SummaryRow';

export interface SelectCellState extends Position {
  readonly mode: 'SELECT';
}

interface EditCellState<R> extends Position {
  readonly mode: 'EDIT';
  readonly row: R;
  readonly originalRow: R;
}

export type DefaultColumnOptions<R, SR> = Pick<
  Column<R, SR>,
  | 'renderCell'
  | 'renderHeaderCell'
  | 'width'
  | 'minWidth'
  | 'maxWidth'
  | 'resizable'
  | 'sortable'
  | 'draggable'
>;

const initialSelectedRange: CellsRange = {
  startRowIdx: -1,
  startColumnIdx: -1,
  endRowIdx: -1,
  endColumnIdx: -1
};
export interface DataGridHandle {
  element: HTMLDivElement | null;
  scrollToCell: (position: PartialPosition) => void;
  selectCell: (position: Position, enableEditor?: Maybe<boolean>) => void;
}

type SharedDivProps = Pick<
  React.ComponentProps<'div'>,
  | 'role'
  | 'aria-label'
  | 'aria-labelledby'
  | 'aria-description'
  | 'aria-describedby'
  | 'aria-rowcount'
  | 'className'
  | 'style'
>;

export interface DataGridProps<R, SR = unknown, K extends Key = Key> extends SharedDivProps {
  ref?: Maybe<React.Ref<DataGridHandle>>;
  /**
   * Grid and data Props
   */
  /** An array of column definitions */
  columns: readonly ColumnOrColumnGroup<NoInfer<R>, NoInfer<SR>>[];
  /** A function called for each rendered row that should return a plain key/value pair object */
  rows: readonly R[];
  /** Rows pinned at the top of the grid for summary purposes */
  topSummaryRows?: Maybe<readonly SR[]>;
  /** Rows pinned at the bottom of the grid for summary purposes */
  bottomSummaryRows?: Maybe<readonly SR[]>;
  /** Function to return a unique key/identifier for each row */
  rowKeyGetter?: Maybe<(row: NoInfer<R>) => K>;
  /** Callback triggered when rows are changed */
  onRowsChange?: Maybe<(rows: NoInfer<R>[], data: RowsChangeData<NoInfer<R>, NoInfer<SR>>) => void>;

  /**
   * Dimensions props
   */
  /**
   * Height of each row in pixels
   * @default 35
   */
  rowHeight?: Maybe<number | ((row: NoInfer<R>) => number)>;
  /**
   * Height of the header row in pixels
   * @default 35
   */
  headerRowHeight?: Maybe<number>;
  /**
   * Height of each summary row in pixels
   * @default 35
   */
  summaryRowHeight?: Maybe<number>;
  /** A map of column widths */
  columnWidths?: Maybe<ColumnWidths>;
  /** Callback triggered when column widths change */
  onColumnWidthsChange?: Maybe<(columnWidths: ColumnWidths) => void>;

  /**
   * Feature props
   */
  /** A set of selected row keys */
  selectedRows?: Maybe<ReadonlySet<K>>;
  /** Function to determine if row selection is disabled for a specific row */
  isRowSelectionDisabled?: Maybe<(row: NoInfer<R>) => boolean>;
  /** Callback triggered when the selection changes */
  onSelectedRowsChange?: Maybe<(selectedRows: Set<NoInfer<K>>) => void>;
  /** An array of sorted columns */
  sortColumns?: Maybe<readonly SortColumn[]>;
  /** Callback triggered when sorting changes */
  onSortColumnsChange?: Maybe<(sortColumns: SortColumn[]) => void>;
  /** Default options applied to all columns */
  defaultColumnOptions?: Maybe<DefaultColumnOptions<NoInfer<R>, NoInfer<SR>>>;
  onFill?: Maybe<(event: FillEvent<NoInfer<R>>) => NoInfer<R>>;
  onMultiPaste?: Maybe<(event: MultiPasteEvent) => void>;
  onMultiCopy?: Maybe<(event: MultiCopyEvent<NoInfer<R>>) => void>;
  rangeLeftBoundaryColIdx?: Maybe<number>;
  onSelectedRangeChange?: Maybe<(selectedRange: CellsRange) => void>;

  /**
   * Event props
   */
  /** Callback triggered when a cell is clicked */
  onCellClick?: Maybe<
    (args: CellClickArgs<NoInfer<R>, NoInfer<SR>>, event: CellMouseEvent) => void
  >;
  /** Callback triggered when a cell is double-clicked */
  onCellDoubleClick?: Maybe<
    (args: CellClickArgs<NoInfer<R>, NoInfer<SR>>, event: CellMouseEvent) => void
  >;
  /** Callback triggered when a cell is right-clicked */
  onCellContextMenu?: Maybe<
    (args: CellClickArgs<NoInfer<R>, NoInfer<SR>>, event: CellMouseEvent) => void
  >;
  /** Callback triggered when a key is pressed in a cell */
  onCellKeyDown?: Maybe<
    (args: CellKeyDownArgs<NoInfer<R>, NoInfer<SR>>, event: CellKeyboardEvent) => void
  >;
  /** Callback triggered when a cell's content is copied */
  onCellCopy?: Maybe<
    (args: CellCopyEvent<NoInfer<R>, NoInfer<SR>>, event: CellClipboardEvent) => void
  >;
  /** Callback triggered when content is pasted into a cell */
  onCellPaste?: Maybe<
    (args: CellPasteEvent<NoInfer<R>, NoInfer<SR>>, event: CellClipboardEvent) => NoInfer<R>
  >;
  /** Function called whenever cell selection is changed */
  onSelectedCellChange?: Maybe<(args: CellSelectArgs<NoInfer<R>, NoInfer<SR>>) => void>;
  /** Callback triggered when the grid is scrolled */
  onScroll?: Maybe<(event: React.UIEvent<HTMLDivElement>) => void>;
  /** Callback triggered when column is resized */
  onColumnResize?: Maybe<(column: CalculatedColumn<R, SR>, width: number) => void>;
  /** Callback triggered when columns are reordered */
  onColumnsReorder?: Maybe<(sourceColumnKey: string, targetColumnKey: string) => void>;

  /**
   * Toggles and modes
   */
  /** @default true */
  enableVirtualization?: Maybe<boolean>;
  /** @default false, set true to enable range selection with copy and paste through clipboard */
  enableRangeSelection?: Maybe<boolean>;

  /**
   * Miscellaneous
   */
  /** Custom renderers for cells, rows, and other components */
  renderers?: Maybe<Renderers<NoInfer<R>, NoInfer<SR>>>;
  /** Function to apply custom class names to rows */
  rowClass?: Maybe<(row: NoInfer<R>, rowIdx: number) => Maybe<string>>;
  /** Custom class name for the header row */
  headerRowClass?: Maybe<string>;
  /**
   * Text direction of the grid ('ltr' or 'rtl')
   * @default 'ltr'
   * */
  direction?: Maybe<Direction>;
  'data-testid'?: Maybe<string>;
  'data-cy'?: Maybe<string>;
}

/**
 * Main API Component to render a data grid of rows and columns
 *
 * @example
 *
 * <DataGrid columns={columns} rows={rows} />
 */
export function DataGrid<R, SR = unknown, K extends Key = Key>(props: DataGridProps<R, SR, K>) {
  const {
    ref,
    // Grid and data Props
    columns: rawColumns,
    rows,
    topSummaryRows,
    bottomSummaryRows,
    rowKeyGetter,
    onRowsChange,
    // Dimensions props
    rowHeight: rawRowHeight,
    headerRowHeight: rawHeaderRowHeight,
    summaryRowHeight: rawSummaryRowHeight,
    columnWidths: columnWidthsRaw,
    onColumnWidthsChange: onColumnWidthsChangeRaw,
    // Feature props
    selectedRows,
    isRowSelectionDisabled,
    onSelectedRowsChange,
    sortColumns,
    onSortColumnsChange,
    defaultColumnOptions,
    // Event props
    onCellClick,
    onCellDoubleClick,
    onCellContextMenu,
    onCellKeyDown,
    onSelectedCellChange,
    onScroll,
    onColumnResize,
    onColumnsReorder,
    onFill,
    onCellCopy,
    onCellPaste,
    onMultiPaste,
    onMultiCopy,
    rangeLeftBoundaryColIdx,
    onSelectedRangeChange,

    // Toggles and modes
    enableVirtualization: rawEnableVirtualization,
    enableRangeSelection: rawEnableRangeSelection,
    // Miscellaneous
    renderers,
    className,
    style,
    rowClass,
    headerRowClass,
    direction: rawDirection,
    // ARIA
    role: rawRole,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-description': ariaDescription,
    'aria-describedby': ariaDescribedBy,
    'aria-rowcount': rawAriaRowCount,
    'data-testid': testId,
    'data-cy': dataCy
  } = props;

  /**
   * defaults
   */
  const defaultRenderers = useDefaultRenderers<R, SR>();
  const role = rawRole ?? 'grid';
  const rowHeight = rawRowHeight ?? 35;
  const headerRowHeight = rawHeaderRowHeight ?? (typeof rowHeight === 'number' ? rowHeight : 35);
  const summaryRowHeight = rawSummaryRowHeight ?? (typeof rowHeight === 'number' ? rowHeight : 35);
  const renderRow = renderers?.renderRow ?? defaultRenderers?.renderRow ?? defaultRenderRow;
  const renderCell = renderers?.renderCell ?? defaultRenderers?.renderCell ?? defaultRenderCell;
  const renderSortStatus =
    renderers?.renderSortStatus ?? defaultRenderers?.renderSortStatus ?? defaultRenderSortStatus;
  const renderCheckbox =
    renderers?.renderCheckbox ?? defaultRenderers?.renderCheckbox ?? defaultRenderCheckbox;
  const noRowsFallback = renderers?.noRowsFallback ?? defaultRenderers?.noRowsFallback;
  const enableVirtualization = rawEnableVirtualization ?? true;
  const enableRangeSelection = rawEnableRangeSelection ?? false;
  const direction = rawDirection ?? 'ltr';

  /**
   * states
   */
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [columnWidthsInternal, setColumnWidthsInternal] = useState(
    (): ColumnWidths => columnWidthsRaw ?? new Map()
  );
  const [isColumnResizing, setColumnResizing] = useState(false);
  const [isDragging, setDragging] = useState(false);
  const [draggedOverRowIdx, setOverRowIdx] = useState<number | undefined>(undefined);
  const [scrollToPosition, setScrollToPosition] = useState<PartialPosition | null>(null);
  const [shouldFocusCell, setShouldFocusCell] = useState(false);
  const [previousRowIdx, setPreviousRowIdx] = useState(-1);

  const isColumnWidthsControlled =
    columnWidthsRaw != null && onColumnWidthsChangeRaw != null && !isColumnResizing;
  const columnWidths = isColumnWidthsControlled ? columnWidthsRaw : columnWidthsInternal;
  const onColumnWidthsChange = isColumnWidthsControlled
    ? (columnWidths: ColumnWidths) => {
        // we keep the internal state in sync with the prop but this prevents an extra render
        setColumnWidthsInternal(columnWidths);
        onColumnWidthsChangeRaw(columnWidths);
      }
    : setColumnWidthsInternal;

  const getColumnWidth = useCallback(
    (column: CalculatedColumn<R, SR>) => {
      return columnWidths.get(column.key)?.width ?? column.width;
    },
    [columnWidths]
  );

  const [gridRef, gridWidth, gridHeight, horizontalScrollbarHeight] = useGridDimensions();
  const {
    columns,
    colSpanColumns,
    lastFrozenColumnIndex,
    headerRowsCount,
    colOverscanStartIdx,
    colOverscanEndIdx,
    templateColumns,
    layoutCssVars,
    totalFrozenColumnWidth
  } = useCalculatedColumns({
    rawColumns,
    defaultColumnOptions,
    getColumnWidth,
    scrollLeft,
    viewportWidth: gridWidth,
    enableVirtualization
  });

  const topSummaryRowsCount = topSummaryRows?.length ?? 0;
  const bottomSummaryRowsCount = bottomSummaryRows?.length ?? 0;
  const summaryRowsCount = topSummaryRowsCount + bottomSummaryRowsCount;
  const headerAndTopSummaryRowsCount = headerRowsCount + topSummaryRowsCount;
  const groupedColumnHeaderRowsCount = headerRowsCount - 1;
  const minRowIdx = -headerAndTopSummaryRowsCount;
  const mainHeaderRowIdx = minRowIdx + groupedColumnHeaderRowsCount;
  const maxRowIdx = rows.length + bottomSummaryRowsCount - 1;

  const [selectedPosition, setSelectedPosition] = useState(
    (): SelectCellState | EditCellState<R> => ({ idx: -1, rowIdx: minRowIdx - 1, mode: 'SELECT' })
  );

  const [selectedRange, setSelectedRange] = useState<CellsRange>(initialSelectedRange);
  const [copiedRange, setCopiedRange] = useState<CellsRange | null>(null);
  const [isMouseRangeSelectionMode, setIsMouseRangeSelectionMode] = useState<boolean>(false);

  /**
   * refs
   */
  const latestDraggedOverRowIdx = useRef(draggedOverRowIdx);
  const focusSinkRef = useRef<HTMLDivElement>(null);

  /**
   * computed values
   */
  const isTreeGrid = role === 'treegrid';
  const headerRowsHeight = headerRowsCount * headerRowHeight;
  const summaryRowsHeight = summaryRowsCount * summaryRowHeight;
  const clientHeight = gridHeight - headerRowsHeight - summaryRowsHeight;
  const isSelectable = selectedRows != null && onSelectedRowsChange != null;
  const { leftKey, rightKey } = getLeftRightKey(direction);
  const ariaRowCount = rawAriaRowCount ?? headerRowsCount + rows.length + summaryRowsCount;
  const rangeLeftBoundary =
    typeof rangeLeftBoundaryColIdx === 'undefined' || rangeLeftBoundaryColIdx == null
      ? -1
      : rangeLeftBoundaryColIdx;

  const defaultGridComponents = useMemo(
    () => ({
      renderCheckbox,
      renderSortStatus,
      renderCell
    }),
    [renderCheckbox, renderSortStatus, renderCell]
  );

  const headerSelectionValue = useMemo((): HeaderRowSelectionContextValue => {
    // no rows to select = explicitely unchecked
    let hasSelectedRow = false;
    let hasUnselectedRow = false;

    if (rowKeyGetter != null && selectedRows != null && selectedRows.size > 0) {
      for (const row of rows) {
        if (selectedRows.has(rowKeyGetter(row))) {
          hasSelectedRow = true;
        } else {
          hasUnselectedRow = true;
        }

        if (hasSelectedRow && hasUnselectedRow) break;
      }
    }

    return {
      isRowSelected: hasSelectedRow && !hasUnselectedRow,
      isIndeterminate: hasSelectedRow && hasUnselectedRow
    };
  }, [rows, selectedRows, rowKeyGetter]);

  const setSelectedRangeWithBoundary = (value: CellsRange) => {
    const boundValue = {
      ...value
    };
    if (boundValue.startColumnIdx <= rangeLeftBoundary) {
      boundValue.startColumnIdx = rangeLeftBoundary + 1;
    }
    if (boundValue.endColumnIdx > rangeLeftBoundary) {
      setSelectedRange(boundValue);
    }
  };

  const {
    rowOverscanStartIdx,
    rowOverscanEndIdx,
    totalRowHeight,
    gridTemplateRows,
    getRowTop,
    getRowHeight,
    findRowIdx
  } = useViewportRows({
    rows,
    rowHeight,
    clientHeight,
    scrollTop,
    enableVirtualization
  });

  const viewportColumns = useViewportColumns({
    columns,
    colSpanColumns,
    colOverscanStartIdx,
    colOverscanEndIdx,
    lastFrozenColumnIndex,
    rowOverscanStartIdx,
    rowOverscanEndIdx,
    rows,
    topSummaryRows,
    bottomSummaryRows
  });

  const { gridTemplateColumns, handleColumnResize } = useColumnWidths(
    columns,
    viewportColumns,
    templateColumns,
    gridRef,
    gridWidth,
    columnWidths,
    onColumnWidthsChange,
    onColumnResize,
    setColumnResizing
  );

  const minColIdx = isTreeGrid ? -1 : 0;
  const maxColIdx = columns.length - 1;
  const selectedCellIsWithinSelectionBounds = isCellWithinSelectionBounds(selectedPosition);
  const selectedCellIsWithinViewportBounds = isCellWithinViewportBounds(selectedPosition);
  const scrollHeight =
    headerRowHeight + totalRowHeight + summaryRowsHeight + horizontalScrollbarHeight;

  /**
   * The identity of the wrapper function is stable so it won't break memoization
   */
  const handleColumnResizeLatest = useLatestFunc(handleColumnResize);
  const handleColumnResizeEndLatest = useLatestFunc(handleColumnResizeEnd);
  const onColumnsReorderLastest = useLatestFunc(onColumnsReorder);
  const onSortColumnsChangeLatest = useLatestFunc(onSortColumnsChange);
  const onCellClickLatest = useLatestFunc(onCellClick);
  const onCellDoubleClickLatest = useLatestFunc(onCellDoubleClick);
  const onCellContextMenuLatest = useLatestFunc(onCellContextMenu);
  const selectHeaderRowLatest = useLatestFunc(selectHeaderRow);
  const selectRowLatest = useLatestFunc(selectRow);
  const handleFormatterRowChangeLatest = useLatestFunc(updateRow);
  const selectCellLatest = useLatestFunc(selectCell);
  const selectHeaderCellLatest = useLatestFunc(({ idx, rowIdx }: Position) => {
    selectCell({ rowIdx: minRowIdx + rowIdx - 1, idx });
  });

  /**
   * callbacks
   */
  const setDraggedOverRowIdx = useCallback((rowIdx?: number) => {
    setOverRowIdx(rowIdx);
    latestDraggedOverRowIdx.current = rowIdx;
  }, []);

  const focusCellOrCellContent = useCallback(() => {
    const cell = getCellToScroll(gridRef.current!);
    if (cell === null) return;

    scrollIntoView(cell);
    // Focus cell content when available instead of the cell itself
    const elementToFocus = cell.querySelector<Element & HTMLOrSVGElement>('[tabindex="0"]') ?? cell;
    elementToFocus.focus({ preventScroll: true });
  }, [gridRef]);

  /**
   * effects
   */
  useLayoutEffect(() => {
    if (
      focusSinkRef.current !== null &&
      selectedCellIsWithinSelectionBounds &&
      selectedPosition.idx === -1
    ) {
      focusSinkRef.current.focus({ preventScroll: true });
      scrollIntoView(focusSinkRef.current);
    }
  }, [selectedCellIsWithinSelectionBounds, selectedPosition]);

  useLayoutEffect(() => {
    if (shouldFocusCell) {
      setShouldFocusCell(false);
      focusCellOrCellContent();
    }
  }, [shouldFocusCell, focusCellOrCellContent]);

  useImperativeHandle(ref, () => ({
    element: gridRef.current,
    scrollToCell({ idx, rowIdx }) {
      const scrollToIdx =
        idx !== undefined && idx > lastFrozenColumnIndex && idx < columns.length ? idx : undefined;
      const scrollToRowIdx =
        rowIdx !== undefined && isRowIdxWithinViewportBounds(rowIdx) ? rowIdx : undefined;

      if (scrollToIdx !== undefined || scrollToRowIdx !== undefined) {
        setScrollToPosition({ idx: scrollToIdx, rowIdx: scrollToRowIdx });
      }
    },
    selectCell
  }));

  useEffect(() => {
    onSelectedRangeChange?.(selectedRange);
  }, [selectedRange, onSelectedRangeChange]);

  /**
   * event handlers
   */
  function selectHeaderRow(args: SelectHeaderRowEvent) {
    if (!onSelectedRowsChange) return;

    assertIsValidKeyGetter<R, K>(rowKeyGetter);

    const newSelectedRows = new Set(selectedRows);
    for (const row of rows) {
      if (isRowSelectionDisabled?.(row) === true) continue;
      const rowKey = rowKeyGetter(row);
      if (args.checked) {
        newSelectedRows.add(rowKey);
      } else {
        newSelectedRows.delete(rowKey);
      }
    }
    onSelectedRowsChange(newSelectedRows);
  }

  function selectRow(args: SelectRowEvent<R>) {
    if (!onSelectedRowsChange) return;

    assertIsValidKeyGetter<R, K>(rowKeyGetter);
    const { row, checked, isShiftClick } = args;
    if (isRowSelectionDisabled?.(row) === true) return;
    const newSelectedRows = new Set(selectedRows);
    const rowKey = rowKeyGetter(row);
    const rowIdx = rows.indexOf(row);
    setPreviousRowIdx(rowIdx);

    if (checked) {
      newSelectedRows.add(rowKey);
    } else {
      newSelectedRows.delete(rowKey);
    }

    if (
      isShiftClick &&
      previousRowIdx !== -1 &&
      previousRowIdx !== rowIdx &&
      previousRowIdx < rows.length
    ) {
      const step = sign(rowIdx - previousRowIdx);
      for (let i = previousRowIdx + step; i !== rowIdx; i += step) {
        const row = rows[i];
        if (isRowSelectionDisabled?.(row) === true) continue;
        if (checked) {
          newSelectedRows.add(rowKeyGetter(row));
        } else {
          newSelectedRows.delete(rowKeyGetter(row));
        }
      }
    }

    onSelectedRowsChange(newSelectedRows);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const { idx, rowIdx, mode } = selectedPosition;
    if (mode === 'EDIT') return;

    if (onCellKeyDown && isRowIdxWithinViewportBounds(rowIdx)) {
      const row = rows[rowIdx];
      const cellEvent = createCellEvent(event);
      onCellKeyDown(
        {
          mode: 'SELECT',
          row,
          column: columns[idx],
          rowIdx,
          selectCell
        },
        cellEvent
      );
      if (cellEvent.isGridDefaultPrevented()) return;
    }

    if (!(event.target instanceof Element)) return;
    const isCellEvent = event.target.closest('.rdg-cell') !== null;
    const isRowEvent = isTreeGrid && event.target === focusSinkRef.current;
    if (!isCellEvent && !isRowEvent) return;

    if (event.shiftKey) {
      switch (event.key) {
        case 'ArrowUp':
          if (selectedRange.endRowIdx > 0) {
            setSelectedRangeWithBoundary({
              ...selectedRange,
              endRowIdx: selectedRange.endRowIdx - 1
            });
          }
          break;
        case 'ArrowDown':
          if (selectedRange.endRowIdx < rows.length - 1) {
            setSelectedRangeWithBoundary({
              ...selectedRange,
              endRowIdx: selectedRange.endRowIdx + 1
            });
          }
          break;
        case 'ArrowRight':
          if (selectedRange.endColumnIdx < columns.length - 1) {
            setSelectedRangeWithBoundary({
              ...selectedRange,
              endColumnIdx: selectedRange.endColumnIdx + 1
            });
          }
          break;
        case 'ArrowLeft':
          if (selectedRange.endColumnIdx > 0) {
            setSelectedRangeWithBoundary({
              ...selectedRange,
              endColumnIdx: selectedRange.endColumnIdx - 1
            });
          }
          break;
        default:
          break;
      }
    } else {
      switch (event.key) {
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
        case 'Tab':
        case 'Home':
        case 'End':
        case 'PageUp':
        case 'PageDown':
          navigate(event);
          break;
        default:
          handleCellInput(event);
          break;
      }
    }
  }

  function handleScroll(event: React.UIEvent<HTMLDivElement>) {
    const { scrollTop, scrollLeft } = event.currentTarget;
    flushSync(() => {
      setScrollTop(scrollTop);
      // scrollLeft is nagative when direction is rtl
      setScrollLeft(abs(scrollLeft));
    });
    onScroll?.(event);
  }

  function updateRow(column: CalculatedColumn<R, SR>, rowIdx: number, row: R) {
    if (typeof onRowsChange !== 'function') return;
    if (row === rows[rowIdx]) return;
    const updatedRows = [...rows];
    updatedRows[rowIdx] = row;
    onRowsChange(updatedRows, {
      indexes: [rowIdx],
      column
    });
  }

  function commitEditorChanges() {
    if (selectedPosition.mode !== 'EDIT') return;
    updateRow(columns[selectedPosition.idx], selectedPosition.rowIdx, selectedPosition.row);
  }

  function handleCellCopy(event: CellClipboardEvent) {
    if (enableRangeSelection) {
      setCopiedRange(selectedRange);
      const sourceRows = rows.slice(selectedRange.startRowIdx, selectedRange.endRowIdx + 1);
      const sourceColumnKeys = columns
        .slice(selectedRange.startColumnIdx, selectedRange.endColumnIdx + 1)
        .map((c) => c.key);
      onMultiCopy?.({
        cellsRange: selectedRange,
        sourceRows,
        sourceColumnKeys
      });
    } else {
      if (!selectedCellIsWithinViewportBounds) return;
      const { idx, rowIdx } = selectedPosition;
      onCellCopy?.({ row: rows[rowIdx], column: columns[idx] }, event);
    }
  }

  function handleCellPaste(event: CellClipboardEvent) {
    if (enableRangeSelection) {
      if (!onMultiPaste || !onRowsChange || copiedRange === null) {
        return;
      }

      onMultiPaste({
        copiedRange,
        targetRange: selectedRange
      });
    } else {
      if (!onCellPaste || !onRowsChange || !isCellEditable(selectedPosition)) {
        return;
      }

      const { idx, rowIdx } = selectedPosition;
      const column = columns[idx];
      const updatedRow = onCellPaste({ row: rows[rowIdx], column }, event);
      updateRow(column, rowIdx, updatedRow);
    }
  }

  function handleCellInput(event: KeyboardEvent<HTMLDivElement>) {
    if (!selectedCellIsWithinViewportBounds) return;
    const row = rows[selectedPosition.rowIdx];
    const { key, shiftKey } = event;

    // Select the row on Shift + Space
    if (isSelectable && shiftKey && key === ' ') {
      assertIsValidKeyGetter<R, K>(rowKeyGetter);
      const rowKey = rowKeyGetter(row);
      selectRow({ row, checked: !selectedRows.has(rowKey), isShiftClick: false });
      // prevent scrolling
      event.preventDefault();
      return;
    }

    if (isCellEditable(selectedPosition) && isDefaultCellInput(event, onCellPaste != null)) {
      setSelectedPosition(({ idx, rowIdx }) => ({
        idx,
        rowIdx,
        mode: 'EDIT',
        row,
        originalRow: row
      }));
    }
  }

  function handleColumnResizeEnd() {
    // This check is needed as double click on the resize handle triggers onPointerMove
    if (isColumnResizing) {
      onColumnWidthsChangeRaw?.(columnWidths);
      setColumnResizing(false);
    }
  }

  /**
   * utils
   */
  function isColIdxWithinSelectionBounds(idx: number) {
    return idx >= minColIdx && idx <= maxColIdx;
  }

  function isRowIdxWithinViewportBounds(rowIdx: number) {
    return rowIdx >= 0 && rowIdx < rows.length;
  }

  function isCellWithinSelectionBounds({ idx, rowIdx }: Position): boolean {
    return rowIdx >= minRowIdx && rowIdx <= maxRowIdx && isColIdxWithinSelectionBounds(idx);
  }

  function isCellWithinEditBounds({ idx, rowIdx }: Position): boolean {
    return isRowIdxWithinViewportBounds(rowIdx) && idx >= 0 && idx <= maxColIdx;
  }

  function isCellWithinViewportBounds({ idx, rowIdx }: Position): boolean {
    return isRowIdxWithinViewportBounds(rowIdx) && isColIdxWithinSelectionBounds(idx);
  }

  function isCellEditable(position: Position): boolean {
    return (
      isCellWithinEditBounds(position) &&
      isSelectedCellEditable({ columns, rows, selectedPosition: position })
    );
  }

  function selectCell(position: Position, enableEditor?: Maybe<boolean>): void {
    if (!isCellWithinSelectionBounds(position)) return;
    commitEditorChanges();

    const samePosition = isSamePosition(selectedPosition, position);

    if (enableEditor && isCellEditable(position)) {
      const row = rows[position.rowIdx];
      setSelectedPosition({ ...position, mode: 'EDIT', row, originalRow: row });
    } else if (samePosition) {
      // Avoid re-renders if the selected cell state is the same
      scrollIntoView(getCellToScroll(gridRef.current!));
    } else {
      setShouldFocusCell(true);
      setSelectedPosition({ ...position, mode: 'SELECT' });
      setSelectedRange({
        startColumnIdx: position.idx,
        startRowIdx: position.rowIdx,
        endColumnIdx: position.idx,
        endRowIdx: position.rowIdx
      });
    }

    if (onSelectedCellChange && !samePosition) {
      onSelectedCellChange({
        rowIdx: position.rowIdx,
        row: isRowIdxWithinViewportBounds(position.rowIdx) ? rows[position.rowIdx] : undefined,
        column: columns[position.idx]
      });
    }
  }

  function getNextPosition(key: string, ctrlKey: boolean, shiftKey: boolean): Position {
    const { idx, rowIdx } = selectedPosition;
    const isRowSelected = selectedCellIsWithinSelectionBounds && idx === -1;

    switch (key) {
      case 'ArrowUp':
        return { idx, rowIdx: rowIdx - 1 };
      case 'ArrowDown':
        return { idx, rowIdx: rowIdx + 1 };
      case leftKey:
        return { idx: idx - 1, rowIdx };
      case rightKey:
        return { idx: idx + 1, rowIdx };
      case 'Tab':
        return { idx: idx + (shiftKey ? -1 : 1), rowIdx };
      case 'Home':
        // If row is selected then move focus to the first row
        if (isRowSelected) return { idx, rowIdx: minRowIdx };
        return { idx: 0, rowIdx: ctrlKey ? minRowIdx : rowIdx };
      case 'End':
        // If row is selected then move focus to the last row.
        if (isRowSelected) return { idx, rowIdx: maxRowIdx };
        return { idx: maxColIdx, rowIdx: ctrlKey ? maxRowIdx : rowIdx };
      case 'PageUp': {
        if (selectedPosition.rowIdx === minRowIdx) return selectedPosition;
        const nextRowY = getRowTop(rowIdx) + getRowHeight(rowIdx) - clientHeight;
        return { idx, rowIdx: nextRowY > 0 ? findRowIdx(nextRowY) : 0 };
      }
      case 'PageDown': {
        if (selectedPosition.rowIdx >= rows.length) return selectedPosition;
        const nextRowY = getRowTop(rowIdx) + clientHeight;
        return { idx, rowIdx: nextRowY < totalRowHeight ? findRowIdx(nextRowY) : rows.length - 1 };
      }
      default:
        return selectedPosition;
    }
  }

  function navigate(event: KeyboardEvent<HTMLDivElement>) {
    const { key, shiftKey } = event;
    let cellNavigationMode: CellNavigationMode = 'NONE';
    if (key === 'Tab') {
      if (
        canExitGrid({
          shiftKey,
          maxColIdx,
          minRowIdx,
          maxRowIdx,
          selectedPosition
        })
      ) {
        commitEditorChanges();
        // Allow focus to leave the grid so the next control in the tab order can be focused
        return;
      }

      cellNavigationMode = 'CHANGE_ROW';
    }

    // prevent scrolling and do not allow focus to leave
    event.preventDefault();

    const ctrlKey = isCtrlKeyHeldDown(event);
    const nextPosition = getNextPosition(key, ctrlKey, shiftKey);
    if (isSamePosition(selectedPosition, nextPosition)) return;

    const nextSelectedCellPosition = getNextSelectedCellPosition({
      moveUp: key === 'ArrowUp',
      moveNext: key === rightKey || (key === 'Tab' && !shiftKey),
      columns,
      colSpanColumns,
      rows,
      topSummaryRows,
      bottomSummaryRows,
      minRowIdx,
      mainHeaderRowIdx,
      maxRowIdx,
      lastFrozenColumnIndex,
      cellNavigationMode,
      currentPosition: selectedPosition,
      nextPosition,
      isCellWithinBounds: isCellWithinSelectionBounds
    });

    selectCell(nextSelectedCellPosition);
  }

  function getDraggedOverCellIdx(currentRowIdx: number): number | undefined {
    if (draggedOverRowIdx === undefined) return;
    const { rowIdx } = selectedPosition;

    const isDraggedOver =
      rowIdx < draggedOverRowIdx
        ? rowIdx < currentRowIdx && currentRowIdx <= draggedOverRowIdx
        : rowIdx > currentRowIdx && currentRowIdx >= draggedOverRowIdx;

    return isDraggedOver ? selectedPosition.idx : undefined;
  }

  function renderDragHandle() {
    if (
      onFill == null ||
      selectedPosition.mode === 'EDIT' ||
      !isCellWithinViewportBounds(selectedPosition)
    ) {
      return;
    }

    const { idx, rowIdx } = selectedPosition;
    const column = columns[idx];
    if (column.renderEditCell == null || column.editable === false) {
      return;
    }

    const columnWidth = getColumnWidth(column);

    return (
      <DragHandle
        gridRowStart={headerAndTopSummaryRowsCount + rowIdx + 1}
        rows={rows}
        column={column}
        columnWidth={columnWidth}
        maxColIdx={maxColIdx}
        isLastRow={rowIdx === maxRowIdx}
        selectedPosition={selectedPosition}
        isCellEditable={isCellEditable}
        latestDraggedOverRowIdx={latestDraggedOverRowIdx}
        onRowsChange={onRowsChange}
        onClick={focusCellOrCellContent}
        onFill={onFill}
        setDragging={setDragging}
        setDraggedOverRowIdx={setDraggedOverRowIdx}
      />
    );
  }

  function getCellEditor(rowIdx: number) {
    if (selectedPosition.rowIdx !== rowIdx || selectedPosition.mode === 'SELECT') return;

    const { idx, row } = selectedPosition;
    const column = columns[idx];
    const colSpan = getColSpan(column, lastFrozenColumnIndex, { type: 'ROW', row });
    const closeOnExternalRowChange = column.editorOptions?.closeOnExternalRowChange ?? true;

    const closeEditor = (shouldFocusCell: boolean) => {
      setShouldFocusCell(shouldFocusCell);
      setSelectedPosition(({ idx, rowIdx }) => ({ idx, rowIdx, mode: 'SELECT' }));
    };

    const onRowChange = (row: R, commitChanges: boolean, shouldFocusCell: boolean) => {
      if (commitChanges) {
        // Prevents two issues when editor is closed by clicking on a different cell
        //
        // Otherwise commitEditorChanges may be called before the cell state is changed to
        // SELECT and this results in onRowChange getting called twice.
        flushSync(() => {
          updateRow(column, selectedPosition.rowIdx, row);
          closeEditor(shouldFocusCell);
        });
      } else {
        setSelectedPosition((position) => ({ ...position, row }));
      }
    };

    if (
      closeOnExternalRowChange &&
      rows[selectedPosition.rowIdx] !== selectedPosition.originalRow
    ) {
      // Discard changes if rows are updated from outside
      closeEditor(false);
    }

    return (
      <EditCell
        key={column.key}
        column={column}
        colSpan={colSpan}
        row={row}
        rowIdx={rowIdx}
        onRowChange={onRowChange}
        closeEditor={closeEditor}
        onKeyDown={onCellKeyDown}
        navigate={navigate}
      />
    );
  }

  function getRowViewportColumns(rowIdx: number) {
    // idx can be -1 if grouping is enabled
    const selectedColumn = selectedPosition.idx === -1 ? undefined : columns[selectedPosition.idx];
    if (
      selectedColumn !== undefined &&
      selectedPosition.rowIdx === rowIdx &&
      !viewportColumns.includes(selectedColumn)
    ) {
      // Add the selected column to viewport columns if the cell is not within the viewport
      return selectedPosition.idx > colOverscanEndIdx
        ? [...viewportColumns, selectedColumn]
        : [
            ...viewportColumns.slice(0, lastFrozenColumnIndex + 1),
            selectedColumn,
            ...viewportColumns.slice(lastFrozenColumnIndex + 1)
          ];
    }
    return viewportColumns;
  }

  function getViewportRows() {
    const rowElements: React.ReactNode[] = [];

    const { idx: selectedIdx, rowIdx: selectedRowIdx } = selectedPosition;

    const startRowIdx =
      selectedCellIsWithinViewportBounds && selectedRowIdx < rowOverscanStartIdx
        ? rowOverscanStartIdx - 1
        : rowOverscanStartIdx;
    const endRowIdx =
      selectedCellIsWithinViewportBounds && selectedRowIdx > rowOverscanEndIdx
        ? rowOverscanEndIdx + 1
        : rowOverscanEndIdx;

    for (let viewportRowIdx = startRowIdx; viewportRowIdx <= endRowIdx; viewportRowIdx++) {
      const isRowOutsideViewport =
        viewportRowIdx === rowOverscanStartIdx - 1 || viewportRowIdx === rowOverscanEndIdx + 1;
      const rowIdx = isRowOutsideViewport ? selectedRowIdx : viewportRowIdx;

      let rowColumns = viewportColumns;
      const selectedColumn = selectedIdx === -1 ? undefined : columns[selectedIdx];
      if (selectedColumn !== undefined) {
        if (isRowOutsideViewport) {
          // if the row is outside the viewport then only render the selected cell
          rowColumns = [selectedColumn];
        } else {
          // if the row is within the viewport and cell is not, add the selected column to viewport columns
          rowColumns = getRowViewportColumns(rowIdx);
        }
      }

      const row = rows[rowIdx];
      const gridRowStart = headerAndTopSummaryRowsCount + rowIdx + 1;
      let key: K | number = rowIdx;
      let isRowSelected = false;
      if (typeof rowKeyGetter === 'function') {
        key = rowKeyGetter(row);
        isRowSelected = selectedRows?.has(key) ?? false;
      }

      rowElements.push(
        renderRow(key, {
          // aria-rowindex is 1 based
          'aria-rowindex': headerAndTopSummaryRowsCount + rowIdx + 1,
          'aria-selected': isSelectable ? isRowSelected : undefined,
          rowIdx,
          row,
          viewportColumns: rowColumns,
          isRowSelectionDisabled: isRowSelectionDisabled?.(row) ?? false,
          isRowSelected,
          onCellClick: onCellClickLatest,
          onCellDoubleClick: onCellDoubleClickLatest,
          onCellContextMenu: onCellContextMenuLatest,
          rowClass,
          gridRowStart,
          selectedCellIdx: selectedRowIdx === rowIdx ? selectedIdx : undefined,
          selectedCellsRange:
            enableRangeSelection &&
            isValueInBetween(rowIdx, selectedRange.startRowIdx, selectedRange.endRowIdx)
              ? {
                  startIdx: selectedRange.startColumnIdx,
                  endIdx: selectedRange.endColumnIdx
                }
              : { startIdx: -1, endIdx: -1 },
          draggedOverCellIdx: getDraggedOverCellIdx(rowIdx),
          setDraggedOverRowIdx: isDragging ? setDraggedOverRowIdx : undefined,
          lastFrozenColumnIndex,
          onRowChange: handleFormatterRowChangeLatest,
          selectCell: selectCellLatest,
          selectedCellEditor: getCellEditor(rowIdx),
          rangeSelectionMode: enableRangeSelection,
          onCellMouseDown: () => setIsMouseRangeSelectionMode(true),
          onCellMouseUp() {
            setIsMouseRangeSelectionMode(false);

            // Once the ranges are decided, re-evaluate start and end;
            setSelectedRange((boundValue) => ({
              startColumnIdx: Math.min(boundValue.startColumnIdx, boundValue.endColumnIdx),
              endColumnIdx: Math.max(boundValue.startColumnIdx, boundValue.endColumnIdx),
              startRowIdx: Math.min(boundValue.startRowIdx, boundValue.endRowIdx),
              endRowIdx: Math.max(boundValue.startRowIdx, boundValue.endRowIdx)
            }));
          },
          onCellMouseEnter({ column }) {
            if (isMouseRangeSelectionMode && enableRangeSelection) {
              setSelectedRangeWithBoundary({
                ...selectedRange,
                endRowIdx: rowIdx,
                endColumnIdx: column.idx
              });
            }
          }
        })
      );
    }

    return rowElements;
  }

  // Reset the positions if the current values are no longer valid. This can happen if a column or row is removed
  if (selectedPosition.idx > maxColIdx || selectedPosition.rowIdx > maxRowIdx) {
    setSelectedPosition({ idx: -1, rowIdx: minRowIdx - 1, mode: 'SELECT' });
    setDraggedOverRowIdx(undefined);
  }

  // Keep the state and prop in sync
  if (isColumnWidthsControlled && columnWidthsInternal !== columnWidthsRaw) {
    setColumnWidthsInternal(columnWidthsRaw);
  }

  let templateRows = `repeat(${headerRowsCount}, ${headerRowHeight}px)`;
  if (topSummaryRowsCount > 0) {
    templateRows += ` repeat(${topSummaryRowsCount}, ${summaryRowHeight}px)`;
  }
  if (rows.length > 0) {
    templateRows += gridTemplateRows;
  }
  if (bottomSummaryRowsCount > 0) {
    templateRows += ` repeat(${bottomSummaryRowsCount}, ${summaryRowHeight}px)`;
  }

  const isGroupRowFocused =
    selectedPosition.idx === -1 && selectedPosition.rowIdx !== minRowIdx - 1;

  return (
    // biome-ignore lint/a11y/useValidAriaProps: aria-description is a valid prop
    <div
      role={role}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-description={ariaDescription}
      aria-describedby={ariaDescribedBy}
      aria-multiselectable={isSelectable ? true : undefined}
      aria-colcount={columns.length}
      aria-rowcount={ariaRowCount}
      className={clsx(
        rootClassname,
        {
          [viewportDraggingClassname]: isDragging
        },
        className
      )}
      style={
        {
          ...style,
          // set scrollPadding to correctly position non-sticky cells after scrolling
          scrollPaddingInlineStart:
            selectedPosition.idx > lastFrozenColumnIndex || scrollToPosition?.idx !== undefined
              ? `${totalFrozenColumnWidth}px`
              : undefined,
          scrollPaddingBlock:
            isRowIdxWithinViewportBounds(selectedPosition.rowIdx) ||
            scrollToPosition?.rowIdx !== undefined
              ? `${headerRowsHeight + topSummaryRowsCount * summaryRowHeight}px ${
                  bottomSummaryRowsCount * summaryRowHeight
                }px`
              : undefined,
          gridTemplateColumns,
          gridTemplateRows: templateRows,
          '--rdg-header-row-height': `${headerRowHeight}px`,
          '--rdg-scroll-height': `${scrollHeight}px`,
          ...layoutCssVars
        } as unknown as React.CSSProperties
      }
      dir={direction}
      ref={gridRef}
      onScroll={handleScroll}
      onKeyDown={handleKeyDown}
      onCopy={handleCellCopy}
      onPaste={handleCellPaste}
      data-testid={testId}
      data-cy={dataCy}
    >
      <DataGridDefaultRenderersContext value={defaultGridComponents}>
        <HeaderRowSelectionChangeContext value={selectHeaderRowLatest}>
          <HeaderRowSelectionContext value={headerSelectionValue}>
            {Array.from({ length: groupedColumnHeaderRowsCount }, (_, index) => (
              <GroupedColumnHeaderRow
                key={index}
                rowIdx={index + 1}
                level={-groupedColumnHeaderRowsCount + index}
                columns={getRowViewportColumns(minRowIdx + index)}
                selectedCellIdx={
                  selectedPosition.rowIdx === minRowIdx + index ? selectedPosition.idx : undefined
                }
                selectCell={selectHeaderCellLatest}
              />
            ))}
            <HeaderRow
              headerRowClass={headerRowClass}
              rowIdx={headerRowsCount}
              columns={getRowViewportColumns(mainHeaderRowIdx)}
              onColumnResize={handleColumnResizeLatest}
              onColumnResizeEnd={handleColumnResizeEndLatest}
              onColumnsReorder={onColumnsReorderLastest}
              sortColumns={sortColumns}
              onSortColumnsChange={onSortColumnsChangeLatest}
              lastFrozenColumnIndex={lastFrozenColumnIndex}
              selectedCellIdx={
                selectedPosition.rowIdx === mainHeaderRowIdx ? selectedPosition.idx : undefined
              }
              selectCell={selectHeaderCellLatest}
              shouldFocusGrid={!selectedCellIsWithinSelectionBounds}
              direction={direction}
            />
          </HeaderRowSelectionContext>
        </HeaderRowSelectionChangeContext>
        {rows.length === 0 && noRowsFallback ? (
          noRowsFallback
        ) : (
          <>
            {topSummaryRows?.map((row, rowIdx) => {
              const gridRowStart = headerRowsCount + 1 + rowIdx;
              const summaryRowIdx = mainHeaderRowIdx + 1 + rowIdx;
              const isSummaryRowSelected = selectedPosition.rowIdx === summaryRowIdx;
              const top = headerRowsHeight + summaryRowHeight * rowIdx;

              return (
                <SummaryRow
                  key={rowIdx}
                  aria-rowindex={gridRowStart}
                  rowIdx={summaryRowIdx}
                  gridRowStart={gridRowStart}
                  row={row}
                  top={top}
                  bottom={undefined}
                  viewportColumns={getRowViewportColumns(summaryRowIdx)}
                  lastFrozenColumnIndex={lastFrozenColumnIndex}
                  selectedCellIdx={isSummaryRowSelected ? selectedPosition.idx : undefined}
                  isTop
                  selectCell={selectCellLatest}
                />
              );
            })}
            <RowSelectionChangeContext value={selectRowLatest}>
              {getViewportRows()}
            </RowSelectionChangeContext>
            {bottomSummaryRows?.map((row, rowIdx) => {
              const gridRowStart = headerAndTopSummaryRowsCount + rows.length + rowIdx + 1;
              const summaryRowIdx = rows.length + rowIdx;
              const isSummaryRowSelected = selectedPosition.rowIdx === summaryRowIdx;
              const top =
                clientHeight > totalRowHeight
                  ? gridHeight - summaryRowHeight * (bottomSummaryRows.length - rowIdx)
                  : undefined;
              const bottom =
                top === undefined
                  ? summaryRowHeight * (bottomSummaryRows.length - 1 - rowIdx)
                  : undefined;

              return (
                <SummaryRow
                  aria-rowindex={ariaRowCount - bottomSummaryRowsCount + rowIdx + 1}
                  key={rowIdx}
                  rowIdx={summaryRowIdx}
                  gridRowStart={gridRowStart}
                  row={row}
                  top={top}
                  bottom={bottom}
                  viewportColumns={getRowViewportColumns(summaryRowIdx)}
                  lastFrozenColumnIndex={lastFrozenColumnIndex}
                  selectedCellIdx={isSummaryRowSelected ? selectedPosition.idx : undefined}
                  isTop={false}
                  selectCell={selectCellLatest}
                />
              );
            })}
          </>
        )}
      </DataGridDefaultRenderersContext>

      {renderDragHandle()}

      {/* render empty cells that span only 1 column so we can safely measure column widths, regardless of colSpan */}
      {renderMeasuringCells(viewportColumns)}

      {/* extra div is needed for row navigation in a treegrid */}
      {isTreeGrid && (
        <div
          ref={focusSinkRef}
          tabIndex={isGroupRowFocused ? 0 : -1}
          className={clsx(focusSinkClassname, {
            [focusSinkHeaderAndSummaryClassname]: !isRowIdxWithinViewportBounds(
              selectedPosition.rowIdx
            ),
            [rowSelected]: isGroupRowFocused,
            [rowSelectedWithFrozenCell]: isGroupRowFocused && lastFrozenColumnIndex !== -1
          })}
          style={{
            gridRowStart: selectedPosition.rowIdx + headerAndTopSummaryRowsCount + 1
          }}
        />
      )}

      {scrollToPosition !== null && (
        <ScrollToCell
          scrollToPosition={scrollToPosition}
          setScrollToCellPosition={setScrollToPosition}
          gridRef={gridRef}
        />
      )}
    </div>
  );
}

function getCellToScroll(gridEl: HTMLDivElement) {
  return gridEl.querySelector<HTMLDivElement>(':scope > [role="row"] > [tabindex="0"]');
}

function isSamePosition(p1: Position, p2: Position) {
  return p1.idx === p2.idx && p1.rowIdx === p2.rowIdx;
}
