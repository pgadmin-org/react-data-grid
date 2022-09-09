'use strict';

Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

const react = require('react');
const clsx = require('clsx');
const jsxRuntime = require('react/jsx-runtime');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$f = ".cj343x0700-beta16{background-color:inherit;border-block-end:1px solid var(--rdg-border-color);border-inline-end:1px solid var(--rdg-border-color);contain:size style;height:var(--rdg-row-height);outline:none;overflow:hidden;overflow:clip;padding-block:0;padding-inline:8px;position:relative;text-overflow:ellipsis;white-space:nowrap}.cj343x0700-beta16[aria-selected=true]{outline:2px solid var(--rdg-selection-color);outline-offset:-2px}.csofj7r700-beta16 .cj343x0700-beta16{contain:content}.ch2wcw8700-beta16{position:sticky;z-index:1}.c1wvphzh700-beta16{box-shadow:calc(2px*var(--rdg-sign)) 0 5px -2px hsla(0,0%,53%,.3)}";
styleInject(css_248z$f,{"insertAt":"top"});

const cell = "cj343x0700-beta16";
const cellClassname = `rdg-cell ${cell}`;
const cellAutoResizeClassname = "csofj7r700-beta16";
const cellFrozen = "ch2wcw8700-beta16";
const cellFrozenClassname = `rdg-cell-frozen ${cellFrozen}`;
const cellFrozenLast = "c1wvphzh700-beta16";
const cellFrozenLastClassname = `rdg-cell-frozen-last ${cellFrozenLast}`;

var css_248z$e = ".rnvodz5700-beta16{--rdg-color:#000;--rdg-border-color:#ddd;--rdg-summary-border-color:#aaa;--rdg-background-color:#fff;--rdg-header-background-color:#f9f9f9;--rdg-row-hover-background-color:#f5f5f5;--rdg-row-selected-background-color:#dbecfa;--rdg-row-selected-hover-background-color:#c9e3f8;--rdg-checkbox-color:#005194;--rdg-checkbox-focus-color:#61b8ff;--rdg-checkbox-disabled-border-color:#ccc;--rdg-checkbox-disabled-background-color:#ddd;--rdg-selection-color:#66afe9;--rdg-font-size:14px;background-color:var(--rdg-background-color);block-size:350px;border:1px solid var(--rdg-border-color);box-sizing:border-box;color:var(--rdg-color);color-scheme:var(--rdg-color-scheme,light dark);contain:strict;contain:size layout style paint;content-visibility:auto;display:grid;font-size:var(--rdg-font-size);overflow:auto;user-select:none}@supports not (contain:strict){.rnvodz5700-beta16{position:relative;z-index:0}}.rnvodz5700-beta16 *,.rnvodz5700-beta16 :after,.rnvodz5700-beta16 :before{box-sizing:inherit}.rnvodz5700-beta16:before{content:\"\";grid-column:1/-1;grid-row:1/-1}.rnvodz5700-beta16.rdg-dark{--rdg-color-scheme:dark;--rdg-color:#ddd;--rdg-border-color:#444;--rdg-summary-border-color:#555;--rdg-background-color:#212121;--rdg-header-background-color:#1b1b1b;--rdg-row-hover-background-color:#171717;--rdg-row-selected-background-color:#1a73bc;--rdg-row-selected-hover-background-color:#1768ab;--rdg-checkbox-color:#94cfff;--rdg-checkbox-focus-color:#c7e6ff;--rdg-checkbox-disabled-border-color:#000;--rdg-checkbox-disabled-background-color:#333}.rnvodz5700-beta16.rdg-light{--rdg-color-scheme:light}@media (prefers-color-scheme:dark){.rnvodz5700-beta16:not(.rdg-light){--rdg-color:#ddd;--rdg-border-color:#444;--rdg-summary-border-color:#555;--rdg-background-color:#212121;--rdg-header-background-color:#1b1b1b;--rdg-row-hover-background-color:#171717;--rdg-row-selected-background-color:#1a73bc;--rdg-row-selected-hover-background-color:#1768ab;--rdg-checkbox-color:#94cfff;--rdg-checkbox-focus-color:#c7e6ff;--rdg-checkbox-disabled-border-color:#000;--rdg-checkbox-disabled-background-color:#333}}.vlqv91k700-beta16 .r1upfr80700-beta16{cursor:move}.f1lsfrzw700-beta16{grid-column:1/-1;pointer-events:none;z-index:3}";
styleInject(css_248z$e,{"insertAt":"top"});

const root = "rnvodz5700-beta16";
const rootClassname = `rdg ${root}`;
const viewportDragging = "vlqv91k700-beta16";
const viewportDraggingClassname = `rdg-viewport-dragging ${viewportDragging}`;
const focusSinkClassname = "f1lsfrzw700-beta16";

var css_248z$d = ".r1upfr80700-beta16{background-color:var(--rdg-background-color);display:contents;line-height:var(--rdg-row-height)}.r1upfr80700-beta16:hover{background-color:var(--rdg-row-hover-background-color)}.r1upfr80700-beta16[aria-selected=true]{background-color:var(--rdg-row-selected-background-color)}.r1upfr80700-beta16[aria-selected=true]:hover{background-color:var(--rdg-row-selected-hover-background-color)}.r190mhd3700-beta16{outline:2px solid var(--rdg-selection-color);outline-offset:-2px}.r139qu9m700-beta16:before{border-inline-start:2px solid var(--rdg-selection-color);content:\"\";display:inline-block;height:100%;inset-inline-start:0;position:sticky}";
styleInject(css_248z$d,{"insertAt":"top"});

const row = "r1upfr80700-beta16";
const rowClassname = `rdg-row ${row}`;
const rowSelected = "r190mhd3700-beta16";
const rowSelectedClassname = `rdg-row-selected`;
const rowSelectedWithFrozenCell = "r139qu9m700-beta16";

var css_248z$c = ".c1xpveok700-beta16{align-items:center;cursor:pointer;display:flex;inset:0;justify-content:center;margin-inline-end:1px;position:absolute}.c18qzqt5700-beta16{all:unset}.c1pjjz6k700-beta16{background-color:var(--rdg-background-color);block-size:20px;border:2px solid var(--rdg-border-color);content:\"\";inline-size:20px}.c18qzqt5700-beta16:checked+.c1pjjz6k700-beta16{background-color:var(--rdg-checkbox-color);outline:4px solid var(--rdg-background-color);outline-offset:-6px}.c18qzqt5700-beta16:focus+.c1pjjz6k700-beta16{border-color:var(--rdg-checkbox-focus-color)}.c33qujk700-beta16{cursor:default}.c33qujk700-beta16 .c1pjjz6k700-beta16{background-color:var(--rdg-checkbox-disabled-background-color);border-color:var(--rdg-checkbox-disabled-border-color)}";
styleInject(css_248z$c,{"insertAt":"top"});

const checkboxLabel = "c1xpveok700-beta16";
const checkboxLabelClassname = `rdg-checkbox-label ${checkboxLabel}`;
const checkboxInput = "c18qzqt5700-beta16";
const checkboxInputClassname = `rdg-checkbox-input ${checkboxInput}`;
const checkbox = "c1pjjz6k700-beta16";
const checkboxClassname = `rdg-checkbox ${checkbox}`;
const checkboxLabelDisabled = "c33qujk700-beta16";
const checkboxLabelDisabledClassname = `rdg-checkbox-label-disabled ${checkboxLabelDisabled}`;
function checkboxFormatter({
  onChange,
  ...props
}, ref) {
  function handleChange(e) {
    onChange(e.target.checked, e.nativeEvent.shiftKey);
  }

  return /*#__PURE__*/jsxRuntime.jsxs("label", {
    className: clsx(checkboxLabelClassname, props.disabled && checkboxLabelDisabledClassname),
    children: [/*#__PURE__*/jsxRuntime.jsx("input", {
      type: "checkbox",
      ref: ref,
      ...props,
      className: checkboxInputClassname,
      onChange: handleChange
    }), /*#__PURE__*/jsxRuntime.jsx("div", {
      className: checkboxClassname
    })]
  });
}

const useLayoutEffect = typeof window === 'undefined' ? react.useEffect : react.useLayoutEffect;

function useFocusRef(isSelected) {
  const ref = react.useRef(null);
  useLayoutEffect(() => {
    if (!isSelected) return;
    ref.current?.focus({
      preventScroll: true
    });
  }, [isSelected]);
  return {
    ref,
    tabIndex: isSelected ? 0 : -1
  };
}

const DataGridDefaultComponentsContext = /*#__PURE__*/react.createContext(undefined);
const DataGridDefaultComponentsProvider = DataGridDefaultComponentsContext.Provider;
function useDefaultComponents() {
  return react.useContext(DataGridDefaultComponentsContext);
}

function SelectCellFormatter({
  value,
  isCellSelected,
  disabled,
  onChange,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy
}) {
  const {
    ref,
    tabIndex
  } = useFocusRef(isCellSelected);
  const checkboxFormatter = useDefaultComponents().checkboxFormatter;
  return /*#__PURE__*/jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: checkboxFormatter({
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      tabIndex,
      disabled,
      checked: value,
      onChange
    }, ref)
  });
}

function valueFormatter(props) {
  try {
    return /*#__PURE__*/jsxRuntime.jsx(jsxRuntime.Fragment, {
      children: props.row[props.column.key]
    });
  } catch {
    return null;
  }
}

var css_248z$b = ".gnionrs700-beta16{outline:none}.c18nrzwp700-beta16{stroke:currentColor;stroke-width:1.5px;fill:transparent;margin-inline-start:4px;vertical-align:middle}.c18nrzwp700-beta16>path{transition:d .1s}";
styleInject(css_248z$b,{"insertAt":"top"});

const groupCellContent = "gnionrs700-beta16";
const groupCellContentClassname = `rdg-group-cell-content ${groupCellContent}`;
const caret = "c18nrzwp700-beta16";
const caretClassname = `rdg-caret ${caret}`;
function toggleGroupFormatter(props) {
  return /*#__PURE__*/jsxRuntime.jsx(ToggleGroup, { ...props
  });
}
function ToggleGroup({
  groupKey,
  isExpanded,
  isCellSelected,
  toggleGroup
}) {
  const {
    ref,
    tabIndex
  } = useFocusRef(isCellSelected);

  function handleKeyDown({
    key
  }) {
    if (key === 'Enter') {
      toggleGroup();
    }
  }

  const d = isExpanded ? 'M1 1 L 7 7 L 13 1' : 'M1 7 L 7 1 L 13 7';
  return /*#__PURE__*/jsxRuntime.jsxs("span", {
    ref: ref,
    className: groupCellContentClassname,
    tabIndex: tabIndex,
    onKeyDown: handleKeyDown,
    children: [groupKey, /*#__PURE__*/jsxRuntime.jsx("svg", {
      viewBox: "0 0 14 8",
      width: "14",
      height: "8",
      className: caretClassname,
      "aria-hidden": true,
      children: /*#__PURE__*/jsxRuntime.jsx("path", {
        d: d
      })
    })]
  });
}

const RowSelectionContext = /*#__PURE__*/react.createContext(undefined);
const RowSelectionProvider = RowSelectionContext.Provider;
const RowSelectionChangeContext = /*#__PURE__*/react.createContext(undefined);
const RowSelectionChangeProvider = RowSelectionChangeContext.Provider;
function useRowSelection() {
  const rowSelectionContext = react.useContext(RowSelectionContext);
  const rowSelectionChangeContext = react.useContext(RowSelectionChangeContext);

  if (rowSelectionContext === undefined || rowSelectionChangeContext === undefined) {
    throw new Error('useRowSelection must be used within DataGrid cells');
  }

  return [rowSelectionContext, rowSelectionChangeContext];
}

const SELECT_COLUMN_KEY = 'select-row';

function SelectFormatter(props) {
  const [isRowSelected, onRowSelectionChange] = useRowSelection();
  return /*#__PURE__*/jsxRuntime.jsx(SelectCellFormatter, {
    "aria-label": "Select",
    isCellSelected: props.isCellSelected,
    value: isRowSelected,
    onChange: (checked, isShiftClick) => {
      onRowSelectionChange({
        row: props.row,
        checked,
        isShiftClick
      });
    }
  });
}

function SelectGroupFormatter(props) {
  const [isRowSelected, onRowSelectionChange] = useRowSelection();
  return /*#__PURE__*/jsxRuntime.jsx(SelectCellFormatter, {
    "aria-label": "Select Group",
    isCellSelected: props.isCellSelected,
    value: isRowSelected,
    onChange: checked => {
      onRowSelectionChange({
        row: props.row,
        checked,
        isShiftClick: false
      });
    }
  });
}

const SelectColumn = {
  key: SELECT_COLUMN_KEY,
  name: '',
  width: 35,
  minWidth: 35,
  maxWidth: 35,
  resizable: false,
  sortable: false,
  frozen: true,

  headerRenderer(props) {
    return /*#__PURE__*/jsxRuntime.jsx(SelectCellFormatter, {
      "aria-label": "Select All",
      isCellSelected: props.isCellSelected,
      value: props.allRowsSelected,
      onChange: props.onAllRowsSelectionChange
    });
  },

  formatter(props) {
    return /*#__PURE__*/jsxRuntime.jsx(SelectFormatter, { ...props
    });
  },

  groupFormatter(props) {
    return /*#__PURE__*/jsxRuntime.jsx(SelectGroupFormatter, { ...props
    });
  }

};

function getColSpan(column, lastFrozenColumnIndex, args) {
  const colSpan = typeof column.colSpan === 'function' ? column.colSpan(args) : 1;

  if (Number.isInteger(colSpan) && colSpan > 1 && (!column.frozen || column.idx + colSpan - 1 <= lastFrozenColumnIndex)) {
    return colSpan;
  }

  return undefined;
}

function scrollIntoView(element) {
  element?.scrollIntoView({
    inline: 'nearest',
    block: 'nearest'
  });
}

const nonInputKeys = new Set(['Unidentified', 'Alt', 'AltGraph', 'CapsLock', 'Control', 'Fn', 'FnLock', 'Meta', 'NumLock', 'ScrollLock', 'Shift', 'Tab', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'End', 'Home', 'PageDown', 'PageUp', 'Insert', 'ContextMenu', 'Escape', 'Pause', 'Play', 'PrintScreen', 'F1', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12']);
function isCtrlKeyHeldDown(e) {
  return (e.ctrlKey || e.metaKey) && e.key !== 'Control';
}
function isDefaultCellInput(event) {
  return !nonInputKeys.has(event.key);
}
function onEditorNavigation({
  key,
  target
}) {
  if (key === 'Tab' && (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement)) {
    return target.matches('.rdg-editor-container > :only-child, .rdg-editor-container > label:only-child > :only-child');
  }

  return false;
}

function isSelectedCellEditable({
  selectedPosition,
  columns,
  rows,
  isGroupRow
}) {
  const column = columns[selectedPosition.idx];
  const row = rows[selectedPosition.rowIdx];
  return !isGroupRow(row) && isCellEditable(column, row);
}
function isCellEditable(column, row) {
  return column.editor != null && !column.rowGroup && (typeof column.editable === 'function' ? column.editable(row) : column.editable) !== false;
}
function getSelectedCellColSpan({
  rows,
  topSummaryRows,
  bottomSummaryRows,
  rowIdx,
  lastFrozenColumnIndex,
  column,
  isGroupRow
}) {
  const topSummaryRowsCount = topSummaryRows?.length ?? 0;
  const minRowIdx = -1 - topSummaryRowsCount;

  if (rowIdx === minRowIdx) {
    return getColSpan(column, lastFrozenColumnIndex, {
      type: 'HEADER'
    });
  }

  if (topSummaryRows && rowIdx > minRowIdx && rowIdx <= topSummaryRowsCount + minRowIdx) {
    return getColSpan(column, lastFrozenColumnIndex, {
      type: 'SUMMARY',
      row: topSummaryRows[rowIdx + topSummaryRowsCount]
    });
  }

  if (rowIdx >= 0 && rowIdx < rows.length) {
    const row = rows[rowIdx];

    if (!isGroupRow(row)) {
      return getColSpan(column, lastFrozenColumnIndex, {
        type: 'ROW',
        row
      });
    }

    return undefined;
  }

  if (bottomSummaryRows) {
    return getColSpan(column, lastFrozenColumnIndex, {
      type: 'SUMMARY',
      row: bottomSummaryRows[rowIdx - rows.length]
    });
  }

  return undefined;
}
function getNextSelectedCellPosition({
  cellNavigationMode,
  columns,
  colSpanColumns,
  rows,
  topSummaryRows,
  bottomSummaryRows,
  minRowIdx,
  maxRowIdx,
  currentPosition: {
    idx: currentIdx
  },
  nextPosition,
  lastFrozenColumnIndex,
  isCellWithinBounds,
  isGroupRow
}) {
  let {
    idx: nextIdx,
    rowIdx: nextRowIdx
  } = nextPosition;

  const setColSpan = moveRight => {
    if (nextRowIdx >= 0 && nextRowIdx < rows.length) {
      const row = rows[nextRowIdx];
      if (isGroupRow(row)) return;
    }

    for (const column of colSpanColumns) {
      const colIdx = column.idx;
      if (colIdx > nextIdx) break;
      const colSpan = getSelectedCellColSpan({
        rows,
        topSummaryRows,
        bottomSummaryRows,
        rowIdx: nextRowIdx,
        lastFrozenColumnIndex,
        column,
        isGroupRow
      });

      if (colSpan && nextIdx > colIdx && nextIdx < colSpan + colIdx) {
        nextIdx = colIdx + (moveRight ? colSpan : 0);
        break;
      }
    }
  };

  if (isCellWithinBounds(nextPosition)) {
    setColSpan(nextIdx - currentIdx > 0);
  }

  if (cellNavigationMode !== 'NONE') {
    const columnsCount = columns.length;
    const isAfterLastColumn = nextIdx === columnsCount;
    const isBeforeFirstColumn = nextIdx === -1;

    if (isAfterLastColumn) {
      if (cellNavigationMode === 'CHANGE_ROW') {
        const isLastRow = nextRowIdx === maxRowIdx;

        if (!isLastRow) {
          nextIdx = 0;
          nextRowIdx += 1;
        }
      } else {
        nextIdx = 0;
      }
    } else if (isBeforeFirstColumn) {
      if (cellNavigationMode === 'CHANGE_ROW') {
        const isFirstRow = nextRowIdx === minRowIdx;

        if (!isFirstRow) {
          nextRowIdx -= 1;
          nextIdx = columnsCount - 1;
        }
      } else {
        nextIdx = columnsCount - 1;
      }

      setColSpan(false);
    }
  }

  return {
    idx: nextIdx,
    rowIdx: nextRowIdx
  };
}
function canExitGrid({
  cellNavigationMode,
  maxColIdx,
  minRowIdx,
  maxRowIdx,
  selectedPosition: {
    rowIdx,
    idx
  },
  shiftKey
}) {
  if (cellNavigationMode === 'NONE' || cellNavigationMode === 'CHANGE_ROW') {
    const atLastCellInRow = idx === maxColIdx;
    const atFirstCellInRow = idx === 0;
    const atLastRow = rowIdx === maxRowIdx;
    const atFirstRow = rowIdx === minRowIdx;
    return shiftKey ? atFirstCellInRow && atFirstRow : atLastCellInRow && atLastRow;
  }

  return false;
}

function getRowStyle(rowIdx, height) {
  if (height !== undefined) {
    return {
      '--rdg-grid-row-start': rowIdx,
      '--rdg-row-height': `${height}px`
    };
  }

  return {
    '--rdg-grid-row-start': rowIdx
  };
}
function getCellStyle(column, colSpan) {
  return {
    gridColumnStart: column.idx + 1,
    gridColumnEnd: colSpan !== undefined ? `span ${colSpan}` : undefined,
    insetInlineStart: column.frozen ? `var(--rdg-frozen-left-${column.idx})` : undefined
  };
}
function getCellClassname(column, ...extraClasses) {
  return clsx(cellClassname, ...extraClasses, column.frozen && cellFrozenClassname, column.isLastFrozenColumn && cellFrozenLastClassname);
}

const {
  min,
  max,
  round,
  floor,
  sign,
  abs,
  ceil
} = Math;
function assertIsValidKeyGetter(keyGetter) {
  if (typeof keyGetter !== 'function') {
    throw new Error('Please specify the rowKeyGetter prop to use selection');
  }
}
function clampColumnWidth(width, {
  minWidth,
  maxWidth
}) {
  width = max(width, minWidth);

  if (typeof maxWidth === 'number' && maxWidth >= minWidth) {
    return min(width, maxWidth);
  }

  return width;
}

function useCalculatedColumns({
  rawColumns,
  columnWidths,
  viewportWidth,
  scrollLeft,
  defaultColumnOptions,
  rawGroupBy,
  enableVirtualization
}) {
  const defaultWidth = defaultColumnOptions?.width;
  const defaultMinWidth = defaultColumnOptions?.minWidth ?? 80;
  const defaultMaxWidth = defaultColumnOptions?.maxWidth;
  const defaultFormatter = defaultColumnOptions?.formatter ?? valueFormatter;
  const defaultSortable = defaultColumnOptions?.sortable ?? false;
  const defaultResizable = defaultColumnOptions?.resizable ?? false;
  const {
    columns,
    colSpanColumns,
    lastFrozenColumnIndex,
    groupBy
  } = react.useMemo(() => {
    const groupBy = [];
    let lastFrozenColumnIndex = -1;
    const columns = rawColumns.map(rawColumn => {
      const rowGroup = rawGroupBy?.includes(rawColumn.key) ?? false;
      const frozen = rowGroup || rawColumn.frozen || false;
      const column = { ...rawColumn,
        idx: 0,
        frozen,
        isLastFrozenColumn: false,
        rowGroup,
        width: rawColumn.width ?? defaultWidth,
        minWidth: rawColumn.minWidth ?? defaultMinWidth,
        maxWidth: rawColumn.maxWidth ?? defaultMaxWidth,
        sortable: rawColumn.sortable ?? defaultSortable,
        resizable: rawColumn.resizable ?? defaultResizable,
        formatter: rawColumn.formatter ?? defaultFormatter
      };

      if (rowGroup) {
        column.groupFormatter ?? (column.groupFormatter = toggleGroupFormatter);
      }

      if (frozen) {
        lastFrozenColumnIndex++;
      }

      return column;
    });
    columns.sort(({
      key: aKey,
      frozen: frozenA
    }, {
      key: bKey,
      frozen: frozenB
    }) => {
      if (aKey === SELECT_COLUMN_KEY) return -1;
      if (bKey === SELECT_COLUMN_KEY) return 1;

      if (rawGroupBy?.includes(aKey)) {
        if (rawGroupBy.includes(bKey)) {
          return rawGroupBy.indexOf(aKey) - rawGroupBy.indexOf(bKey);
        }

        return -1;
      }

      if (rawGroupBy?.includes(bKey)) return 1;

      if (frozenA) {
        if (frozenB) return 0;
        return -1;
      }

      if (frozenB) return 1;
      return 0;
    });
    const colSpanColumns = [];
    columns.forEach((column, idx) => {
      column.idx = idx;

      if (column.rowGroup) {
        groupBy.push(column.key);
      }

      if (column.colSpan != null) {
        colSpanColumns.push(column);
      }
    });

    if (lastFrozenColumnIndex !== -1) {
      columns[lastFrozenColumnIndex].isLastFrozenColumn = true;
    }

    return {
      columns,
      colSpanColumns,
      lastFrozenColumnIndex,
      groupBy
    };
  }, [rawColumns, defaultWidth, defaultMinWidth, defaultMaxWidth, defaultFormatter, defaultResizable, defaultSortable, rawGroupBy]);
  const {
    layoutCssVars,
    totalFrozenColumnWidth,
    columnMetrics
  } = react.useMemo(() => {
    const columnMetrics = new Map();
    let left = 0;
    let totalFrozenColumnWidth = 0;
    let templateColumns = '';
    let allocatedWidth = 0;
    let unassignedColumnsCount = 0;

    for (const column of columns) {
      let width = getSpecifiedWidth(column, columnWidths, viewportWidth);

      if (width === undefined) {
        unassignedColumnsCount++;
      } else {
        width = clampColumnWidth(width, column);
        allocatedWidth += width;
        columnMetrics.set(column, {
          width,
          left: 0
        });
      }
    }

    for (const column of columns) {
      let width;

      if (columnMetrics.has(column)) {
        const columnMetric = columnMetrics.get(column);
        columnMetric.left = left;
        ({
          width
        } = columnMetric);
      } else {
        const unallocatedWidth = viewportWidth - allocatedWidth;
        const unallocatedColumnWidth = round(unallocatedWidth / unassignedColumnsCount);
        width = clampColumnWidth(unallocatedColumnWidth, column);
        allocatedWidth += width;
        unassignedColumnsCount--;
        columnMetrics.set(column, {
          width,
          left
        });
      }

      left += width;
      templateColumns += `${width}px `;
    }

    if (lastFrozenColumnIndex !== -1) {
      const columnMetric = columnMetrics.get(columns[lastFrozenColumnIndex]);
      totalFrozenColumnWidth = columnMetric.left + columnMetric.width;
    }

    const layoutCssVars = {
      gridTemplateColumns: templateColumns
    };

    for (let i = 0; i <= lastFrozenColumnIndex; i++) {
      const column = columns[i];
      layoutCssVars[`--rdg-frozen-left-${column.idx}`] = `${columnMetrics.get(column).left}px`;
    }

    return {
      layoutCssVars,
      totalFrozenColumnWidth,
      columnMetrics
    };
  }, [columnWidths, columns, viewportWidth, lastFrozenColumnIndex]);
  const [colOverscanStartIdx, colOverscanEndIdx] = react.useMemo(() => {
    if (!enableVirtualization) {
      return [0, columns.length - 1];
    }

    const viewportLeft = scrollLeft + totalFrozenColumnWidth;
    const viewportRight = scrollLeft + viewportWidth;
    const lastColIdx = columns.length - 1;
    const firstUnfrozenColumnIdx = min(lastFrozenColumnIndex + 1, lastColIdx);

    if (viewportLeft >= viewportRight) {
      return [firstUnfrozenColumnIdx, firstUnfrozenColumnIdx];
    }

    let colVisibleStartIdx = firstUnfrozenColumnIdx;

    while (colVisibleStartIdx < lastColIdx) {
      const {
        left,
        width
      } = columnMetrics.get(columns[colVisibleStartIdx]);

      if (left + width > viewportLeft) {
        break;
      }

      colVisibleStartIdx++;
    }

    let colVisibleEndIdx = colVisibleStartIdx;

    while (colVisibleEndIdx < lastColIdx) {
      const {
        left,
        width
      } = columnMetrics.get(columns[colVisibleEndIdx]);

      if (left + width >= viewportRight) {
        break;
      }

      colVisibleEndIdx++;
    }

    const colOverscanStartIdx = max(firstUnfrozenColumnIdx, colVisibleStartIdx - 1);
    const colOverscanEndIdx = min(lastColIdx, colVisibleEndIdx + 1);
    return [colOverscanStartIdx, colOverscanEndIdx];
  }, [columnMetrics, columns, lastFrozenColumnIndex, scrollLeft, totalFrozenColumnWidth, viewportWidth, enableVirtualization]);
  return {
    columns,
    colSpanColumns,
    colOverscanStartIdx,
    colOverscanEndIdx,
    layoutCssVars,
    columnMetrics,
    lastFrozenColumnIndex,
    totalFrozenColumnWidth,
    groupBy
  };
}

function getSpecifiedWidth({
  key,
  width
}, columnWidths, viewportWidth) {
  if (columnWidths.has(key)) {
    return columnWidths.get(key);
  }

  if (typeof width === 'number') {
    return width;
  }

  if (typeof width === 'string' && /^\d+%$/.test(width)) {
    return floor(viewportWidth * parseInt(width, 10) / 100);
  }

  return undefined;
}

function useGridDimensions() {
  const gridRef = react.useRef(null);
  const [inlineSize, setInlineSize] = react.useState(1);
  const [blockSize, setBlockSize] = react.useState(1);
  useLayoutEffect(() => {
    const {
      ResizeObserver
    } = window;
    if (ResizeObserver == null) return;
    const {
      clientWidth,
      clientHeight,
      offsetWidth,
      offsetHeight
    } = gridRef.current;
    const {
      width,
      height
    } = gridRef.current.getBoundingClientRect();
    const initialWidth = width - offsetWidth + clientWidth;
    const initialHeight = height - offsetHeight + clientHeight;
    setInlineSize(handleDevicePixelRatio(initialWidth));
    setBlockSize(initialHeight);
    const resizeObserver = new ResizeObserver(entries => {
      const size = entries[0].contentBoxSize[0];
      setInlineSize(handleDevicePixelRatio(size.inlineSize));
      setBlockSize(size.blockSize);
    });
    resizeObserver.observe(gridRef.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  return [gridRef, inlineSize, blockSize];
}

function handleDevicePixelRatio(size) {
  return size - (devicePixelRatio === 1 ? 0 : ceil(devicePixelRatio));
}

function useLatestFunc(fn) {
  const ref = react.useRef(fn);
  react.useEffect(() => {
    ref.current = fn;
  });
  return react.useCallback((...args) => {
    ref.current(...args);
  }, []);
}

function useRovingCellRef(isSelected) {
  const [isChildFocused, setIsChildFocused] = react.useState(false);

  if (isChildFocused && !isSelected) {
    setIsChildFocused(false);
  }

  const ref = react.useCallback(cell => {
    if (cell === null) return;
    scrollIntoView(cell);
    if (cell.contains(document.activeElement)) return;
    cell.focus({
      preventScroll: true
    });
  }, []);

  function onFocus(event) {
    if (event.target !== event.currentTarget) {
      setIsChildFocused(true);
    }
  }

  const isFocused = isSelected && !isChildFocused;
  return {
    ref: isSelected ? ref : undefined,
    tabIndex: isFocused ? 0 : -1,
    onFocus: isSelected ? onFocus : undefined
  };
}

function useViewportColumns({
  columns,
  colSpanColumns,
  rows,
  topSummaryRows,
  bottomSummaryRows,
  colOverscanStartIdx,
  colOverscanEndIdx,
  lastFrozenColumnIndex,
  rowOverscanStartIdx,
  rowOverscanEndIdx,
  isGroupRow
}) {
  const startIdx = react.useMemo(() => {
    if (colOverscanStartIdx === 0) return 0;
    let startIdx = colOverscanStartIdx;

    const updateStartIdx = (colIdx, colSpan) => {
      if (colSpan !== undefined && colIdx + colSpan > colOverscanStartIdx) {
        startIdx = colIdx;
        return true;
      }

      return false;
    };

    for (const column of colSpanColumns) {
      const colIdx = column.idx;
      if (colIdx >= startIdx) break;

      if (updateStartIdx(colIdx, getColSpan(column, lastFrozenColumnIndex, {
        type: 'HEADER'
      }))) {
        break;
      }

      for (let rowIdx = rowOverscanStartIdx; rowIdx <= rowOverscanEndIdx; rowIdx++) {
        const row = rows[rowIdx];
        if (isGroupRow(row)) continue;

        if (updateStartIdx(colIdx, getColSpan(column, lastFrozenColumnIndex, {
          type: 'ROW',
          row
        }))) {
          break;
        }
      }

      if (topSummaryRows != null) {
        for (const row of topSummaryRows) {
          if (updateStartIdx(colIdx, getColSpan(column, lastFrozenColumnIndex, {
            type: 'SUMMARY',
            row
          }))) {
            break;
          }
        }
      }

      if (bottomSummaryRows != null) {
        for (const row of bottomSummaryRows) {
          if (updateStartIdx(colIdx, getColSpan(column, lastFrozenColumnIndex, {
            type: 'SUMMARY',
            row
          }))) {
            break;
          }
        }
      }
    }

    return startIdx;
  }, [rowOverscanStartIdx, rowOverscanEndIdx, rows, topSummaryRows, bottomSummaryRows, colOverscanStartIdx, lastFrozenColumnIndex, colSpanColumns, isGroupRow]);
  return react.useMemo(() => {
    const viewportColumns = [];

    for (let colIdx = 0; colIdx <= colOverscanEndIdx; colIdx++) {
      const column = columns[colIdx];
      if (colIdx < startIdx && !column.frozen) continue;
      viewportColumns.push(column);
    }

    return viewportColumns;
  }, [startIdx, colOverscanEndIdx, columns]);
}

function isReadonlyArray(arr) {
  return Array.isArray(arr);
}

function useViewportRows({
  rawRows,
  rowHeight,
  clientHeight,
  scrollTop,
  groupBy,
  rowGrouper,
  expandedGroupIds,
  enableVirtualization
}) {
  const [groupedRows, rowsCount] = react.useMemo(() => {
    if (groupBy.length === 0 || rowGrouper == null) return [undefined, rawRows.length];

    const groupRows = (rows, [groupByKey, ...remainingGroupByKeys], startRowIndex) => {
      let groupRowsCount = 0;
      const groups = {};

      for (const [key, childRows] of Object.entries(rowGrouper(rows, groupByKey))) {
        const [childGroups, childRowsCount] = remainingGroupByKeys.length === 0 ? [childRows, childRows.length] : groupRows(childRows, remainingGroupByKeys, startRowIndex + groupRowsCount + 1);
        groups[key] = {
          childRows,
          childGroups,
          startRowIndex: startRowIndex + groupRowsCount
        };
        groupRowsCount += childRowsCount + 1;
      }

      return [groups, groupRowsCount];
    };

    return groupRows(rawRows, groupBy, 0);
  }, [groupBy, rowGrouper, rawRows]);
  const [rows, isGroupRow] = react.useMemo(() => {
    const allGroupRows = new Set();
    if (!groupedRows) return [rawRows, isGroupRow];
    const flattenedRows = [];

    const expandGroup = (rows, parentId, level) => {
      if (isReadonlyArray(rows)) {
        flattenedRows.push(...rows);
        return;
      }

      Object.keys(rows).forEach((groupKey, posInSet, keys) => {
        const id = parentId !== undefined ? `${parentId}__${groupKey}` : groupKey;
        const isExpanded = expandedGroupIds?.has(id) ?? false;
        const {
          childRows,
          childGroups,
          startRowIndex
        } = rows[groupKey];
        const groupRow = {
          id,
          parentId,
          groupKey,
          isExpanded,
          childRows,
          level,
          posInSet,
          startRowIndex,
          setSize: keys.length
        };
        flattenedRows.push(groupRow);
        allGroupRows.add(groupRow);

        if (isExpanded) {
          expandGroup(childGroups, id, level + 1);
        }
      });
    };

    expandGroup(groupedRows, undefined, 0);
    return [flattenedRows, isGroupRow];

    function isGroupRow(row) {
      return allGroupRows.has(row);
    }
  }, [expandedGroupIds, groupedRows, rawRows]);
  const {
    totalRowHeight,
    gridTemplateRows,
    getRowTop,
    getRowHeight,
    findRowIdx
  } = react.useMemo(() => {
    if (typeof rowHeight === 'number') {
      return {
        totalRowHeight: rowHeight * rows.length,
        gridTemplateRows: ` repeat(${rows.length}, ${rowHeight}px)`,
        getRowTop: rowIdx => rowIdx * rowHeight,
        getRowHeight: () => rowHeight,
        findRowIdx: offset => floor(offset / rowHeight)
      };
    }

    let totalRowHeight = 0;
    let gridTemplateRows = ' ';
    const rowPositions = rows.map(row => {
      const currentRowHeight = isGroupRow(row) ? rowHeight({
        type: 'GROUP',
        row
      }) : rowHeight({
        type: 'ROW',
        row
      });
      const position = {
        top: totalRowHeight,
        height: currentRowHeight
      };
      gridTemplateRows += `${currentRowHeight}px `;
      totalRowHeight += currentRowHeight;
      return position;
    });

    const validateRowIdx = rowIdx => {
      return max(0, min(rows.length - 1, rowIdx));
    };

    return {
      totalRowHeight,
      gridTemplateRows,
      getRowTop: rowIdx => rowPositions[validateRowIdx(rowIdx)].top,
      getRowHeight: rowIdx => rowPositions[validateRowIdx(rowIdx)].height,

      findRowIdx(offset) {
        let start = 0;
        let end = rowPositions.length - 1;

        while (start <= end) {
          const middle = start + floor((end - start) / 2);
          const currentOffset = rowPositions[middle].top;
          if (currentOffset === offset) return middle;

          if (currentOffset < offset) {
            start = middle + 1;
          } else if (currentOffset > offset) {
            end = middle - 1;
          }

          if (start > end) return end;
        }

        return 0;
      }

    };
  }, [isGroupRow, rowHeight, rows]);
  let rowOverscanStartIdx = 0;
  let rowOverscanEndIdx = rows.length - 1;
  let topFillerHeight = 0;
  let bottomFillerHeight = 0;

  if (enableVirtualization) {
    const overscanThreshold = 4;
    const rowVisibleStartIdx = findRowIdx(scrollTop);
    const rowVisibleEndIdx = findRowIdx(scrollTop + clientHeight);
    rowOverscanStartIdx = max(0, rowVisibleStartIdx - overscanThreshold);
    rowOverscanEndIdx = min(rows.length - 1, rowVisibleEndIdx + overscanThreshold);
    topFillerHeight = getRowHeight(rowOverscanStartIdx) * rowOverscanStartIdx;
    bottomFillerHeight = clientHeight - getRowHeight(rowOverscanStartIdx) * rows.length;

    if (bottomFillerHeight <= 0) {
      bottomFillerHeight = getRowHeight(rowOverscanStartIdx) * (rowsCount - rowOverscanEndIdx - 1);
    }
  }

  return {
    rowOverscanStartIdx,
    rowOverscanEndIdx,
    rows,
    topFillerHeight,
    bottomFillerHeight,
    rowsCount,
    totalRowHeight,
    gridTemplateRows,
    isGroupRow,
    getRowTop,
    getRowHeight,
    findRowIdx
  };
}

var css_248z$a = ".h1vs8cet700-beta16{cursor:pointer;display:flex}.h1vs8cet700-beta16:focus{outline:none}.h1b61esp700-beta16{flex-grow:1;overflow:hidden;overflow:clip;text-overflow:ellipsis}";
styleInject(css_248z$a,{"insertAt":"top"});

const headerSortCell = "h1vs8cet700-beta16";
const headerSortCellClassname = `rdg-header-sort-cell ${headerSortCell}`;
const headerSortName = "h1b61esp700-beta16";
const headerSortNameClassname = `rdg-header-sort-name ${headerSortName}`;
function headerRenderer({
  column,
  sortDirection,
  priority,
  onSort,
  isCellSelected
}) {
  if (!column.sortable) return /*#__PURE__*/jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: column.name
  });
  return /*#__PURE__*/jsxRuntime.jsx(SortableHeaderCell, {
    onSort: onSort,
    sortDirection: sortDirection,
    priority: priority,
    isCellSelected: isCellSelected,
    children: column.name
  });
}

function SortableHeaderCell({
  onSort,
  sortDirection,
  priority,
  children,
  isCellSelected
}) {
  const sortIcon = useDefaultComponents().sortIcon;
  const {
    ref,
    tabIndex
  } = useFocusRef(isCellSelected);

  function handleKeyDown(event) {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      onSort(event.ctrlKey || event.metaKey);
    }
  }

  function handleClick(event) {
    onSort(event.ctrlKey || event.metaKey);
  }

  return /*#__PURE__*/jsxRuntime.jsxs("span", {
    ref: ref,
    tabIndex: tabIndex,
    className: headerSortCellClassname,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    children: [/*#__PURE__*/jsxRuntime.jsx("span", {
      className: headerSortNameClassname,
      children: children
    }), /*#__PURE__*/jsxRuntime.jsxs("span", {
      children: [sortIcon({
        sortDirection
      }), priority]
    })]
  });
}

var css_248z$9 = ".c6l2wv1700-beta16{touch-action:none}.c6l2wv1700-beta16:after{content:\"\";cursor:col-resize;inline-size:10px;inset-block-end:0;inset-block-start:0;inset-inline-end:0;position:absolute}";
styleInject(css_248z$9,{"insertAt":"top"});

const cellResizable = "c6l2wv1700-beta16";
const cellResizableClassname = `rdg-cell-resizable ${cellResizable}`;
function HeaderCell({
  column,
  colSpan,
  isCellSelected,
  onColumnResize,
  allRowsSelected,
  onAllRowsSelectionChange,
  sortColumns,
  onSortColumnsChange,
  selectCell,
  shouldFocusGrid,
  direction
}) {
  const isRtl = direction === 'rtl';
  const {
    ref,
    tabIndex,
    onFocus
  } = useRovingCellRef(isCellSelected);
  const sortIndex = sortColumns?.findIndex(sort => sort.columnKey === column.key);
  const sortColumn = sortIndex !== undefined && sortIndex > -1 ? sortColumns[sortIndex] : undefined;
  const sortDirection = sortColumn?.direction;
  const priority = sortColumn !== undefined && sortColumns.length > 1 ? sortIndex + 1 : undefined;
  const ariaSort = sortDirection && !priority ? sortDirection === 'ASC' ? 'ascending' : 'descending' : undefined;
  const className = getCellClassname(column, column.headerCellClass, column.resizable && cellResizableClassname);
  const headerRenderer$1 = column.headerRenderer ?? headerRenderer;

  function onPointerDown(event) {
    if (event.pointerType === 'mouse' && event.buttons !== 1) {
      return;
    }

    const {
      currentTarget,
      pointerId
    } = event;
    const {
      right,
      left
    } = currentTarget.getBoundingClientRect();
    const offset = isRtl ? event.clientX - left : right - event.clientX;

    if (offset > 11) {
      return;
    }

    function onPointerMove(event) {
      const {
        right,
        left
      } = currentTarget.getBoundingClientRect();
      const width = isRtl ? right + offset - event.clientX : event.clientX + offset - left;

      if (width > 0) {
        onColumnResize(column, clampColumnWidth(width, column));
      }
    }

    function onLostPointerCapture() {
      currentTarget.removeEventListener('pointermove', onPointerMove);
      currentTarget.removeEventListener('lostpointercapture', onLostPointerCapture);
    }

    currentTarget.setPointerCapture(pointerId);
    currentTarget.addEventListener('pointermove', onPointerMove);
    currentTarget.addEventListener('lostpointercapture', onLostPointerCapture);
  }

  function onSort(ctrlClick) {
    if (onSortColumnsChange == null) return;
    const {
      sortDescendingFirst
    } = column;

    if (sortColumn === undefined) {
      const nextSort = {
        columnKey: column.key,
        direction: sortDescendingFirst ? 'DESC' : 'ASC'
      };
      onSortColumnsChange(sortColumns && ctrlClick ? [...sortColumns, nextSort] : [nextSort]);
    } else {
      let nextSortColumn;

      if (sortDescendingFirst && sortDirection === 'DESC' || !sortDescendingFirst && sortDirection === 'ASC') {
        nextSortColumn = {
          columnKey: column.key,
          direction: sortDirection === 'ASC' ? 'DESC' : 'ASC'
        };
      }

      if (ctrlClick) {
        const nextSortColumns = [...sortColumns];

        if (nextSortColumn) {
          nextSortColumns[sortIndex] = nextSortColumn;
        } else {
          nextSortColumns.splice(sortIndex, 1);
        }

        onSortColumnsChange(nextSortColumns);
      } else {
        onSortColumnsChange(nextSortColumn ? [nextSortColumn] : []);
      }
    }
  }

  function onClick() {
    selectCell(column.idx);
  }

  function onDoubleClick(event) {
    const {
      right,
      left
    } = event.currentTarget.getBoundingClientRect();
    const offset = isRtl ? event.clientX - left : right - event.clientX;

    if (offset > 11) {
      return;
    }

    onColumnResize(column, 'auto');
  }

  function handleFocus(event) {
    onFocus?.(event);

    if (shouldFocusGrid) {
      selectCell(0);
    }
  }

  return /*#__PURE__*/jsxRuntime.jsx("div", {
    role: "columnheader",
    "aria-colindex": column.idx + 1,
    "aria-selected": isCellSelected,
    "aria-sort": ariaSort,
    "aria-colspan": colSpan,
    ref: ref,
    tabIndex: shouldFocusGrid ? 0 : tabIndex,
    className: className,
    style: { ...getCellStyle(column, colSpan),
      minWidth: column.minWidth,
      maxWidth: column.maxWidth ?? undefined
    },
    onFocus: handleFocus,
    onClick: onClick,
    onDoubleClick: column.resizable ? onDoubleClick : undefined,
    onPointerDown: column.resizable ? onPointerDown : undefined,
    children: headerRenderer$1({
      column,
      sortDirection,
      priority,
      onSort,
      allRowsSelected,
      onAllRowsSelectionChange,
      isCellSelected
    })
  });
}

var css_248z$8 = ".h10tskcx700-beta16{background-color:var(--rdg-header-background-color);display:contents;font-weight:700;line-height:var(--rdg-header-row-height)}.h10tskcx700-beta16>.cj343x0700-beta16{height:var(--rdg-header-row-height);inset-block-start:0;position:sticky;z-index:1}.h10tskcx700-beta16>.ch2wcw8700-beta16{z-index:2}";
styleInject(css_248z$8,{"insertAt":"top"});

const headerRow = "h10tskcx700-beta16";
const headerRowClassname = `rdg-header-row ${headerRow}`;

function HeaderRow({
  columns,
  allRowsSelected,
  onAllRowsSelectionChange,
  onColumnResize,
  sortColumns,
  onSortColumnsChange,
  lastFrozenColumnIndex,
  selectedCellIdx,
  selectCell,
  shouldFocusGrid,
  direction
}) {
  const cells = [];

  for (let index = 0; index < columns.length; index++) {
    const column = columns[index];
    const colSpan = getColSpan(column, lastFrozenColumnIndex, {
      type: 'HEADER'
    });

    if (colSpan !== undefined) {
      index += colSpan - 1;
    }

    cells.push( /*#__PURE__*/jsxRuntime.jsx(HeaderCell, {
      column: column,
      colSpan: colSpan,
      isCellSelected: selectedCellIdx === column.idx,
      onColumnResize: onColumnResize,
      allRowsSelected: allRowsSelected,
      onAllRowsSelectionChange: onAllRowsSelectionChange,
      onSortColumnsChange: onSortColumnsChange,
      sortColumns: sortColumns,
      selectCell: selectCell,
      shouldFocusGrid: shouldFocusGrid && index === 0,
      direction: direction
    }, column.key));
  }

  return /*#__PURE__*/jsxRuntime.jsx("div", {
    role: "row",
    "aria-rowindex": 1,
    className: clsx(headerRowClassname, selectedCellIdx === -1 && rowSelectedClassname),
    style: getRowStyle(1),
    children: cells
  });
}

const HeaderRow$1 = /*#__PURE__*/react.memo(HeaderRow);

var css_248z$7 = ".c6ra8a3700-beta16,.cq910m0700-beta16{background-color:#ccf}.cq910m0700-beta16.c6ra8a3700-beta16{background-color:#99f}";
styleInject(css_248z$7,{"insertAt":"top"});

const cellCopied = "c6ra8a3700-beta16";
const cellCopiedClassname = `rdg-cell-copied ${cellCopied}`;
const cellDraggedOver = "cq910m0700-beta16";
const cellDraggedOverClassname = `rdg-cell-dragged-over ${cellDraggedOver}`;

function Cell({
  column,
  colSpan,
  isCellSelected,
  isCopied,
  isDraggedOver,
  row,
  dragHandle,
  onRowClick,
  onRowDoubleClick,
  onRowChange,
  selectCell,
  rangeSelectionMode,
  ...props
}) {
  const {
    ref,
    tabIndex,
    onFocus
  } = useRovingCellRef(isCellSelected);
  const {
    cellClass
  } = column;
  const className = getCellClassname(column, typeof cellClass === 'function' ? cellClass(row) : cellClass, isCopied && cellCopiedClassname, isDraggedOver && cellDraggedOverClassname);

  function selectCellWrapper(openEditor) {
    selectCell(row, column, openEditor);
  }

  function handleClick() {
    selectCellWrapper(column.editorOptions?.editOnClick);
    onRowClick?.(row, column);
  }

  function handleContextMenu() {
    selectCellWrapper();
  }

  function handleDoubleClick() {
    selectCellWrapper(true);
    onRowDoubleClick?.(row, column);
  }

  function onMouseDown() {
    if (rangeSelectionMode) {
      selectCellWrapper(false);
      onRowClick?.(row, column);
    }
  }

  function handleRowChange(newRow) {
    onRowChange(column, newRow);
  }

  return /*#__PURE__*/jsxRuntime.jsx("div", {
    role: "gridcell",
    "aria-colindex": column.idx + 1,
    "aria-selected": isCellSelected,
    "aria-colspan": colSpan,
    "aria-readonly": !isCellEditable(column, row) || undefined,
    ref: ref,
    tabIndex: tabIndex,
    className: className,
    style: getCellStyle(column, colSpan),
    onClick: handleClick,
    onDoubleClick: handleDoubleClick,
    onContextMenu: handleContextMenu,
    onFocus: onFocus,
    onMouseDown: onMouseDown,
    ...props,
    children: !column.rowGroup && /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [column.formatter({
        column,
        row,
        isCellSelected,
        onRowChange: handleRowChange
      }), dragHandle]
    })
  });
}

const Cell$1 = /*#__PURE__*/react.memo(Cell);

const isValueInBetween = (value, num1, num2) => {
  if (num1 >= num2) {
    return value <= num1 && value >= num2;
  }

  return value >= num1 && value <= num2;
};

function Row({
  className,
  rowIdx,
  gridRowStart,
  height,
  selectedCellIdx,
  selectedCellsRange,
  isRowSelected,
  copiedCellIdx,
  draggedOverCellIdx,
  lastFrozenColumnIndex,
  row,
  viewportColumns,
  selectedCellEditor,
  selectedCellDragHandle,
  onRowClick,
  onRowDoubleClick,
  rowClass,
  setDraggedOverRowIdx,
  onMouseEnter,
  onRowChange,
  onCellMouseDown,
  onCellMouseUp,
  onCellMouseEnter,
  selectCell,
  rangeSelectionMode,
  ...props
}, ref) {
  const handleRowChange = useLatestFunc((column, newRow) => {
    onRowChange(column, rowIdx, newRow);
  });

  function handleDragEnter(event) {
    setDraggedOverRowIdx?.(rowIdx);
    onMouseEnter?.(event);
  }

  className = clsx(rowClassname, `rdg-row-${rowIdx % 2 === 0 ? 'even' : 'odd'}`, rowClass?.(row), className, selectedCellIdx === -1 && rowSelectedClassname);
  const cells = [];

  for (let index = 0; index < viewportColumns.length; index++) {
    const column = viewportColumns[index];
    const {
      idx
    } = column;
    const colSpan = getColSpan(column, lastFrozenColumnIndex, {
      type: 'ROW',
      row
    });

    if (colSpan !== undefined) {
      index += colSpan - 1;
    }

    const isCellSelected = selectedCellIdx === idx || rangeSelectionMode && isValueInBetween(idx, selectedCellsRange.startIdx, selectedCellsRange.endIdx);

    if (isCellSelected && selectedCellEditor) {
      cells.push(selectedCellEditor);
    } else {
      cells.push( /*#__PURE__*/jsxRuntime.jsx(Cell$1, {
        column: column,
        colSpan: colSpan,
        row: row,
        isCopied: copiedCellIdx === idx,
        isDraggedOver: draggedOverCellIdx === idx,
        isCellSelected: isCellSelected,
        dragHandle: isCellSelected ? selectedCellDragHandle : undefined,
        onRowClick: onRowClick,
        onRowDoubleClick: onRowDoubleClick,
        onRowChange: handleRowChange,
        selectCell: selectCell,
        onMouseDownCapture: () => onCellMouseDown?.(row, column),
        onMouseUpCapture: () => onCellMouseUp?.(row, column),
        onMouseEnter: () => onCellMouseEnter?.(column.idx),
        rangeSelectionMode: rangeSelectionMode
      }, column.key));
    }
  }

  return /*#__PURE__*/jsxRuntime.jsx(RowSelectionProvider, {
    value: isRowSelected,
    children: /*#__PURE__*/jsxRuntime.jsx("div", {
      role: "row",
      ref: ref,
      className: className,
      onMouseEnter: handleDragEnter,
      style: getRowStyle(gridRowStart, height),
      ...props,
      children: cells
    })
  });
}

const RowComponent = /*#__PURE__*/react.memo( /*#__PURE__*/react.forwardRef(Row));
const RowComponent$1 = RowComponent;
function defaultRowRenderer(key, props) {
  return /*#__PURE__*/jsxRuntime.jsx(RowComponent, { ...props
  }, key);
}

function GroupCell({
  id,
  groupKey,
  childRows,
  isExpanded,
  isCellSelected,
  column,
  row,
  groupColumnIndex,
  toggleGroup: toggleGroupWrapper
}) {
  const {
    ref,
    tabIndex,
    onFocus
  } = useRovingCellRef(isCellSelected);

  function toggleGroup() {
    toggleGroupWrapper(id);
  }

  const isLevelMatching = column.rowGroup && groupColumnIndex === column.idx;
  return /*#__PURE__*/jsxRuntime.jsx("div", {
    role: "gridcell",
    "aria-colindex": column.idx + 1,
    "aria-selected": isCellSelected,
    ref: ref,
    tabIndex: tabIndex,
    className: getCellClassname(column),
    style: { ...getCellStyle(column),
      cursor: isLevelMatching ? 'pointer' : 'default'
    },
    onClick: isLevelMatching ? toggleGroup : undefined,
    onFocus: onFocus,
    children: (!column.rowGroup || groupColumnIndex === column.idx) && column.groupFormatter?.({
      groupKey,
      childRows,
      column,
      row,
      isExpanded,
      isCellSelected,
      toggleGroup
    })
  }, column.key);
}

const GroupCell$1 = /*#__PURE__*/react.memo(GroupCell);

var css_248z$6 = ".g1yxluv3700-beta16:not([aria-selected=true]){background-color:var(--rdg-header-background-color)}.g1yxluv3700-beta16>.cj343x0700-beta16:not(:last-child):not(.c1wvphzh700-beta16){border-inline-end:none}";
styleInject(css_248z$6,{"insertAt":"top"});

const groupRow = "g1yxluv3700-beta16";
const groupRowClassname = `rdg-group-row ${groupRow}`;

function GroupedRow({
  id,
  groupKey,
  viewportColumns,
  childRows,
  rowIdx,
  row,
  gridRowStart,
  height,
  level,
  isExpanded,
  selectedCellIdx,
  isRowSelected,
  selectGroup,
  toggleGroup,
  ...props
}) {
  const idx = viewportColumns[0].key === SELECT_COLUMN_KEY ? level + 1 : level;

  function handleSelectGroup() {
    selectGroup(rowIdx);
  }

  return /*#__PURE__*/jsxRuntime.jsx(RowSelectionProvider, {
    value: isRowSelected,
    children: /*#__PURE__*/jsxRuntime.jsx("div", {
      role: "row",
      "aria-level": level,
      "aria-expanded": isExpanded,
      className: clsx(rowClassname, groupRowClassname, `rdg-row-${rowIdx % 2 === 0 ? 'even' : 'odd'}`, selectedCellIdx === -1 && rowSelectedClassname),
      onClick: handleSelectGroup,
      style: getRowStyle(gridRowStart, height),
      ...props,
      children: viewportColumns.map(column => /*#__PURE__*/jsxRuntime.jsx(GroupCell$1, {
        id: id,
        groupKey: groupKey,
        childRows: childRows,
        isExpanded: isExpanded,
        isCellSelected: selectedCellIdx === column.idx,
        column: column,
        row: row,
        groupColumnIndex: idx,
        toggleGroup: toggleGroup
      }, column.key))
    })
  });
}

const GroupRowRenderer = /*#__PURE__*/react.memo(GroupedRow);

var css_248z$5 = ".s8wc6fl700-beta16{inset-block-end:var(--rdg-summary-row-bottom);inset-block-start:var(--rdg-summary-row-top)}";
styleInject(css_248z$5,{"insertAt":"top"});

const summaryCellClassname = "s8wc6fl700-beta16";

function SummaryCell({
  column,
  colSpan,
  row,
  isCellSelected,
  selectCell
}) {
  const {
    ref,
    tabIndex,
    onFocus
  } = useRovingCellRef(isCellSelected);
  const {
    summaryCellClass
  } = column;
  const className = getCellClassname(column, summaryCellClassname, typeof summaryCellClass === 'function' ? summaryCellClass(row) : summaryCellClass);

  function onClick() {
    selectCell(row, column);
  }

  return /*#__PURE__*/jsxRuntime.jsx("div", {
    role: "gridcell",
    "aria-colindex": column.idx + 1,
    "aria-colspan": colSpan,
    "aria-selected": isCellSelected,
    ref: ref,
    tabIndex: tabIndex,
    className: className,
    style: getCellStyle(column, colSpan),
    onClick: onClick,
    onFocus: onFocus,
    children: column.summaryFormatter?.({
      column,
      row,
      isCellSelected
    })
  });
}

const SummaryCell$1 = /*#__PURE__*/react.memo(SummaryCell);

var css_248z$4 = ".skuhp55700-beta16.r1upfr80700-beta16{line-height:var(--rdg-summary-row-height)}.skuhp55700-beta16.r1upfr80700-beta16>.cj343x0700-beta16{position:sticky}.tf8l5ub700-beta16.r1upfr80700-beta16>.cj343x0700-beta16{z-index:1}.tf8l5ub700-beta16.r1upfr80700-beta16>.ch2wcw8700-beta16{z-index:2}.tb9ughf700-beta16>.cj343x0700-beta16{border-block-end:2px solid var(--rdg-summary-border-color)}.b1yssfnt700-beta16>.cj343x0700-beta16{border-block-start:2px solid var(--rdg-summary-border-color)}";
styleInject(css_248z$4,{"insertAt":"top"});

const summaryRow = "skuhp55700-beta16";
const topSummaryRow = "tf8l5ub700-beta16";
const topSummaryRowBorderClassname = "tb9ughf700-beta16";
const bottomSummaryRowBorderClassname = "b1yssfnt700-beta16";
const summaryRowClassname = `rdg-summary-row ${summaryRow}`;
const topSummaryRowClassname = `rdg-top-summary-row ${topSummaryRow}`;

function SummaryRow({
  rowIdx,
  gridRowStart,
  row,
  viewportColumns,
  top,
  bottom,
  lastFrozenColumnIndex,
  selectedCellIdx,
  lastTopRowIdx,
  selectCell,
  'aria-rowindex': ariaRowIndex
}) {
  const cells = [];

  for (let index = 0; index < viewportColumns.length; index++) {
    const column = viewportColumns[index];
    const colSpan = getColSpan(column, lastFrozenColumnIndex, {
      type: 'SUMMARY',
      row
    });

    if (colSpan !== undefined) {
      index += colSpan - 1;
    }

    const isCellSelected = selectedCellIdx === column.idx;
    cells.push( /*#__PURE__*/jsxRuntime.jsx(SummaryCell$1, {
      column: column,
      colSpan: colSpan,
      row: row,
      isCellSelected: isCellSelected,
      selectCell: selectCell
    }, column.key));
  }

  const isTop = lastTopRowIdx !== undefined;
  return /*#__PURE__*/jsxRuntime.jsx("div", {
    role: "row",
    "aria-rowindex": ariaRowIndex,
    className: clsx(rowClassname, `rdg-row-${rowIdx % 2 === 0 ? 'even' : 'odd'}`, summaryRowClassname, isTop ? [topSummaryRowClassname, lastTopRowIdx === rowIdx && topSummaryRowBorderClassname] : ['rdg-bottom-summary-row', rowIdx === 0 && bottomSummaryRowBorderClassname], selectedCellIdx === -1 && rowSelectedClassname),
    style: { ...getRowStyle(gridRowStart),
      '--rdg-summary-row-top': top !== undefined ? `${top}px` : undefined,
      '--rdg-summary-row-bottom': bottom !== undefined ? `${bottom}px` : undefined
    },
    children: cells
  });
}

const SummaryRow$1 = /*#__PURE__*/react.memo(SummaryRow);

var css_248z$3 = ".cis5rrm700-beta16.rdg-cell{padding:0}";
styleInject(css_248z$3,{"insertAt":"top"});

const cellEditing = "cis5rrm700-beta16";
function EditCell({
  column,
  colSpan,
  row,
  onRowChange,
  closeEditor
}) {
  const frameRequestRef = react.useRef();
  const commitOnOutsideClick = column.editorOptions?.commitOnOutsideClick !== false;
  const commitOnOutsideMouseDown = useLatestFunc(() => {
    onClose(true);
  });
  react.useEffect(() => {
    if (!commitOnOutsideClick) return;

    function onWindowCaptureMouseDown() {
      frameRequestRef.current = requestAnimationFrame(commitOnOutsideMouseDown);
    }

    addEventListener('mousedown', onWindowCaptureMouseDown, {
      capture: true
    });
    return () => {
      removeEventListener('mousedown', onWindowCaptureMouseDown, {
        capture: true
      });
      cancelFrameRequest();
    };
  }, [commitOnOutsideClick, commitOnOutsideMouseDown]);

  function cancelFrameRequest() {
    cancelAnimationFrame(frameRequestRef.current);
  }

  function onKeyDown(event) {
    if (event.key === 'Escape') {
      event.stopPropagation();
      onClose();
    } else if (event.key === 'Enter') {
      event.stopPropagation();
      onClose(true);
    } else {
      const onNavigation = column.editorOptions?.onNavigation ?? onEditorNavigation;

      if (!onNavigation(event)) {
        event.stopPropagation();
      }
    }
  }

  function onClose(commitChanges) {
    if (commitChanges) {
      onRowChange(row, true);
    } else {
      closeEditor();
    }
  }

  const {
    cellClass
  } = column;
  const className = getCellClassname(column, 'rdg-editor-container', typeof cellClass === 'function' ? cellClass(row) : cellClass, !column.editorOptions?.renderFormatter && cellEditing);
  return /*#__PURE__*/jsxRuntime.jsx("div", {
    role: "gridcell",
    "aria-colindex": column.idx + 1,
    "aria-colspan": colSpan,
    "aria-selected": true,
    className: className,
    style: getCellStyle(column, colSpan),
    onKeyDown: onKeyDown,
    onMouseDownCapture: commitOnOutsideClick ? cancelFrameRequest : undefined,
    children: column.editor != null && /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [column.editor({
        column,
        row,
        onRowChange,
        onClose
      }), column.editorOptions?.renderFormatter && column.formatter({
        column,
        row,
        isCellSelected: true,
        onRowChange
      })]
    })
  });
}

var css_248z$2 = ".c1w9bbhr700-beta16{background-color:var(--rdg-selection-color);block-size:8px;cursor:move;inline-size:8px;inset-block-end:0;inset-inline-end:0;position:absolute}.c1w9bbhr700-beta16:hover{background-color:var(--rdg-background-color);block-size:16px;border:2px solid var(--rdg-selection-color);inline-size:16px}";
styleInject(css_248z$2,{"insertAt":"top"});

const cellDragHandle = "c1w9bbhr700-beta16";
const cellDragHandleClassname = `rdg-cell-drag-handle ${cellDragHandle}`;
function DragHandle({
  rows,
  columns,
  selectedPosition,
  latestDraggedOverRowIdx,
  isCellEditable,
  onRowsChange,
  onFill,
  setDragging,
  setDraggedOverRowIdx
}) {
  function handleMouseDown(event) {
    if (event.buttons !== 1) return;
    setDragging(true);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseup', onMouseUp);

    function onMouseOver(event) {
      if (event.buttons !== 1) onMouseUp();
    }

    function onMouseUp() {
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseup', onMouseUp);
      setDragging(false);
      handleDragEnd();
    }
  }

  function handleDragEnd() {
    const overRowIdx = latestDraggedOverRowIdx.current;
    if (overRowIdx === undefined) return;
    const {
      rowIdx
    } = selectedPosition;
    const startRowIndex = rowIdx < overRowIdx ? rowIdx + 1 : overRowIdx;
    const endRowIndex = rowIdx < overRowIdx ? overRowIdx + 1 : rowIdx;
    updateRows(startRowIndex, endRowIndex);
    setDraggedOverRowIdx(undefined);
  }

  function handleDoubleClick(event) {
    event.stopPropagation();
    updateRows(selectedPosition.rowIdx + 1, rows.length);
  }

  function updateRows(startRowIdx, endRowIdx) {
    const {
      idx,
      rowIdx
    } = selectedPosition;
    const column = columns[idx];
    const sourceRow = rows[rowIdx];
    const updatedRows = [...rows];
    const indexes = [];

    for (let i = startRowIdx; i < endRowIdx; i++) {
      if (isCellEditable({
        rowIdx: i,
        idx
      })) {
        const updatedRow = onFill({
          columnKey: column.key,
          sourceRow,
          targetRow: rows[i]
        });

        if (updatedRow !== rows[i]) {
          updatedRows[i] = updatedRow;
          indexes.push(i);
        }
      }
    }

    if (indexes.length > 0) {
      onRowsChange?.(updatedRows, {
        indexes,
        column
      });
    }
  }

  return /*#__PURE__*/jsxRuntime.jsx("div", {
    className: cellDragHandleClassname,
    onMouseDown: handleMouseDown,
    onDoubleClick: handleDoubleClick
  });
}

var css_248z$1 = ".a1et11xf700-beta16{fill:currentColor}.a1et11xf700-beta16>path{transition:d .1s}";
styleInject(css_248z$1,{"insertAt":"top"});

const arrow = "a1et11xf700-beta16";
const arrowClassname = `rdg-sort-arrow ${arrow}`;
function sortIcon({
  sortDirection
}) {
  if (sortDirection === undefined) return null;
  return /*#__PURE__*/jsxRuntime.jsx("svg", {
    viewBox: "0 0 12 8",
    width: "12",
    height: "8",
    className: arrowClassname,
    "aria-hidden": true,
    children: /*#__PURE__*/jsxRuntime.jsx("path", {
      d: sortDirection === 'ASC' ? 'M0 8 6 0 12 8' : 'M0 0 6 8 12 0'
    })
  });
}

const initialPosition = {
  idx: -1,
  rowIdx: -2,
  mode: 'SELECT'
};
const initialSelectedRange = {
  startRowIdx: -1,
  startColumnIdx: -1,
  endRowIdx: -1,
  endColumnIdx: -1
};

function DataGrid({
  columns: rawColumns,
  rows: rawRows,
  topSummaryRows,
  bottomSummaryRows,
  rowKeyGetter,
  onRowsChange,
  rowHeight,
  headerRowHeight: rawHeaderRowHeight,
  summaryRowHeight: rawSummaryRowHeight,
  selectedRows,
  onSelectedRowsChange,
  sortColumns,
  onSortColumnsChange,
  defaultColumnOptions,
  groupBy: rawGroupBy,
  rowGrouper,
  expandedGroupIds,
  onExpandedGroupIdsChange,
  onRowClick,
  onRowDoubleClick,
  onScroll,
  onColumnResize,
  onFill,
  onCopy,
  onPaste,
  onMultiPaste,
  onMultiCopy,
  rangeLeftBoundaryColIdx,
  onSelectedRangeChange,
  cellNavigationMode: rawCellNavigationMode,
  enableVirtualization,
  enableRangeSelection,
  renderers,
  className,
  style,
  rowClass,
  direction,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  'data-testid': testId
}, ref) {
  const defaultComponents = useDefaultComponents();
  rowHeight ?? (rowHeight = 35);
  const headerRowHeight = rawHeaderRowHeight ?? (typeof rowHeight === 'number' ? rowHeight : 35);
  const summaryRowHeight = rawSummaryRowHeight ?? (typeof rowHeight === 'number' ? rowHeight : 35);
  const rowRenderer = renderers?.rowRenderer ?? defaultComponents?.rowRenderer ?? defaultRowRenderer;
  const sortIcon$1 = renderers?.sortIcon ?? defaultComponents?.sortIcon ?? sortIcon;
  const checkboxFormatter$1 = renderers?.checkboxFormatter ?? defaultComponents?.checkboxFormatter ?? checkboxFormatter;
  const noRowsFallback = renderers?.noRowsFallback ?? defaultComponents?.noRowsFallback;
  const cellNavigationMode = rawCellNavigationMode ?? 'NONE';
  enableVirtualization ?? (enableVirtualization = true);
  enableRangeSelection ?? (enableRangeSelection = false);
  direction ?? (direction = 'ltr');
  const [scrollTop, setScrollTop] = react.useState(0);
  const [scrollLeft, setScrollLeft] = react.useState(0);
  const [columnWidths, setColumnWidths] = react.useState(() => new Map());
  const [selectedPosition, setSelectedPosition] = react.useState(initialPosition);
  const [copiedCell, setCopiedCell] = react.useState(null);
  const [isDragging, setDragging] = react.useState(false);
  const [draggedOverRowIdx, setOverRowIdx] = react.useState(undefined);
  const [autoResizeColumn, setAutoResizeColumn] = react.useState(null);
  const [selectedRange, setSelectedRange] = react.useState(initialSelectedRange);
  const [copiedRange, setCopiedRange] = react.useState(null);
  const [isMouseRangeSelectionMode, setIsMouseRangeSelectionMode] = react.useState(false);
  const prevSelectedPosition = react.useRef(selectedPosition);
  const latestDraggedOverRowIdx = react.useRef(draggedOverRowIdx);
  const lastSelectedRowIdx = react.useRef(-1);
  const rowRef = react.useRef(null);
  const [gridRef, gridWidth, gridHeight] = useGridDimensions();
  const headerRowsCount = 1;
  const topSummaryRowsCount = topSummaryRows?.length ?? 0;
  const bottomSummaryRowsCount = bottomSummaryRows?.length ?? 0;
  const summaryRowsCount = topSummaryRowsCount + bottomSummaryRowsCount;
  const clientHeight = gridHeight - headerRowHeight - summaryRowsCount * summaryRowHeight;
  const isSelectable = selectedRows != null && onSelectedRowsChange != null;
  const isRtl = direction === 'rtl';
  const leftKey = isRtl ? 'ArrowRight' : 'ArrowLeft';
  const rightKey = isRtl ? 'ArrowLeft' : 'ArrowRight';
  const rangeLeftBoundary = typeof rangeLeftBoundaryColIdx === 'undefined' || rangeLeftBoundaryColIdx == null ? -1 : rangeLeftBoundaryColIdx;
  const defaultGridComponents = react.useMemo(() => ({
    sortIcon: sortIcon$1,
    checkboxFormatter: checkboxFormatter$1
  }), [sortIcon$1, checkboxFormatter$1]);
  const allRowsSelected = react.useMemo(() => {
    const {
      length
    } = rawRows;
    return length !== 0 && selectedRows != null && rowKeyGetter != null && selectedRows.size >= length && rawRows.every(row => selectedRows.has(rowKeyGetter(row)));
  }, [rawRows, selectedRows, rowKeyGetter]);

  const setSelectedRangeWithBoundary = value => {
    const boundValue = { ...value
    };

    if (boundValue.startColumnIdx <= rangeLeftBoundary) {
      boundValue.startColumnIdx = rangeLeftBoundary + 1;
    }

    if (boundValue.endColumnIdx > rangeLeftBoundary) {
      setSelectedRange(boundValue);
    }
  };

  const {
    columns,
    colSpanColumns,
    colOverscanStartIdx,
    colOverscanEndIdx,
    layoutCssVars,
    columnMetrics,
    lastFrozenColumnIndex,
    totalFrozenColumnWidth,
    groupBy
  } = useCalculatedColumns({
    rawColumns,
    columnWidths,
    scrollLeft,
    viewportWidth: gridWidth,
    defaultColumnOptions,
    rawGroupBy: rowGrouper ? rawGroupBy : undefined,
    enableVirtualization
  });
  const {
    rowOverscanStartIdx,
    rowOverscanEndIdx,
    rows,
    rowsCount,
    totalRowHeight,
    isGroupRow,
    getRowTop,
    getRowHeight,
    findRowIdx,
    topFillerHeight,
    bottomFillerHeight
  } = useViewportRows({
    rawRows,
    groupBy,
    rowGrouper,
    rowHeight,
    clientHeight,
    scrollTop,
    expandedGroupIds,
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
    bottomSummaryRows,
    isGroupRow
  });
  const hasGroups = groupBy.length > 0 && typeof rowGrouper === 'function';
  const minColIdx = hasGroups ? -1 : 0;
  const maxColIdx = columns.length - 1;
  const minRowIdx = -1 - topSummaryRowsCount;
  const maxRowIdx = rows.length + bottomSummaryRowsCount - 1;
  const selectedCellIsWithinSelectionBounds = isCellWithinSelectionBounds(selectedPosition);
  const selectedCellIsWithinViewportBounds = isCellWithinViewportBounds(selectedPosition);
  const selectRowLatest = useLatestFunc(selectRow);
  const selectAllRowsLatest = useLatestFunc(selectAllRows);
  const handleFormatterRowChangeLatest = useLatestFunc(updateRow);
  const selectViewportCellLatest = useLatestFunc((row, column, enableEditor) => {
    const rowIdx = rows.indexOf(row);
    selectCell({
      rowIdx,
      idx: column.idx
    }, enableEditor);
  });
  const selectGroupLatest = useLatestFunc(rowIdx => {
    selectCell({
      rowIdx,
      idx: -1
    });
  });
  const selectHeaderCellLatest = useLatestFunc(idx => {
    selectCell({
      rowIdx: minRowIdx,
      idx
    });
  });
  const selectTopSummaryCellLatest = useLatestFunc((summaryRow, column) => {
    const rowIdx = topSummaryRows.indexOf(summaryRow);
    selectCell({
      rowIdx: rowIdx + minRowIdx + 1,
      idx: column.idx
    });
  });
  const selectBottomSummaryCellLatest = useLatestFunc((summaryRow, column) => {
    const rowIdx = bottomSummaryRows.indexOf(summaryRow) + rows.length;
    selectCell({
      rowIdx,
      idx: column.idx
    });
  });
  const toggleGroupLatest = useLatestFunc(toggleGroup);
  useLayoutEffect(() => {
    if (!selectedCellIsWithinSelectionBounds || isSamePosition(selectedPosition, prevSelectedPosition.current)) {
      prevSelectedPosition.current = selectedPosition;
      return;
    }

    prevSelectedPosition.current = selectedPosition;

    if (selectedPosition.idx === -1) {
      rowRef.current.focus({
        preventScroll: true
      });
      scrollIntoView(rowRef.current);
    }
  });
  useLayoutEffect(() => {
    if (autoResizeColumn === null) return;
    const columnElement = gridRef.current.querySelector(`[aria-colindex="${autoResizeColumn.idx + 1}"]`);
    const {
      width
    } = columnElement.getBoundingClientRect();
    setColumnWidths(columnWidths => {
      const newColumnWidths = new Map(columnWidths);
      newColumnWidths.set(autoResizeColumn.key, width);
      return newColumnWidths;
    });
    setAutoResizeColumn(null);
    onColumnResize?.(autoResizeColumn.idx, width);
  }, [autoResizeColumn, gridRef, onColumnResize]);
  react.useImperativeHandle(ref, () => ({
    element: gridRef.current,
    scrollToColumn,

    scrollToRow(rowIdx) {
      const {
        current
      } = gridRef;
      if (!current) return;
      current.scrollTo({
        top: getRowTop(rowIdx),
        behavior: 'smooth'
      });
    },

    selectCell
  }));
  react.useEffect(() => {
    onSelectedRangeChange?.(selectedRange);
  }, [selectedRange]);
  const handleColumnResize = react.useCallback((column, width) => {
    if (width === 'auto') {
      setAutoResizeColumn(column);
      return;
    }

    setColumnWidths(columnWidths => {
      const newColumnWidths = new Map(columnWidths);
      newColumnWidths.set(column.key, width);
      return newColumnWidths;
    });
    onColumnResize?.(column.idx, width);
  }, [onColumnResize]);
  const setDraggedOverRowIdx = react.useCallback(rowIdx => {
    setOverRowIdx(rowIdx);
    latestDraggedOverRowIdx.current = rowIdx;
  }, []);

  function selectRow({
    row,
    checked,
    isShiftClick
  }) {
    if (!onSelectedRowsChange) return;
    assertIsValidKeyGetter(rowKeyGetter);
    const newSelectedRows = new Set(selectedRows);

    if (isGroupRow(row)) {
      for (const childRow of row.childRows) {
        const rowKey = rowKeyGetter(childRow);

        if (checked) {
          newSelectedRows.add(rowKey);
        } else {
          newSelectedRows.delete(rowKey);
        }
      }

      onSelectedRowsChange(newSelectedRows);
      return;
    }

    const rowKey = rowKeyGetter(row);

    if (checked) {
      newSelectedRows.add(rowKey);
      const previousRowIdx = lastSelectedRowIdx.current;
      const rowIdx = rows.indexOf(row);
      lastSelectedRowIdx.current = rowIdx;

      if (isShiftClick && previousRowIdx !== -1 && previousRowIdx !== rowIdx) {
        const step = sign(rowIdx - previousRowIdx);

        for (let i = previousRowIdx + step; i !== rowIdx; i += step) {
          const row = rows[i];
          if (isGroupRow(row)) continue;
          newSelectedRows.add(rowKeyGetter(row));
        }
      }
    } else {
      newSelectedRows.delete(rowKey);
      lastSelectedRowIdx.current = -1;
    }

    onSelectedRowsChange(newSelectedRows);
  }

  function selectAllRows(checked) {
    if (!onSelectedRowsChange) return;
    assertIsValidKeyGetter(rowKeyGetter);
    const newSelectedRows = new Set(selectedRows);

    for (const row of rawRows) {
      const rowKey = rowKeyGetter(row);

      if (checked) {
        newSelectedRows.add(rowKey);
      } else {
        newSelectedRows.delete(rowKey);
      }
    }

    onSelectedRowsChange(newSelectedRows);
  }

  function toggleGroup(expandedGroupId) {
    if (!onExpandedGroupIdsChange) return;
    const newExpandedGroupIds = new Set(expandedGroupIds);

    if (newExpandedGroupIds.has(expandedGroupId)) {
      newExpandedGroupIds.delete(expandedGroupId);
    } else {
      newExpandedGroupIds.add(expandedGroupId);
    }

    onExpandedGroupIdsChange(newExpandedGroupIds);
  }

  function handleKeyDown(event) {
    if (!(event.target instanceof Element)) return;
    const isCellEvent = event.target.closest('.rdg-cell') !== null;
    const isRowEvent = hasGroups && event.target === rowRef.current;
    if (!isCellEvent && !isRowEvent) return;
    const {
      key,
      keyCode
    } = event;
    const {
      rowIdx
    } = selectedPosition;

    if (selectedCellIsWithinViewportBounds && (onPaste != null || onCopy != null || onMultiCopy != null || onMultiPaste != null) && isCtrlKeyHeldDown(event) && !isGroupRow(rows[rowIdx]) && selectedPosition.mode === 'SELECT') {
      const cKey = 67;
      const vKey = 86;

      if (keyCode === cKey) {
        handleCopy();
        return;
      }

      if (keyCode === vKey) {
        handlePaste();
        return;
      }
    }

    if (isRowIdxWithinViewportBounds(rowIdx)) {
      const row = rows[rowIdx];

      if (isGroupRow(row) && selectedPosition.idx === -1 && (key === leftKey && row.isExpanded || key === rightKey && !row.isExpanded)) {
        event.preventDefault();
        toggleGroup(row.id);
        return;
      }
    }

    if (event.shiftKey) {
      switch (event.key) {
        case 'ArrowUp':
          if (selectedRange.endRowIdx > 0) {
            setSelectedRangeWithBoundary({ ...selectedRange,
              endRowIdx: selectedRange.endRowIdx - 1
            });
          }

          break;

        case 'ArrowDown':
          if (selectedRange.endRowIdx < rows.length - 1) {
            setSelectedRangeWithBoundary({ ...selectedRange,
              endRowIdx: selectedRange.endRowIdx + 1
            });
          }

          break;

        case 'ArrowRight':
          if (selectedRange.endColumnIdx < columns.length - 1) {
            setSelectedRangeWithBoundary({ ...selectedRange,
              endColumnIdx: selectedRange.endColumnIdx + 1
            });
          }

          break;

        case 'ArrowLeft':
          if (selectedRange.endColumnIdx > 0) {
            setSelectedRangeWithBoundary({ ...selectedRange,
              endColumnIdx: selectedRange.endColumnIdx - 1
            });
          }

          break;
      }
    } else {
      switch (event.key) {
        case 'Escape':
          setCopiedCell(null);
          return;

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

  function handleScroll(event) {
    const {
      scrollTop,
      scrollLeft
    } = event.currentTarget;
    setScrollTop(scrollTop);
    setScrollLeft(abs(scrollLeft));
    onScroll?.(event);
  }

  function getRawRowIdx(rowIdx) {
    return hasGroups ? rawRows.indexOf(rows[rowIdx]) : rowIdx;
  }

  function updateRow(column, rowIdx, row) {
    if (typeof onRowsChange !== 'function') return;
    const rawRowIdx = getRawRowIdx(rowIdx);
    if (row === rawRows[rawRowIdx]) return;
    const updatedRows = [...rawRows];
    updatedRows[rawRowIdx] = row;
    onRowsChange(updatedRows, {
      indexes: [rawRowIdx],
      column
    });
  }

  function commitEditorChanges() {
    if (selectedPosition.mode !== 'EDIT') return;
    updateRow(columns[selectedPosition.idx], selectedPosition.rowIdx, selectedPosition.row);
  }

  function handleCopy() {
    if (enableRangeSelection) {
      setCopiedRange(selectedRange);
      onMultiCopy?.({
        cellsRange: selectedRange
      });
    } else {
      const {
        idx,
        rowIdx
      } = selectedPosition;
      const sourceRow = rawRows[getRawRowIdx(rowIdx)];
      const sourceColumnKey = columns[idx].key;
      setCopiedCell({
        row: sourceRow,
        columnKey: sourceColumnKey
      });
      onCopy?.({
        sourceRow,
        sourceColumnKey
      });
    }
  }

  function handlePaste() {
    if (enableRangeSelection) {
      if (!onMultiPaste || !onRowsChange || copiedRange === null) {
        return;
      }

      onMultiPaste({
        copiedRange,
        targetRange: selectedRange
      });
    } else {
      if (!onPaste || !onRowsChange || copiedCell === null || !isCellEditable(selectedPosition)) {
        return;
      }

      const {
        idx,
        rowIdx
      } = selectedPosition;
      const targetColumn = columns[idx];
      const targetRow = rawRows[getRawRowIdx(rowIdx)];
      const updatedTargetRow = onPaste({
        sourceRow: copiedCell.row,
        sourceColumnKey: copiedCell.columnKey,
        targetRow,
        targetColumnKey: targetColumn.key
      });
      updateRow(targetColumn, rowIdx, updatedTargetRow);
    }
  }

  function handleCellInput(event) {
    if (!selectedCellIsWithinViewportBounds) return;
    const row = rows[selectedPosition.rowIdx];
    if (isGroupRow(row)) return;
    const {
      key,
      shiftKey
    } = event;

    if (isSelectable && shiftKey && key === ' ') {
      assertIsValidKeyGetter(rowKeyGetter);
      const rowKey = rowKeyGetter(row);
      selectRow({
        row,
        checked: !selectedRows.has(rowKey),
        isShiftClick: false
      });
      event.preventDefault();
      return;
    }

    const column = columns[selectedPosition.idx];
    column.editorOptions?.onCellKeyDown?.(event);
    if (event.isDefaultPrevented()) return;

    if (isCellEditable(selectedPosition) && isDefaultCellInput(event)) {
      setSelectedPosition(({
        idx,
        rowIdx
      }) => ({
        idx,
        rowIdx,
        mode: 'EDIT',
        row,
        originalRow: row
      }));
    }
  }

  function isColIdxWithinSelectionBounds(idx) {
    return idx >= minColIdx && idx <= maxColIdx;
  }

  function isRowIdxWithinViewportBounds(rowIdx) {
    return rowIdx >= 0 && rowIdx < rows.length;
  }

  function isCellWithinSelectionBounds({
    idx,
    rowIdx
  }) {
    return rowIdx >= minRowIdx && rowIdx <= maxRowIdx && isColIdxWithinSelectionBounds(idx);
  }

  function isCellWithinViewportBounds({
    idx,
    rowIdx
  }) {
    return isRowIdxWithinViewportBounds(rowIdx) && isColIdxWithinSelectionBounds(idx);
  }

  function isCellEditable(position) {
    return isCellWithinViewportBounds(position) && isSelectedCellEditable({
      columns,
      rows,
      selectedPosition: position,
      isGroupRow
    });
  }

  function selectCell(position, enableEditor) {
    if (!isCellWithinSelectionBounds(position)) return;
    commitEditorChanges();

    if (enableEditor && isCellEditable(position)) {
      const row = rows[position.rowIdx];
      setSelectedPosition({ ...position,
        mode: 'EDIT',
        row,
        originalRow: row
      });
    } else if (isSamePosition(selectedPosition, position)) {
      scrollIntoView(gridRef.current?.querySelector('.rdg-cell[aria-selected="true"][tabindex="0"]'));
    } else {
      setSelectedPosition({ ...position,
        mode: 'SELECT'
      });
      setSelectedRange({
        startColumnIdx: position.idx,
        startRowIdx: position.rowIdx,
        endColumnIdx: position.idx,
        endRowIdx: position.rowIdx
      });
    }
  }

  function scrollToColumn(idx) {
    const {
      current
    } = gridRef;
    if (!current) return;

    if (idx > lastFrozenColumnIndex) {
      const {
        rowIdx
      } = selectedPosition;
      if (!isCellWithinSelectionBounds({
        rowIdx,
        idx
      })) return;
      const {
        clientWidth
      } = current;
      const column = columns[idx];
      const {
        left,
        width
      } = columnMetrics.get(column);
      let right = left + width;
      const colSpan = getSelectedCellColSpan({
        rows,
        topSummaryRows,
        bottomSummaryRows,
        rowIdx,
        lastFrozenColumnIndex,
        column,
        isGroupRow
      });

      if (colSpan !== undefined) {
        const {
          left,
          width
        } = columnMetrics.get(columns[column.idx + colSpan - 1]);
        right = left + width;
      }

      const isCellAtLeftBoundary = left < scrollLeft + totalFrozenColumnWidth;
      const isCellAtRightBoundary = right > clientWidth + scrollLeft;
      const sign = isRtl ? -1 : 1;

      if (isCellAtLeftBoundary) {
        current.scrollLeft = (left - totalFrozenColumnWidth) * sign;
      } else if (isCellAtRightBoundary) {
        current.scrollLeft = (right - clientWidth) * sign;
      }
    }
  }

  function getNextPosition(key, ctrlKey, shiftKey) {
    const {
      idx,
      rowIdx
    } = selectedPosition;
    const row = rows[rowIdx];
    const isRowSelected = selectedCellIsWithinSelectionBounds && idx === -1;

    if (key === leftKey && isRowSelected && isGroupRow(row) && !row.isExpanded && row.level !== 0) {
      let parentRowIdx = -1;

      for (let i = selectedPosition.rowIdx - 1; i >= 0; i--) {
        const parentRow = rows[i];

        if (isGroupRow(parentRow) && parentRow.id === row.parentId) {
          parentRowIdx = i;
          break;
        }
      }

      if (parentRowIdx !== -1) {
        return {
          idx,
          rowIdx: parentRowIdx
        };
      }
    }

    switch (key) {
      case 'ArrowUp':
        return {
          idx,
          rowIdx: rowIdx - 1
        };

      case 'ArrowDown':
        return {
          idx,
          rowIdx: rowIdx + 1
        };

      case leftKey:
        return {
          idx: idx - 1,
          rowIdx
        };

      case rightKey:
        return {
          idx: idx + 1,
          rowIdx
        };

      case 'Tab':
        return {
          idx: idx + (shiftKey ? -1 : 1),
          rowIdx
        };

      case 'Home':
        if (isRowSelected) return {
          idx,
          rowIdx: 0
        };
        return {
          idx: 0,
          rowIdx: ctrlKey ? minRowIdx : rowIdx
        };

      case 'End':
        if (isRowSelected) return {
          idx,
          rowIdx: rows.length - 1
        };
        return {
          idx: maxColIdx,
          rowIdx: ctrlKey ? maxRowIdx : rowIdx
        };

      case 'PageUp':
        {
          if (selectedPosition.rowIdx === minRowIdx) return selectedPosition;
          const nextRowY = getRowTop(rowIdx) + getRowHeight(rowIdx) - clientHeight;
          return {
            idx,
            rowIdx: nextRowY > 0 ? findRowIdx(nextRowY) : 0
          };
        }

      case 'PageDown':
        {
          if (selectedPosition.rowIdx >= rows.length) return selectedPosition;
          const nextRowY = getRowTop(rowIdx) + clientHeight;
          return {
            idx,
            rowIdx: nextRowY < totalRowHeight ? findRowIdx(nextRowY) : rows.length - 1
          };
        }

      default:
        return selectedPosition;
    }
  }

  function navigate(event) {
    const {
      key,
      shiftKey
    } = event;
    let mode = cellNavigationMode;

    if (key === 'Tab') {
      if (canExitGrid({
        shiftKey,
        cellNavigationMode,
        maxColIdx,
        minRowIdx,
        maxRowIdx,
        selectedPosition
      })) {
        commitEditorChanges();
        return;
      }

      mode = cellNavigationMode === 'NONE' ? 'CHANGE_ROW' : cellNavigationMode;
    }

    event.preventDefault();
    const ctrlKey = isCtrlKeyHeldDown(event);
    const nextPosition = getNextPosition(key, ctrlKey, shiftKey);
    if (isSamePosition(selectedPosition, nextPosition)) return;
    const nextSelectedCellPosition = getNextSelectedCellPosition({
      columns,
      colSpanColumns,
      rows,
      topSummaryRows,
      bottomSummaryRows,
      minRowIdx,
      maxRowIdx,
      lastFrozenColumnIndex,
      cellNavigationMode: mode,
      currentPosition: selectedPosition,
      nextPosition,
      isCellWithinBounds: isCellWithinSelectionBounds,
      isGroupRow
    });
    selectCell(nextSelectedCellPosition);
  }

  function getDraggedOverCellIdx(currentRowIdx) {
    if (draggedOverRowIdx === undefined) return;
    const {
      rowIdx
    } = selectedPosition;
    const isDraggedOver = rowIdx < draggedOverRowIdx ? rowIdx < currentRowIdx && currentRowIdx <= draggedOverRowIdx : rowIdx > currentRowIdx && currentRowIdx >= draggedOverRowIdx;
    return isDraggedOver ? selectedPosition.idx : undefined;
  }

  function getLayoutCssVars() {
    if (autoResizeColumn === null) return layoutCssVars;
    const {
      gridTemplateColumns
    } = layoutCssVars;
    const newSizes = gridTemplateColumns.split(' ');
    newSizes[autoResizeColumn.idx] = 'max-content';
    return { ...layoutCssVars,
      gridTemplateColumns: newSizes.join(' ')
    };
  }

  function getDragHandle(rowIdx) {
    if (selectedPosition.rowIdx !== rowIdx || selectedPosition.mode === 'EDIT' || hasGroups || onFill == null) {
      return;
    }

    return /*#__PURE__*/jsxRuntime.jsx(DragHandle, {
      rows: rawRows,
      columns: columns,
      selectedPosition: selectedPosition,
      isCellEditable: isCellEditable,
      latestDraggedOverRowIdx: latestDraggedOverRowIdx,
      onRowsChange: onRowsChange,
      onFill: onFill,
      setDragging: setDragging,
      setDraggedOverRowIdx: setDraggedOverRowIdx
    });
  }

  function getCellEditor(rowIdx) {
    if (selectedPosition.rowIdx !== rowIdx || selectedPosition.mode === 'SELECT') return;
    const {
      idx,
      row
    } = selectedPosition;
    const column = columns[idx];
    const colSpan = getColSpan(column, lastFrozenColumnIndex, {
      type: 'ROW',
      row
    });

    const closeEditor = () => {
      setSelectedPosition(({
        idx,
        rowIdx
      }) => ({
        idx,
        rowIdx,
        mode: 'SELECT'
      }));
    };

    const onRowChange = (row, commitChanges) => {
      if (commitChanges) {
        updateRow(column, selectedPosition.rowIdx, row);
        closeEditor();
      } else {
        setSelectedPosition(position => ({ ...position,
          row
        }));
      }
    };

    if (rows[selectedPosition.rowIdx] !== selectedPosition.originalRow) {
      closeEditor();
    }

    return /*#__PURE__*/jsxRuntime.jsx(EditCell, {
      column: column,
      colSpan: colSpan,
      row: row,
      onRowChange: onRowChange,
      closeEditor: closeEditor
    }, column.key);
  }

  function getRowViewportColumns(rowIdx) {
    const selectedColumn = columns[selectedPosition.idx];

    if (selectedColumn !== undefined && selectedPosition.rowIdx === rowIdx && !viewportColumns.includes(selectedColumn)) {
      return selectedPosition.idx > colOverscanEndIdx ? [...viewportColumns, selectedColumn] : [...viewportColumns.slice(0, lastFrozenColumnIndex + 1), selectedColumn, ...viewportColumns.slice(lastFrozenColumnIndex + 1)];
    }

    return viewportColumns;
  }

  function getViewportRows() {
    const rowElements = [];
    let startRowIndex = 0;
    const {
      idx: selectedIdx,
      rowIdx: selectedRowIdx
    } = selectedPosition;
    const startRowIdx = selectedCellIsWithinViewportBounds && selectedRowIdx < rowOverscanStartIdx ? rowOverscanStartIdx - 1 : rowOverscanStartIdx;
    const endRowIdx = selectedCellIsWithinViewportBounds && selectedRowIdx > rowOverscanEndIdx ? rowOverscanEndIdx + 1 : rowOverscanEndIdx;

    for (let viewportRowIdx = startRowIdx; viewportRowIdx <= endRowIdx; viewportRowIdx++) {
      const isRowOutsideViewport = viewportRowIdx === rowOverscanStartIdx - 1 || viewportRowIdx === rowOverscanEndIdx + 1;
      const rowIdx = isRowOutsideViewport ? selectedRowIdx : viewportRowIdx;
      let rowColumns = viewportColumns;
      const selectedColumn = columns[selectedIdx];

      if (selectedColumn !== undefined) {
        if (isRowOutsideViewport) {
          rowColumns = [selectedColumn];
        } else {
          rowColumns = getRowViewportColumns(rowIdx);
        }
      }

      const row = rows[rowIdx];
      const gridRowStart = headerRowsCount + topSummaryRowsCount + rowIdx + 1;

      if (isGroupRow(row)) {
        ({
          startRowIndex
        } = row);
        const isGroupRowSelected = isSelectable && row.childRows.every(cr => selectedRows.has(rowKeyGetter(cr)));
        rowElements.push( /*#__PURE__*/jsxRuntime.jsx(GroupRowRenderer, {
          "aria-level": row.level + 1,
          "aria-setsize": row.setSize,
          "aria-posinset": row.posInSet + 1,
          "aria-rowindex": headerRowsCount + topSummaryRowsCount + startRowIndex + 1,
          "aria-selected": isSelectable ? isGroupRowSelected : undefined,
          id: row.id,
          groupKey: row.groupKey,
          viewportColumns: rowColumns,
          childRows: row.childRows,
          rowIdx: rowIdx,
          row: row,
          gridRowStart: gridRowStart,
          height: getRowHeight(rowIdx),
          level: row.level,
          isExpanded: row.isExpanded,
          selectedCellIdx: selectedRowIdx === rowIdx ? selectedIdx : undefined,
          isRowSelected: isGroupRowSelected,
          selectGroup: selectGroupLatest,
          toggleGroup: toggleGroupLatest
        }, row.id));
        continue;
      }

      startRowIndex++;
      let key;
      let isRowSelected = false;

      if (typeof rowKeyGetter === 'function') {
        key = rowKeyGetter(row);
        isRowSelected = selectedRows?.has(key) ?? false;
      } else {
        key = hasGroups ? startRowIndex : rowIdx;
      }

      rowElements.push(rowRenderer(key, {
        'aria-rowindex': headerRowsCount + topSummaryRowsCount + (hasGroups ? startRowIndex : rowIdx) + 1,
        'aria-selected': isSelectable ? isRowSelected : undefined,
        rowIdx,
        row,
        viewportColumns: rowColumns,
        isRowSelected,
        onRowClick,
        onRowDoubleClick,
        rowClass,
        gridRowStart,
        height: getRowHeight(rowIdx),
        copiedCellIdx: copiedCell !== null && copiedCell.row === row ? columns.findIndex(c => c.key === copiedCell.columnKey) : undefined,
        selectedCellIdx: selectedRowIdx === rowIdx ? selectedIdx : undefined,
        selectedCellsRange: enableRangeSelection && isValueInBetween(rowIdx, selectedRange.startRowIdx, selectedRange.endRowIdx) ? {
          startIdx: selectedRange.startColumnIdx,
          endIdx: selectedRange.endColumnIdx
        } : {
          startIdx: -1,
          endIdx: -1
        },
        draggedOverCellIdx: getDraggedOverCellIdx(rowIdx),
        setDraggedOverRowIdx: isDragging ? setDraggedOverRowIdx : undefined,
        lastFrozenColumnIndex,
        onRowChange: handleFormatterRowChangeLatest,
        selectCell: selectViewportCellLatest,
        rangeSelectionMode: enableRangeSelection ?? false,
        selectedCellDragHandle: getDragHandle(rowIdx),
        selectedCellEditor: getCellEditor(rowIdx),
        onCellMouseDown: () => setIsMouseRangeSelectionMode(true),
        onCellMouseUp: () => setIsMouseRangeSelectionMode(false),

        onCellMouseEnter(columnIdx) {
          if (isMouseRangeSelectionMode && enableRangeSelection) {
            setSelectedRangeWithBoundary({ ...selectedRange,
              endRowIdx: rowIdx,
              endColumnIdx: columnIdx
            });
          }
        }

      }));
    }

    return rowElements;
  }

  if (selectedPosition.idx > maxColIdx || selectedPosition.rowIdx > maxRowIdx) {
    setSelectedPosition(initialPosition);
    setDraggedOverRowIdx(undefined);
  }

  if (selectedPosition.idx > maxColIdx || selectedPosition.rowIdx > maxRowIdx) {
    setSelectedPosition(initialPosition);
    setDraggedOverRowIdx(undefined);
    setSelectedRange(initialSelectedRange);
  }

  const isGroupRowFocused = selectedPosition.idx === -1 && selectedPosition.rowIdx !== -2;
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    role: hasGroups ? 'treegrid' : 'grid',
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
    "aria-multiselectable": isSelectable ? true : undefined,
    "aria-colcount": columns.length,
    "aria-rowcount": headerRowsCount + rowsCount + summaryRowsCount,
    className: clsx(rootClassname, className, isDragging && viewportDraggingClassname, autoResizeColumn !== null && cellAutoResizeClassname),
    style: { ...style,
      scrollPaddingInlineStart: selectedPosition.idx > lastFrozenColumnIndex ? `${totalFrozenColumnWidth}px` : undefined,
      scrollPaddingBlock: selectedPosition.rowIdx >= 0 && selectedPosition.rowIdx < rows.length ? `${headerRowHeight + topSummaryRowsCount * summaryRowHeight}px ${bottomSummaryRowsCount * summaryRowHeight}px` : undefined,
      '--rdg-header-row-height': `${headerRowHeight}px`,
      '--rdg-summary-row-height': `${summaryRowHeight}px`,
      '--rdg-sign': isRtl ? -1 : 1,
      ...getLayoutCssVars()
    },
    dir: direction,
    ref: gridRef,
    onScroll: handleScroll,
    onKeyDown: handleKeyDown,
    "data-testid": testId,
    children: [hasGroups && /*#__PURE__*/jsxRuntime.jsx("div", {
      ref: rowRef,
      tabIndex: isGroupRowFocused ? 0 : -1,
      className: clsx(focusSinkClassname, isGroupRowFocused && [rowSelected, lastFrozenColumnIndex !== -1 && rowSelectedWithFrozenCell]),
      style: {
        gridRowStart: selectedPosition.rowIdx + 2
      },
      onKeyDown: handleKeyDown
    }), /*#__PURE__*/jsxRuntime.jsxs(DataGridDefaultComponentsProvider, {
      value: defaultGridComponents,
      children: [/*#__PURE__*/jsxRuntime.jsx(HeaderRow$1, {
        columns: getRowViewportColumns(-1),
        onColumnResize: handleColumnResize,
        allRowsSelected: allRowsSelected,
        onAllRowsSelectionChange: selectAllRowsLatest,
        sortColumns: sortColumns,
        onSortColumnsChange: onSortColumnsChange,
        lastFrozenColumnIndex: lastFrozenColumnIndex,
        selectedCellIdx: selectedPosition.rowIdx === minRowIdx ? selectedPosition.idx : undefined,
        selectCell: selectHeaderCellLatest,
        shouldFocusGrid: !selectedCellIsWithinSelectionBounds,
        direction: direction
      }), /*#__PURE__*/jsxRuntime.jsx("div", {
        style: {
          gridColumn: '1/-1',
          height: topFillerHeight
        }
      }), rows.length === 0 && noRowsFallback ? noRowsFallback : /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [topSummaryRows?.map((row, rowIdx) => {
          const gridRowStart = headerRowsCount + rowIdx + 1;
          const summaryRowIdx = rowIdx + minRowIdx + 1;
          const isSummaryRowSelected = selectedPosition.rowIdx === summaryRowIdx;
          const top = headerRowHeight + summaryRowHeight * rowIdx;
          return /*#__PURE__*/jsxRuntime.jsx(SummaryRow$1, {
            "aria-rowindex": gridRowStart,
            rowIdx: rowIdx,
            gridRowStart: gridRowStart,
            row: row,
            top: top,
            bottom: undefined,
            lastTopRowIdx: topSummaryRowsCount - 1,
            viewportColumns: getRowViewportColumns(summaryRowIdx),
            lastFrozenColumnIndex: lastFrozenColumnIndex,
            selectedCellIdx: isSummaryRowSelected ? selectedPosition.idx : undefined,
            selectCell: selectTopSummaryCellLatest
          }, rowIdx);
        }), /*#__PURE__*/jsxRuntime.jsx(RowSelectionChangeProvider, {
          value: selectRowLatest,
          children: getViewportRows()
        }), bottomSummaryRows?.map((row, rowIdx) => {
          const gridRowStart = headerRowsCount + topSummaryRowsCount + rows.length + rowIdx + 1;
          const summaryRowIdx = rows.length + rowIdx;
          const isSummaryRowSelected = selectedPosition.rowIdx === summaryRowIdx;
          const top = clientHeight > totalRowHeight ? gridHeight - summaryRowHeight * (bottomSummaryRows.length - rowIdx) : undefined;
          const bottom = top === undefined ? summaryRowHeight * (bottomSummaryRows.length - 1 - rowIdx) : undefined;
          return /*#__PURE__*/jsxRuntime.jsx(SummaryRow$1, {
            "aria-rowindex": headerRowsCount + topSummaryRowsCount + rowsCount + rowIdx + 1,
            rowIdx: rowIdx,
            gridRowStart: gridRowStart,
            row: row,
            top: top,
            bottom: bottom,
            lastTopRowIdx: undefined,
            viewportColumns: getRowViewportColumns(summaryRowIdx),
            lastFrozenColumnIndex: lastFrozenColumnIndex,
            selectedCellIdx: isSummaryRowSelected ? selectedPosition.idx : undefined,
            selectCell: selectBottomSummaryCellLatest
          }, rowIdx);
        })]
      }), /*#__PURE__*/jsxRuntime.jsx("div", {
        style: {
          gridColumn: '1/-1',
          height: bottomFillerHeight
        }
      })]
    })]
  });
}

function isSamePosition(p1, p2) {
  return p1.idx === p2.idx && p1.rowIdx === p2.rowIdx;
}

const DataGrid$1 = /*#__PURE__*/react.forwardRef(DataGrid);

var css_248z = ".t7vyx3i700-beta16{appearance:none;background-color:var(--rdg-background-color);block-size:100%;border:2px solid #ccc;box-sizing:border-box;color:var(--rdg-color);font-family:inherit;font-size:var(--rdg-font-size);inline-size:100%;padding-block:0;padding-inline:6px;vertical-align:top}.t7vyx3i700-beta16:focus{border-color:var(--rdg-selection-color);outline:none}.t7vyx3i700-beta16::placeholder{color:#999;opacity:1}";
styleInject(css_248z,{"insertAt":"top"});

const textEditorInternalClassname = "t7vyx3i700-beta16";
const textEditorClassname = `rdg-text-editor ${textEditorInternalClassname}`;

function autoFocusAndSelect(input) {
  input?.focus();
  input?.select();
}

function textEditor({
  row,
  column,
  onRowChange,
  onClose
}) {
  return /*#__PURE__*/jsxRuntime.jsx("input", {
    className: textEditorClassname,
    ref: autoFocusAndSelect,
    value: row[column.key],
    onChange: event => onRowChange({ ...row,
      [column.key]: event.target.value
    }),
    onBlur: () => onClose(true)
  });
}

exports.DataGridDefaultComponentsProvider = DataGridDefaultComponentsProvider;
exports.Row = RowComponent$1;
exports.SELECT_COLUMN_KEY = SELECT_COLUMN_KEY;
exports.SelectCellFormatter = SelectCellFormatter;
exports.SelectColumn = SelectColumn;
exports.ToggleGroup = ToggleGroup;
exports.checkboxFormatter = checkboxFormatter;
exports.default = DataGrid$1;
exports.headerRenderer = headerRenderer;
exports.textEditor = textEditor;
exports.toggleGroupFormatter = toggleGroupFormatter;
exports.useFocusRef = useFocusRef;
exports.useRowSelection = useRowSelection;
exports.valueFormatter = valueFormatter;
//# sourceMappingURL=bundle.cjs.map
