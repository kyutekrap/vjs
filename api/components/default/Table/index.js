import { TableBase } from "../../base/Table/index.js";
export class TableDefault extends TableBase {
    constructor(props) {
        super(props);
        this.fillData(this._props.data, this._props.columns.map(col => col.value));
        if (props.sortable ?? true) {
            this._headerSection.querySelectorAll("th").forEach((th, index) => {
                if (this._props.checkbox && index === 0)
                    return;
                th.addEventListener("click", (_e) => this._onSort(index));
                th.style.cursor = "pointer";
            });
        }
    }
    fillData(data, columns) {
        super._fillData(data, columns);
    }
    onSort(index) {
        super._onSort(index);
    }
    getSelectedRows() {
        return super._getSelectedRows();
    }
    rearrangeHeader(columns) {
        return super._rearrangeHeader(columns);
    }
    fillFooter(content) {
        return super._fillFooter(content);
    }
}
