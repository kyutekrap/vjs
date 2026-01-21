import { TableBase } from "../../base/Table/index.js";
import { TableCell, TableColumn, TableProps } from "../../props/Table/index.js";
export declare class TableDefault extends TableBase {
    constructor(props: TableProps);
    fillData(data: Record<string, TableCell>[], columns: string[]): void;
    onSort(index: number): void;
    getSelectedRows(): number[];
    rearrangeHeader(columns: TableColumn[]): void;
    fillFooter(content: Node[]): void;
}
