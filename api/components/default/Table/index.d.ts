import { TableBase } from "../../base/Table/index.js";
import { TableCell, TableColumn, TableProps } from "../../props/Table/index.js";
export declare class TableDefault extends TableBase {
    constructor(props: TableProps);
    fillData(data: Record<string, TableCell>[], columns: string[]): void;
    onSort(index: number): void;
    getSelectedRows(): number[];
    addData(data: Record<string, TableCell>[]): void;
    rearrangeHeader(columns: TableColumn[]): void;
    fillFooter(content: Node[]): void;
}
