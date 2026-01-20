import { TableCell, TableColumn, TableProps } from "../../props/Table/index.js";
export declare class TableFactory {
    _props: TableProps;
    _checkbox: HTMLInputElement | undefined;
    constructor(props: TableProps);
    createTableWrapper(): HTMLDivElement;
    createTableHeader(title: string, wrapper: HTMLDivElement): HTMLDivElement;
    createTableContainer(wrapper: HTMLDivElement): HTMLDivElement;
    createTable(container: HTMLDivElement): HTMLTableElement;
    createHeaderSection(table: HTMLTableElement): HTMLTableSectionElement;
    createHeader(thead: HTMLTableSectionElement): HTMLTableSectionElement;
    createRowSection(table: HTMLTableElement): HTMLTableSectionElement;
    createRow(index: number): HTMLTableRowElement;
    createCell(content: TableCell): HTMLTableCellElement;
    createTableFooter(wrapper: HTMLDivElement): HTMLDivElement;
    rearrangeHeaders(table: HTMLTableElement, columns: TableColumn[]): void;
    selectAllCheckboxes(rowSection: HTMLTableSectionElement, target: HTMLInputElement): void;
    getSelectedRows(rowSection: HTMLTableSectionElement): number[];
    enableResizing(table: HTMLTableElement): void;
    isExhausted(tableContainer: HTMLDivElement): boolean;
}
