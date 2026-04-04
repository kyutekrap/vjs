import { TableBase } from "../../base/Table/index.js";
export class TableDefault extends TableBase {
    constructor(props) {
        super(props);
        this.fillData(this._props.data, this._props.columns.map(col => col.value));
        if (props.sortable ?? true) {
            const lastTR = this._headerSection.querySelectorAll("tr").length - 1;
            this._headerSection.querySelectorAll("tr")[lastTR].querySelectorAll("th").forEach((th, index) => {
                if (this._props.checkbox && index === 0)
                    return;
                th.addEventListener("click", (_e) => this._onSort(index));
                th.style.cursor = "pointer";
            });
        }
        if (props.checkbox && this._checkbox) {
            this._checkbox.addEventListener("change", (e) => {
                this.checkAllCheckboxes(e);
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
    checkAllCheckboxes(e) {
        return super._checkAllCheckboxes(e);
    }
}
