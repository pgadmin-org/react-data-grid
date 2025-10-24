import * as react0$1 from "react";
import * as react0 from "react";
import * as react6 from "react";
import { Key, ReactElement, ReactNode } from "react";
import * as react_jsx_runtime0$1 from "react/jsx-runtime";
import * as react_jsx_runtime0 from "react/jsx-runtime";
import * as react_jsx_runtime10 from "react/jsx-runtime";
import * as react_jsx_runtime8 from "react/jsx-runtime";
import * as react_jsx_runtime6 from "react/jsx-runtime";
import * as react_jsx_runtime3 from "react/jsx-runtime";
import * as react_jsx_runtime4 from "react/jsx-runtime";

//#region src/types.d.ts
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type Maybe<T> = T | undefined | null;
interface Column<TRow, TSummaryRow = unknown> {
  /** The name of the column. Displayed in the header cell by default */
  readonly name: string | ReactElement;
  /** A unique key to distinguish each column */
  readonly key: string;
  /**
   * Column width. If not specified, it will be determined automatically based on grid width and specified widths of other columns
   * @default 'auto'
   */
  readonly width?: Maybe<number | string>;
  /**
   * Minimum column width in pixels
   * @default 50
   */
  readonly minWidth?: Maybe<number>;
  /** Maximum column width in pixels */
  readonly maxWidth?: Maybe<number>;
  /** Class name(s) for the cell */
  readonly cellClass?: Maybe<string | ((row: TRow) => Maybe<string>)>;
  /** Class name(s) for the header cell */
  readonly headerCellClass?: Maybe<string>;
  /** Class name(s) for the summary cell */
  readonly summaryCellClass?: Maybe<string | ((row: TSummaryRow) => Maybe<string>)>;
  /** Render function to render the content of cells */
  readonly renderCell?: Maybe<(props: RenderCellProps<TRow, TSummaryRow>) => ReactNode>;
  /** Render function to render the content of the header cell */
  readonly renderHeaderCell?: Maybe<(props: RenderHeaderCellProps<TRow, TSummaryRow>) => ReactNode>;
  /** Render function to render the content of summary cells */
  readonly renderSummaryCell?: Maybe<(props: RenderSummaryCellProps<TSummaryRow, TRow>) => ReactNode>;
  /** Render function to render the content of group cells */
  readonly renderGroupCell?: Maybe<(props: RenderGroupCellProps<TRow, TSummaryRow>) => ReactNode>;
  /** Render function to render the content of edit cells. When set, the column is automatically set to be editable */
  readonly renderEditCell?: Maybe<(props: RenderEditCellProps<TRow, TSummaryRow>) => ReactNode>;
  /** Enables cell editing. If set and no editor property specified, then a textinput will be used as the cell editor */
  readonly editable?: Maybe<boolean | ((row: TRow) => boolean)>;
  readonly colSpan?: Maybe<(args: ColSpanArgs<TRow, TSummaryRow>) => Maybe<number>>;
  /** Determines whether column is frozen */
  readonly frozen?: Maybe<boolean>;
  /** Enable resizing of the column */
  readonly resizable?: Maybe<boolean>;
  /** Enable sorting of the column */
  readonly sortable?: Maybe<boolean>;
  /** Enable dragging of the column */
  readonly draggable?: Maybe<boolean>;
  /** Sets the column sort order to be descending instead of ascending the first time the column is sorted */
  readonly sortDescendingFirst?: Maybe<boolean>;
  /** Options for cell editing */
  readonly editorOptions?: Maybe<{
    /**
     * Render the cell content in addition to the edit cell.
     * Enable this option when the editor is rendered outside the grid, like a modal for example.
     * By default, the cell content is not rendered when the edit cell is open.
     * @default false
     */
    readonly displayCellContent?: Maybe<boolean>;
    /**
     * Commit changes when clicking outside the cell
     * @default true
     */
    readonly commitOnOutsideClick?: Maybe<boolean>;
    /**
     * Close the editor when the row changes externally
     * @default true
     */
    readonly closeOnExternalRowChange?: Maybe<boolean>;
  }>;
}
interface CalculatedColumn<TRow, TSummaryRow = unknown> extends Column<TRow, TSummaryRow> {
  readonly parent: CalculatedColumnParent<TRow, TSummaryRow> | undefined;
  readonly idx: number;
  readonly level: number;
  readonly width: number | string;
  readonly minWidth: number;
  readonly maxWidth: number | undefined;
  readonly resizable: boolean;
  readonly sortable: boolean;
  readonly draggable: boolean;
  readonly frozen: boolean;
  readonly renderCell: (props: RenderCellProps<TRow, TSummaryRow>) => ReactNode;
  readonly renderHeaderCell: (props: RenderHeaderCellProps<TRow, TSummaryRow>) => ReactNode;
}
interface ColumnGroup<R$1, SR$1 = unknown> {
  /** The name of the column group, it will be displayed in the header cell */
  readonly name: string | ReactElement;
  readonly headerCellClass?: Maybe<string>;
  readonly children: readonly ColumnOrColumnGroup<R$1, SR$1>[];
}
interface CalculatedColumnParent<R$1, SR$1> {
  readonly name: string | ReactElement;
  readonly parent: CalculatedColumnParent<R$1, SR$1> | undefined;
  readonly idx: number;
  readonly colSpan: number;
  readonly level: number;
  readonly headerCellClass?: Maybe<string>;
}
type ColumnOrColumnGroup<R$1, SR$1 = unknown> = Column<R$1, SR$1> | ColumnGroup<R$1, SR$1>;
type CalculatedColumnOrColumnGroup<R$1, SR$1> = CalculatedColumnParent<R$1, SR$1> | CalculatedColumn<R$1, SR$1>;
interface Position {
  readonly idx: number;
  readonly rowIdx: number;
}
interface RenderCellProps<TRow, TSummaryRow = unknown> {
  column: CalculatedColumn<TRow, TSummaryRow>;
  row: TRow;
  rowIdx: number;
  isCellEditable: boolean;
  tabIndex: number;
  onRowChange: (row: TRow) => void;
}
interface RenderSummaryCellProps<TSummaryRow, TRow = unknown> {
  column: CalculatedColumn<TRow, TSummaryRow>;
  row: TSummaryRow;
  tabIndex: number;
}
interface RenderGroupCellProps<TRow, TSummaryRow = unknown> {
  groupKey: unknown;
  column: CalculatedColumn<TRow, TSummaryRow>;
  row: GroupRow<TRow>;
  childRows: readonly TRow[];
  isExpanded: boolean;
  tabIndex: number;
  toggleGroup: () => void;
}
interface RenderEditCellProps<TRow, TSummaryRow = unknown> {
  column: CalculatedColumn<TRow, TSummaryRow>;
  row: TRow;
  rowIdx: number;
  onRowChange: (row: TRow, commitChanges?: boolean) => void;
  onClose: (commitChanges?: boolean, shouldFocusCell?: boolean) => void;
}
interface RenderHeaderCellProps<TRow, TSummaryRow = unknown> {
  column: CalculatedColumn<TRow, TSummaryRow>;
  sortDirection: SortDirection | undefined;
  priority: number | undefined;
  tabIndex: number;
}
interface BaseCellRendererProps<TRow, TSummaryRow = unknown> extends Omit<React.ComponentProps<'div'>, 'children' | 'onMouseDownCapture' | 'onMouseUpCapture' | 'onMouseEnter'>, Pick<DataGridProps<TRow, TSummaryRow>, 'onCellMouseDown' | 'onCellClick' | 'onCellDoubleClick' | 'onCellContextMenu'> {
  rowIdx: number;
  selectCell: (position: Position, options?: SelectCellOptions) => void;
  rangeSelectionMode: boolean;
  onMouseDownCapture: CellMouseEventHandler<TRow, TSummaryRow>;
  onMouseUpCapture: CellMouseEventHandler<TRow, TSummaryRow>;
  onMouseEnter: CellMouseEventHandler<TRow, TSummaryRow>;
}
interface CellRendererProps<TRow, TSummaryRow> extends BaseCellRendererProps<TRow, TSummaryRow> {
  column: CalculatedColumn<TRow, TSummaryRow>;
  row: TRow;
  colSpan: number | undefined;
  isDraggedOver: boolean;
  isCellSelected: boolean;
  onRowChange: (column: CalculatedColumn<TRow, TSummaryRow>, newRow: TRow) => void;
}
type CellEvent<E extends React.SyntheticEvent<HTMLDivElement>> = E & {
  preventGridDefault: () => void;
  isGridDefaultPrevented: () => boolean;
};
type CellMouseEvent = CellEvent<React.MouseEvent<HTMLDivElement>>;
type CellKeyboardEvent = CellEvent<React.KeyboardEvent<HTMLDivElement>>;
type CellClipboardEvent = React.ClipboardEvent<HTMLDivElement>;
interface CellMouseArgs<TRow, TSummaryRow = unknown> {
  column: CalculatedColumn<TRow, TSummaryRow>;
  row: TRow;
  rowIdx: number;
  selectCell: (enableEditor?: boolean) => void;
}
interface SelectCellKeyDownArgs<TRow, TSummaryRow = unknown> {
  mode: 'SELECT';
  column: CalculatedColumn<TRow, TSummaryRow>;
  row: TRow;
  rowIdx: number;
  selectCell: (position: Position, options?: SelectCellOptions) => void;
}
interface EditCellKeyDownArgs<TRow, TSummaryRow = unknown> {
  mode: 'EDIT';
  column: CalculatedColumn<TRow, TSummaryRow>;
  row: TRow;
  rowIdx: number;
  navigate: () => void;
  onClose: (commitChanges?: boolean, shouldFocusCell?: boolean) => void;
}
type CellKeyDownArgs<TRow, TSummaryRow = unknown> = SelectCellKeyDownArgs<TRow, TSummaryRow> | EditCellKeyDownArgs<TRow, TSummaryRow>;
interface CellSelectArgs<TRow, TSummaryRow = unknown> {
  rowIdx: number;
  row: TRow | undefined;
  column: CalculatedColumn<TRow, TSummaryRow>;
}
type CellMouseEventHandler<R$1, SR$1> = Maybe<(args: CellMouseArgs<NoInfer<R$1>, NoInfer<SR$1>>, event: CellMouseEvent) => void>;
interface BaseRenderRowProps<TRow, TSummaryRow = unknown> extends BaseCellRendererProps<TRow, TSummaryRow> {
  viewportColumns: readonly CalculatedColumn<TRow, TSummaryRow>[];
  rowIdx: number;
  selectedCellIdx: number | undefined;
  isRowSelectionDisabled: boolean;
  isRowSelected: boolean;
  gridRowStart: number;
}
interface RenderRowProps<TRow, TSummaryRow = unknown> extends BaseRenderRowProps<TRow, TSummaryRow> {
  row: TRow;
  lastFrozenColumnIndex: number;
  draggedOverCellIdx: number | undefined;
  selectedCellEditor: ReactElement<RenderEditCellProps<TRow>> | undefined;
  onRowChange: (column: CalculatedColumn<TRow, TSummaryRow>, rowIdx: number, newRow: TRow) => void;
  rowClass: Maybe<(row: TRow, rowIdx: number) => Maybe<string>>;
  selectedCellsRange: {
    startIdx: number;
    endIdx: number;
  };
}
interface RowsChangeData<R$1, SR$1 = unknown> {
  indexes: number[];
  column: CalculatedColumn<R$1, SR$1>;
}
interface SelectRowEvent<TRow> {
  row: TRow;
  checked: boolean;
  isShiftClick: boolean;
}
interface SelectHeaderRowEvent {
  checked: boolean;
}
interface FillEvent<TRow> {
  columnKey: string;
  sourceRow: TRow;
  targetRow: TRow;
}
interface CellCopyPasteArgs<TRow, TSummaryRow = unknown> {
  column: CalculatedColumn<TRow, TSummaryRow>;
  row: TRow;
}
type CellCopyArgs<TRow, TSummaryRow = unknown> = CellCopyPasteArgs<TRow, TSummaryRow>;
type CellPasteArgs<TRow, TSummaryRow = unknown> = CellCopyPasteArgs<TRow, TSummaryRow>;
interface MultiPasteEvent {
  copiedRange: CellsRange;
  targetRange: CellsRange;
}
interface CellsRange {
  startRowIdx: number;
  startColumnIdx: number;
  endRowIdx: number;
  endColumnIdx: number;
}
interface MultiCopyEvent<TRow> {
  cellsRange: CellsRange;
  sourceColumnKeys: string[];
  sourceRows: TRow[];
}
interface GroupRow<TRow> {
  readonly childRows: readonly TRow[];
  readonly id: string;
  readonly parentId: unknown;
  readonly groupKey: unknown;
  readonly isExpanded: boolean;
  readonly level: number;
  readonly posInSet: number;
  readonly setSize: number;
  readonly startRowIndex: number;
}
interface SortColumn {
  readonly columnKey: string;
  readonly direction: SortDirection;
}
type SortDirection = 'ASC' | 'DESC';
type ColSpanArgs<TRow, TSummaryRow> = {
  type: 'HEADER';
} | {
  type: 'ROW';
  row: TRow;
} | {
  type: 'SUMMARY';
  row: TSummaryRow;
};
type RowHeightArgs<TRow> = {
  type: 'ROW';
  row: TRow;
} | {
  type: 'GROUP';
  row: GroupRow<TRow>;
};
interface RenderSortIconProps {
  sortDirection: SortDirection | undefined;
}
interface RenderSortPriorityProps {
  priority: number | undefined;
}
interface RenderSortStatusProps extends RenderSortIconProps, RenderSortPriorityProps {}
interface RenderCheckboxProps extends Pick<React.ComponentProps<'input'>, 'aria-label' | 'aria-labelledby' | 'checked' | 'tabIndex' | 'disabled'> {
  indeterminate?: boolean | undefined;
  onChange: (checked: boolean, shift: boolean) => void;
}
interface Renderers<TRow, TSummaryRow> {
  renderCell?: Maybe<(key: Key, props: CellRendererProps<TRow, TSummaryRow>) => ReactNode>;
  renderCheckbox?: Maybe<(props: RenderCheckboxProps) => ReactNode>;
  renderRow?: Maybe<(key: Key, props: RenderRowProps<TRow, TSummaryRow>) => ReactNode>;
  renderSortStatus?: Maybe<(props: RenderSortStatusProps) => ReactNode>;
  noRowsFallback?: Maybe<ReactNode>;
}
interface SelectCellOptions {
  enableEditor?: Maybe<boolean>;
  shouldFocusCell?: Maybe<boolean>;
}
interface ColumnWidth {
  readonly type: 'resized' | 'measured';
  readonly width: number;
}
type ColumnWidths = ReadonlyMap<string, ColumnWidth>;
type Direction = 'ltr' | 'rtl';
//#endregion
//#region src/ScrollToCell.d.ts
interface PartialPosition {
  readonly idx?: number | undefined;
  readonly rowIdx?: number | undefined;
}
//#endregion
//#region src/DataGrid.d.ts
type DefaultColumnOptions<R$1, SR$1> = Pick<Column<R$1, SR$1>, 'renderCell' | 'renderHeaderCell' | 'width' | 'minWidth' | 'maxWidth' | 'resizable' | 'sortable' | 'draggable'>;
interface DataGridHandle {
  element: HTMLDivElement | null;
  scrollToCell: (position: PartialPosition) => void;
  selectCell: (position: Position, options?: SelectCellOptions) => void;
}
type SharedDivProps = Pick<React.ComponentProps<'div'>, 'role' | 'aria-label' | 'aria-labelledby' | 'aria-description' | 'aria-describedby' | 'aria-rowcount' | 'className' | 'style'>;
interface DataGridProps<R$1, SR$1 = unknown, K extends Key = Key> extends SharedDivProps {
  ref?: Maybe<React.Ref<DataGridHandle>>;
  /**
   * Grid and data Props
   */
  /** An array of column definitions */
  columns: readonly ColumnOrColumnGroup<NoInfer<R$1>, NoInfer<SR$1>>[];
  /** A function called for each rendered row that should return a plain key/value pair object */
  rows: readonly R$1[];
  /** Rows pinned at the top of the grid for summary purposes */
  topSummaryRows?: Maybe<readonly SR$1[]>;
  /** Rows pinned at the bottom of the grid for summary purposes */
  bottomSummaryRows?: Maybe<readonly SR$1[]>;
  /** Function to return a unique key/identifier for each row */
  rowKeyGetter?: Maybe<(row: NoInfer<R$1>) => K>;
  /** Callback triggered when rows are changed */
  onRowsChange?: Maybe<(rows: NoInfer<R$1>[], data: RowsChangeData<NoInfer<R$1>, NoInfer<SR$1>>) => void>;
  /**
   * Dimensions props
   */
  /**
   * Height of each row in pixels
   * @default 35
   */
  rowHeight?: Maybe<number | ((row: NoInfer<R$1>) => number)>;
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
  isRowSelectionDisabled?: Maybe<(row: NoInfer<R$1>) => boolean>;
  /** Callback triggered when the selection changes */
  onSelectedRowsChange?: Maybe<(selectedRows: Set<NoInfer<K>>) => void>;
  /** An array of sorted columns */
  sortColumns?: Maybe<readonly SortColumn[]>;
  /** Callback triggered when sorting changes */
  onSortColumnsChange?: Maybe<(sortColumns: SortColumn[]) => void>;
  /** Default options applied to all columns */
  defaultColumnOptions?: Maybe<DefaultColumnOptions<NoInfer<R$1>, NoInfer<SR$1>>>;
  onFill?: Maybe<(event: FillEvent<NoInfer<R$1>>) => NoInfer<R$1>>;
  onMultiPaste?: Maybe<(event: MultiPasteEvent) => void>;
  onMultiCopy?: Maybe<(event: MultiCopyEvent<NoInfer<R$1>>) => void>;
  rangeLeftBoundaryColIdx?: Maybe<number>;
  onSelectedRangeChange?: Maybe<(selectedRange: CellsRange) => void>;
  /**
   * Event props
   */
  /** Callback triggered when a pointer becomes active in a cell */
  onCellMouseDown?: CellMouseEventHandler<R$1, SR$1>;
  /** Callback triggered when a cell is clicked */
  onCellClick?: CellMouseEventHandler<R$1, SR$1>;
  /** Callback triggered when a cell is double-clicked */
  onCellDoubleClick?: CellMouseEventHandler<R$1, SR$1>;
  /** Callback triggered when a cell is right-clicked */
  onCellContextMenu?: CellMouseEventHandler<R$1, SR$1>;
  /** Callback triggered when a key is pressed in a cell */
  onCellKeyDown?: Maybe<(args: CellKeyDownArgs<NoInfer<R$1>, NoInfer<SR$1>>, event: CellKeyboardEvent) => void>;
  /** Callback triggered when a cell's content is copied */
  onCellCopy?: Maybe<(args: CellCopyArgs<NoInfer<R$1>, NoInfer<SR$1>>, event: CellClipboardEvent) => void>;
  /** Callback triggered when content is pasted into a cell */
  onCellPaste?: Maybe<(args: CellPasteArgs<NoInfer<R$1>, NoInfer<SR$1>>, event: CellClipboardEvent) => NoInfer<R$1>>;
  /** Function called whenever cell selection is changed */
  onSelectedCellChange?: Maybe<(args: CellSelectArgs<NoInfer<R$1>, NoInfer<SR$1>>) => void>;
  /** Callback triggered when the grid is scrolled */
  onScroll?: Maybe<(event: React.UIEvent<HTMLDivElement>) => void>;
  /** Callback triggered when column is resized */
  onColumnResize?: Maybe<(column: CalculatedColumn<R$1, SR$1>, width: number) => void>;
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
  renderers?: Maybe<Renderers<NoInfer<R$1>, NoInfer<SR$1>>>;
  /** Function to apply custom class names to rows */
  rowClass?: Maybe<(row: NoInfer<R$1>, rowIdx: number) => Maybe<string>>;
  /** Custom class name for the header row */
  headerRowClass?: Maybe<string>;
  /**
   * Text direction of the grid ('ltr' or 'rtl')
   * @default 'ltr'
   */
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
declare function DataGrid<R$1, SR$1 = unknown, K extends Key = Key>(props: DataGridProps<R$1, SR$1, K>): react_jsx_runtime0$1.JSX.Element;
//#endregion
//#region src/TreeDataGrid.d.ts
interface TreeDataGridProps<R$1, SR$1 = unknown, K extends Key = Key> extends Omit<DataGridProps<R$1, SR$1, K>, 'columns' | 'role' | 'aria-rowcount' | 'rowHeight' | 'onFill' | 'isRowSelectionDisabled'> {
  columns: readonly Column<NoInfer<R$1>, NoInfer<SR$1>>[];
  rowHeight?: Maybe<number | ((args: RowHeightArgs<NoInfer<R$1>>) => number)>;
  groupBy: readonly string[];
  rowGrouper: (rows: readonly NoInfer<R$1>[], columnKey: string) => Record<string, readonly NoInfer<R$1>[]>;
  expandedGroupIds: ReadonlySet<unknown>;
  onExpandedGroupIdsChange: (expandedGroupIds: Set<unknown>) => void;
  groupIdGetter?: Maybe<(groupKey: string, parentId?: string) => string>;
}
declare function TreeDataGrid<R$1, SR$1 = unknown, K extends Key = Key>({
  columns: rawColumns,
  rows: rawRows,
  rowHeight: rawRowHeight,
  rowKeyGetter: rawRowKeyGetter,
  onCellKeyDown: rawOnCellKeyDown,
  onCellCopy: rawOnCellCopy,
  onCellPaste: rawOnCellPaste,
  onRowsChange,
  selectedRows: rawSelectedRows,
  onSelectedRowsChange: rawOnSelectedRowsChange,
  renderers,
  groupBy: rawGroupBy,
  rowGrouper,
  expandedGroupIds,
  onExpandedGroupIdsChange,
  groupIdGetter: rawGroupIdGetter,
  ...props
}: TreeDataGridProps<R$1, SR$1, K>): react_jsx_runtime0.JSX.Element;
//#endregion
//#region src/DataGridDefaultRenderersContext.d.ts
declare const DataGridDefaultRenderersContext: react0$1.Context<Maybe<Renderers<any, any>>>;
//#endregion
//#region src/Row.d.ts
declare const RowComponent: <R, SR>(props: RenderRowProps<R, SR>) => React.JSX.Element;
//#endregion
//#region src/Cell.d.ts
declare const CellComponent: <R, SR>(props: CellRendererProps<R, SR>) => React.JSX.Element;
//#endregion
//#region src/Columns.d.ts
declare const SELECT_COLUMN_KEY = "rdg-select-column";
declare const SelectColumn: Column<any, any>;
//#endregion
//#region src/cellRenderers/renderCheckbox.d.ts
declare function renderCheckbox({
  onChange,
  indeterminate,
  ...props
}: RenderCheckboxProps): react_jsx_runtime10.JSX.Element;
//#endregion
//#region src/cellRenderers/renderToggleGroup.d.ts
declare function renderToggleGroup<R$1, SR$1>(props: RenderGroupCellProps<R$1, SR$1>): react_jsx_runtime8.JSX.Element;
declare function ToggleGroup<R$1, SR$1>({
  groupKey,
  isExpanded,
  tabIndex,
  toggleGroup
}: RenderGroupCellProps<R$1, SR$1>): react_jsx_runtime8.JSX.Element;
//#endregion
//#region src/cellRenderers/renderValue.d.ts
declare function renderValue<R$1, SR$1>(props: RenderCellProps<R$1, SR$1>): react0.ReactNode;
//#endregion
//#region src/cellRenderers/SelectCellFormatter.d.ts
type SharedInputProps = Pick<RenderCheckboxProps, 'disabled' | 'tabIndex' | 'aria-label' | 'aria-labelledby' | 'indeterminate' | 'onChange'>;
interface SelectCellFormatterProps extends SharedInputProps {
  value: boolean;
}
declare function SelectCellFormatter({
  value,
  tabIndex,
  indeterminate,
  disabled,
  onChange,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy
}: SelectCellFormatterProps): react6.ReactNode;
//#endregion
//#region src/editors/textEditor.d.ts
declare function textEditor<TRow, TSummaryRow>({
  row,
  column,
  onRowChange,
  onClose
}: RenderEditCellProps<TRow, TSummaryRow>): react_jsx_runtime6.JSX.Element;
//#endregion
//#region src/renderHeaderCell.d.ts
declare function renderHeaderCell<R$1, SR$1>({
  column,
  sortDirection,
  priority
}: RenderHeaderCellProps<R$1, SR$1>): string | react_jsx_runtime3.JSX.Element;
//#endregion
//#region src/sortStatus.d.ts
declare function renderSortIcon({
  sortDirection
}: RenderSortIconProps): react_jsx_runtime4.JSX.Element | null;
declare function renderSortPriority({
  priority
}: RenderSortPriorityProps): number | undefined;
//#endregion
//#region src/hooks/useRowSelection.d.ts
declare function useRowSelection(): {
  isRowSelectionDisabled: boolean;
  isRowSelected: boolean;
  onRowSelectionChange: (selectRowEvent: SelectRowEvent<any>) => void;
};
declare function useHeaderRowSelection(): {
  isIndeterminate: boolean;
  isRowSelected: boolean;
  onRowSelectionChange: (selectRowEvent: SelectHeaderRowEvent) => void;
};
//#endregion
export { type CalculatedColumn, type CalculatedColumnOrColumnGroup, type CalculatedColumnParent, CellComponent as Cell, type CellCopyArgs, type CellKeyDownArgs, type CellKeyboardEvent, type CellMouseArgs, type CellMouseEvent, type CellPasteArgs, type CellRendererProps, type CellSelectArgs, type ColSpanArgs, type Column, type ColumnGroup, type ColumnOrColumnGroup, type ColumnWidth, type ColumnWidths, DataGrid, DataGridDefaultRenderersContext, type DataGridHandle, type DataGridProps, type DefaultColumnOptions, type FillEvent, type RenderCellProps, type RenderCheckboxProps, type RenderEditCellProps, type RenderGroupCellProps, type RenderHeaderCellProps, type RenderRowProps, type RenderSortIconProps, type RenderSortPriorityProps, type RenderSortStatusProps, type RenderSummaryCellProps, type Renderers, RowComponent as Row, type RowHeightArgs, type RowsChangeData, SELECT_COLUMN_KEY, SelectCellFormatter, type SelectCellOptions, SelectColumn, type SelectHeaderRowEvent, type SelectRowEvent, type SortColumn, type SortDirection, ToggleGroup, TreeDataGrid, type TreeDataGridProps, renderCheckbox, renderHeaderCell, renderSortIcon, renderSortPriority, renderToggleGroup, renderValue, textEditor, useHeaderRowSelection, useRowSelection };
//# sourceMappingURL=index.d.ts.map