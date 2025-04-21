import { Context } from 'react';
import { JSX } from 'react/jsx-runtime';
import type { Key } from 'react';
import type { ReactElement } from 'react';
import { ReactNode } from 'react';

declare interface BaseRenderRowProps<TRow, TSummaryRow = unknown> extends Omit_2<React.ComponentProps<'div'>, 'style' | 'children'>, Pick<DataGridProps<TRow, TSummaryRow>, 'onCellClick' | 'onCellDoubleClick' | 'onCellContextMenu'> {
    viewportColumns: readonly CalculatedColumn<TRow, TSummaryRow>[];
    rowIdx: number;
    selectedCellIdx: number | undefined;
    isRowSelectionDisabled: boolean;
    isRowSelected: boolean;
    gridRowStart: number;
    selectCell: (position: Position, enableEditor?: Maybe<boolean>) => void;
}

export declare interface CalculatedColumn<TRow, TSummaryRow = unknown> extends Column<TRow, TSummaryRow> {
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

export declare type CalculatedColumnOrColumnGroup<R, SR> = CalculatedColumnParent<R, SR> | CalculatedColumn<R, SR>;

export declare interface CalculatedColumnParent<R, SR> {
    readonly name: string | ReactElement;
    readonly parent: CalculatedColumnParent<R, SR> | undefined;
    readonly idx: number;
    readonly colSpan: number;
    readonly level: number;
    readonly headerCellClass?: Maybe<string>;
}

export declare const Cell: <R, SR>(props: CellRendererProps<R, SR>) => React.JSX.Element;

export declare interface CellClickArgs<TRow, TSummaryRow = unknown> {
    column: CalculatedColumn<TRow, TSummaryRow>;
    row: TRow;
    rowIdx: number;
    selectCell: (enableEditor?: boolean) => void;
}

declare type CellClipboardEvent = React.ClipboardEvent<HTMLDivElement>;

export declare type CellCopyEvent<TRow, TSummaryRow = unknown> = CellCopyPasteEvent<TRow, TSummaryRow>;

declare interface CellCopyPasteEvent<TRow, TSummaryRow = unknown> {
    column: CalculatedColumn<TRow, TSummaryRow>;
    row: TRow;
}

declare type CellEvent<E extends React.SyntheticEvent<HTMLDivElement>> = E & {
    preventGridDefault: () => void;
    isGridDefaultPrevented: () => boolean;
};

export declare type CellKeyboardEvent = CellEvent<React.KeyboardEvent<HTMLDivElement>>;

export declare type CellKeyDownArgs<TRow, TSummaryRow = unknown> = SelectCellKeyDownArgs<TRow, TSummaryRow> | EditCellKeyDownArgs<TRow, TSummaryRow>;

export declare type CellMouseEvent = CellEvent<React.MouseEvent<HTMLDivElement>>;

export declare type CellPasteEvent<TRow, TSummaryRow = unknown> = CellCopyPasteEvent<TRow, TSummaryRow>;

export declare interface CellRendererProps<TRow, TSummaryRow> extends Pick<RenderRowProps<TRow, TSummaryRow>, 'row' | 'rowIdx' | 'selectCell'>, Omit_2<React.ComponentProps<'div'>, 'children' | 'onClick' | 'onDoubleClick' | 'onContextMenu' | 'onMouseDownCapture' | 'onMouseUpCapture' | 'onMouseEnter'> {
    column: CalculatedColumn<TRow, TSummaryRow>;
    colSpan: number | undefined;
    isDraggedOver: boolean;
    isCellSelected: boolean;
    onClick: RenderRowProps<TRow, TSummaryRow>['onCellClick'];
    onDoubleClick: RenderRowProps<TRow, TSummaryRow>['onCellDoubleClick'];
    onContextMenu: RenderRowProps<TRow, TSummaryRow>['onCellContextMenu'];
    onRowChange: (column: CalculatedColumn<TRow, TSummaryRow>, newRow: TRow) => void;
    rangeSelectionMode: boolean;
    onMouseDownCapture: RenderRowProps<TRow, TSummaryRow>['onCellMouseDown'];
    onMouseUpCapture: RenderRowProps<TRow, TSummaryRow>['onCellMouseUp'];
    onMouseEnter: RenderRowProps<TRow, TSummaryRow>['onCellMouseEnter'];
}

export declare interface CellSelectArgs<TRow, TSummaryRow = unknown> {
    rowIdx: number;
    row: TRow | undefined;
    column: CalculatedColumn<TRow, TSummaryRow>;
}

declare interface CellsRange {
    startRowIdx: number;
    startColumnIdx: number;
    endRowIdx: number;
    endColumnIdx: number;
}

export declare type ColSpanArgs<TRow, TSummaryRow> = {
    type: 'HEADER';
} | {
    type: 'ROW';
    row: TRow;
} | {
    type: 'SUMMARY';
    row: TSummaryRow;
};

export declare interface Column<TRow, TSummaryRow = unknown> {
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
     * @default '50px'
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

export declare interface ColumnGroup<R, SR = unknown> {
    /** The name of the column group, it will be displayed in the header cell */
    readonly name: string | ReactElement;
    readonly headerCellClass?: Maybe<string>;
    readonly children: readonly ColumnOrColumnGroup<R, SR>[];
}

export declare type ColumnOrColumnGroup<R, SR = unknown> = Column<R, SR> | ColumnGroup<R, SR>;

export declare interface ColumnWidth {
    readonly type: 'resized' | 'measured';
    readonly width: number;
}

export declare type ColumnWidths = ReadonlyMap<string, ColumnWidth>;

/**
 * Main API Component to render a data grid of rows and columns
 *
 * @example
 *
 * <DataGrid columns={columns} rows={rows} />
 */
export declare function DataGrid<R, SR = unknown, K extends Key = Key>(props: DataGridProps<R, SR, K>): JSX.Element;

export declare const DataGridDefaultRenderersContext: Context<Maybe<Renderers<any, any>>>;

export declare interface DataGridHandle {
    element: HTMLDivElement | null;
    scrollToCell: (position: PartialPosition) => void;
    selectCell: (position: Position, enableEditor?: Maybe<boolean>) => void;
}

export declare interface DataGridProps<R, SR = unknown, K extends Key = Key> extends SharedDivProps {
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
    onCellClick?: Maybe<(args: CellClickArgs<NoInfer<R>, NoInfer<SR>>, event: CellMouseEvent) => void>;
    /** Callback triggered when a cell is double-clicked */
    onCellDoubleClick?: Maybe<(args: CellClickArgs<NoInfer<R>, NoInfer<SR>>, event: CellMouseEvent) => void>;
    /** Callback triggered when a cell is right-clicked */
    onCellContextMenu?: Maybe<(args: CellClickArgs<NoInfer<R>, NoInfer<SR>>, event: CellMouseEvent) => void>;
    /** Callback triggered when a key is pressed in a cell */
    onCellKeyDown?: Maybe<(args: CellKeyDownArgs<NoInfer<R>, NoInfer<SR>>, event: CellKeyboardEvent) => void>;
    /** Callback triggered when a cell's content is copied */
    onCellCopy?: Maybe<(args: CellCopyEvent<NoInfer<R>, NoInfer<SR>>, event: CellClipboardEvent) => void>;
    /** Callback triggered when content is pasted into a cell */
    onCellPaste?: Maybe<(args: CellPasteEvent<NoInfer<R>, NoInfer<SR>>, event: CellClipboardEvent) => NoInfer<R>>;
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

export declare type DefaultColumnOptions<R, SR> = Pick<Column<R, SR>, 'renderCell' | 'renderHeaderCell' | 'width' | 'minWidth' | 'maxWidth' | 'resizable' | 'sortable' | 'draggable'>;

declare type Direction = 'ltr' | 'rtl';

declare interface EditCellKeyDownArgs<TRow, TSummaryRow = unknown> {
    mode: 'EDIT';
    column: CalculatedColumn<TRow, TSummaryRow>;
    row: TRow;
    rowIdx: number;
    navigate: () => void;
    onClose: (commitChanges?: boolean, shouldFocusCell?: boolean) => void;
}

export declare interface FillEvent<TRow> {
    columnKey: string;
    sourceRow: TRow;
    targetRow: TRow;
}

declare interface GroupRow<TRow> {
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

declare type Maybe<T> = T | undefined | null;

declare interface MultiCopyEvent<TRow> {
    cellsRange: CellsRange;
    sourceColumnKeys: string[];
    sourceRows: TRow[];
}

declare interface MultiPasteEvent {
    copiedRange: CellsRange;
    targetRange: CellsRange;
}

declare type Omit_2<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

declare interface PartialPosition {
    readonly idx?: number | undefined;
    readonly rowIdx?: number | undefined;
}

declare interface Position {
    readonly idx: number;
    readonly rowIdx: number;
}

export declare interface RenderCellProps<TRow, TSummaryRow = unknown> {
    column: CalculatedColumn<TRow, TSummaryRow>;
    row: TRow;
    rowIdx: number;
    isCellEditable: boolean;
    tabIndex: number;
    onRowChange: (row: TRow) => void;
}

export declare function renderCheckbox({ onChange, indeterminate, ...props }: RenderCheckboxProps): JSX.Element;

export declare interface RenderCheckboxProps extends Pick<React.ComponentProps<'input'>, 'aria-label' | 'aria-labelledby' | 'checked' | 'tabIndex' | 'disabled'> {
    indeterminate?: boolean | undefined;
    onChange: (checked: boolean, shift: boolean) => void;
}

export declare interface RenderEditCellProps<TRow, TSummaryRow = unknown> {
    column: CalculatedColumn<TRow, TSummaryRow>;
    row: TRow;
    rowIdx: number;
    onRowChange: (row: TRow, commitChanges?: boolean) => void;
    onClose: (commitChanges?: boolean, shouldFocusCell?: boolean) => void;
}

export declare interface Renderers<TRow, TSummaryRow> {
    renderCell?: Maybe<(key: Key, props: CellRendererProps<TRow, TSummaryRow>) => ReactNode>;
    renderCheckbox?: Maybe<(props: RenderCheckboxProps) => ReactNode>;
    renderRow?: Maybe<(key: Key, props: RenderRowProps<TRow, TSummaryRow>) => ReactNode>;
    renderSortStatus?: Maybe<(props: RenderSortStatusProps) => ReactNode>;
    noRowsFallback?: Maybe<ReactNode>;
}

export declare interface RenderGroupCellProps<TRow, TSummaryRow = unknown> {
    groupKey: unknown;
    column: CalculatedColumn<TRow, TSummaryRow>;
    row: GroupRow<TRow>;
    childRows: readonly TRow[];
    isExpanded: boolean;
    tabIndex: number;
    toggleGroup: () => void;
}

export declare function renderHeaderCell<R, SR>({ column, sortDirection, priority }: RenderHeaderCellProps<R, SR>): string | JSX.Element;

export declare interface RenderHeaderCellProps<TRow, TSummaryRow = unknown> {
    column: CalculatedColumn<TRow, TSummaryRow>;
    sortDirection: SortDirection | undefined;
    priority: number | undefined;
    tabIndex: number;
}

export declare interface RenderRowProps<TRow, TSummaryRow = unknown> extends BaseRenderRowProps<TRow, TSummaryRow> {
    row: TRow;
    lastFrozenColumnIndex: number;
    draggedOverCellIdx: number | undefined;
    selectedCellEditor: ReactElement<RenderEditCellProps<TRow>> | undefined;
    onRowChange: (column: CalculatedColumn<TRow, TSummaryRow>, rowIdx: number, newRow: TRow) => void;
    rowClass: Maybe<(row: TRow, rowIdx: number) => Maybe<string>>;
    setDraggedOverRowIdx: ((overRowIdx: number) => void) | undefined;
    selectedCellsRange: {
        startIdx: number;
        endIdx: number;
    };
    rangeSelectionMode: boolean;
    onCellMouseDown: Maybe<(args: CellClickArgs<NoInfer<TRow>, NoInfer<TSummaryRow>>, event: CellMouseEvent) => void>;
    onCellMouseUp: Maybe<(args: CellClickArgs<NoInfer<TRow>, NoInfer<TSummaryRow>>, event: CellMouseEvent) => void>;
    onCellMouseEnter: Maybe<(args: CellClickArgs<NoInfer<TRow>, NoInfer<TSummaryRow>>, event: CellMouseEvent) => void>;
}

export declare function renderSortIcon({ sortDirection }: RenderSortIconProps): JSX.Element | null;

export declare interface RenderSortIconProps {
    sortDirection: SortDirection | undefined;
}

export declare function renderSortPriority({ priority }: RenderSortPriorityProps): number | undefined;

export declare interface RenderSortPriorityProps {
    priority: number | undefined;
}

export declare interface RenderSortStatusProps extends RenderSortIconProps, RenderSortPriorityProps {
}

export declare interface RenderSummaryCellProps<TSummaryRow, TRow = unknown> {
    column: CalculatedColumn<TRow, TSummaryRow>;
    row: TSummaryRow;
    tabIndex: number;
}

export declare function renderToggleGroup<R, SR>(props: RenderGroupCellProps<R, SR>): JSX.Element;

export declare function renderValue<R, SR>(props: RenderCellProps<R, SR>): ReactNode;

export declare const Row: <R, SR>(props: RenderRowProps<R, SR>) => React.JSX.Element;

export declare type RowHeightArgs<TRow> = {
    type: 'ROW';
    row: TRow;
} | {
    type: 'GROUP';
    row: GroupRow<TRow>;
};

export declare interface RowsChangeData<R, SR = unknown> {
    indexes: number[];
    column: CalculatedColumn<R, SR>;
}

export declare const SELECT_COLUMN_KEY = "rdg-select-column";

export declare function SelectCellFormatter({ value, tabIndex, indeterminate, disabled, onChange, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy }: SelectCellFormatterProps): ReactNode;

declare interface SelectCellFormatterProps extends SharedInputProps {
    value: boolean;
}

declare interface SelectCellKeyDownArgs<TRow, TSummaryRow = unknown> {
    mode: 'SELECT';
    column: CalculatedColumn<TRow, TSummaryRow>;
    row: TRow;
    rowIdx: number;
    selectCell: (position: Position, enableEditor?: Maybe<boolean>) => void;
}

export declare const SelectColumn: Column<any, any>;

export declare interface SelectHeaderRowEvent {
    checked: boolean;
}

export declare interface SelectRowEvent<TRow> {
    row: TRow;
    checked: boolean;
    isShiftClick: boolean;
}

declare type SharedDivProps = Pick<React.ComponentProps<'div'>, 'role' | 'aria-label' | 'aria-labelledby' | 'aria-description' | 'aria-describedby' | 'aria-rowcount' | 'className' | 'style'>;

declare type SharedInputProps = Pick<RenderCheckboxProps, 'disabled' | 'tabIndex' | 'aria-label' | 'aria-labelledby' | 'indeterminate' | 'onChange'>;

export declare interface SortColumn {
    readonly columnKey: string;
    readonly direction: SortDirection;
}

export declare type SortDirection = 'ASC' | 'DESC';

export declare function textEditor<TRow, TSummaryRow>({ row, column, onRowChange, onClose }: RenderEditCellProps<TRow, TSummaryRow>): JSX.Element;

export declare function ToggleGroup<R, SR>({ groupKey, isExpanded, tabIndex, toggleGroup }: RenderGroupCellProps<R, SR>): JSX.Element;

export declare function TreeDataGrid<R, SR = unknown, K extends Key = Key>({ columns: rawColumns, rows: rawRows, rowHeight: rawRowHeight, rowKeyGetter: rawRowKeyGetter, onCellKeyDown: rawOnCellKeyDown, onCellCopy: rawOnCellCopy, onCellPaste: rawOnCellPaste, onRowsChange, selectedRows: rawSelectedRows, onSelectedRowsChange: rawOnSelectedRowsChange, renderers, groupBy: rawGroupBy, rowGrouper, expandedGroupIds, onExpandedGroupIdsChange, groupIdGetter: rawGroupIdGetter, ...props }: TreeDataGridProps<R, SR, K>): JSX.Element;

export declare interface TreeDataGridProps<R, SR = unknown, K extends Key = Key> extends Omit_2<DataGridProps<R, SR, K>, 'columns' | 'role' | 'aria-rowcount' | 'rowHeight' | 'onFill' | 'isRowSelectionDisabled'> {
    columns: readonly Column<NoInfer<R>, NoInfer<SR>>[];
    rowHeight?: Maybe<number | ((args: RowHeightArgs<NoInfer<R>>) => number)>;
    groupBy: readonly string[];
    rowGrouper: (rows: readonly NoInfer<R>[], columnKey: string) => Record<string, readonly NoInfer<R>[]>;
    expandedGroupIds: ReadonlySet<unknown>;
    onExpandedGroupIdsChange: (expandedGroupIds: Set<unknown>) => void;
    groupIdGetter?: Maybe<(groupKey: string, parentId?: string) => string>;
}

export declare function useHeaderRowSelection(): {
    isIndeterminate: boolean;
    isRowSelected: boolean;
    onRowSelectionChange: (selectRowEvent: SelectHeaderRowEvent) => void;
};

export declare function useRowSelection(): {
    isRowSelectionDisabled: boolean;
    isRowSelected: boolean;
    onRowSelectionChange: (selectRowEvent: SelectRowEvent<any>) => void;
};

export { }
