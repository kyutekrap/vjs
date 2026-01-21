import { TableBase } from "../../base/Table/index.js";
import { TableCell, TableColumn, TableProps } from "../../props/Table/index.js";

export class TableDefault extends TableBase {
    constructor(props: TableProps) {
        super(props);
        this.fillData(this._props.data, this._props.columns.map(col => col.value));
        if (props.sortable ?? true) {
            this._headerSection.querySelectorAll("th").forEach((th, index) => {
                if (this._props.checkbox && index === 0) return;
                th.addEventListener("click", (_e) => this._onSort(index));
                th.style.cursor = "pointer";
            });
        }
    }

    fillData(data: Record<string, TableCell>[], columns: string[]): void {
        super._fillData(data, columns);
    }

    onSort(index: number): void {
        super._onSort(index);
    }

    getSelectedRows(): number[] {
        return super._getSelectedRows();
    }

    rearrangeHeader(columns: TableColumn[]): void {
        return super._rearrangeHeader(columns);
    }

    fillFooter(content: Node[]): void {
        return super._fillFooter(content);
    }
}