import { TableCell, TableColumn, TableProps } from "../../props/Table/index.js";
import { TableFactory } from "../../factory/Table/index.js";
declare class SortContext {
    column: number;
    direction: "asc" | "desc";
}
export declare abstract class TableBase extends TableFactory {
    _tableWrapper: HTMLDivElement;
    _tableHeader: HTMLDivElement | undefined;
    _tableContainer: HTMLDivElement;
    _table: HTMLTableElement;
    _headerSection: HTMLTableSectionElement;
    _rowSection: HTMLTableSectionElement;
    _tableFooter: HTMLDivElement | undefined;
    _sortContext: SortContext | undefined;
    constructor(props: TableProps);
    abstract fillData(data: Record<string, TableCell>[], columns: string[]): void;
    abstract onSort(columnIndex: number): void;
    abstract getSelectedRows(): number[];
    abstract addData(data: Record<string, TableCell>[]): void;
    abstract rearrangeHeader(columns: TableColumn[]): void;
    abstract fillFooter(content: Node[]): void;
    _fillData(data: Record<string, TableCell>[], columns: string[]): void;
    _onSort(index: number): void;
    _getSelectedRows(): number[];
    _addData(data: Record<string, TableCell>[]): void;
    _rearrangeHeader(columns: TableColumn[]): void;
    _fillFooter(content: Node[]): void;
}
export {};
