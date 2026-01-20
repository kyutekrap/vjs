import { TableFactory } from "../../factory/Table/index.js";
class SortContext {
    column = -1;
    direction = "desc";
}
export class TableBase extends TableFactory {
    _tableWrapper;
    _tableHeader;
    _tableContainer;
    _table;
    _headerSection;
    _rowSection;
    _tableFooter;
    _sortContext;
    constructor(props) {
        super(props);
        this._tableWrapper = super.createTableWrapper();
        if (props.title) {
            this._tableHeader = super.createTableHeader(props.title, this._tableWrapper);
        }
        this._tableContainer = super.createTableContainer(this._tableWrapper);
        this._table = super.createTable(this._tableContainer);
        this._headerSection = super.createHeaderSection(this._table);
        super.createHeader(this._headerSection);
        this._rowSection = super.createRowSection(this._table);
        if (props.checkbox && this._checkbox) {
            this._checkbox.addEventListener("change", (e) => {
                super.selectAllCheckboxes(this._rowSection, e.target);
            });
        }
        if (props.resizable ?? true) {
            this.enableResizing(this._table);
        }
        if (props.sortable ?? true) {
            this._sortContext = new SortContext();
        }
        if (props.footer) {
            this._tableFooter = super.createTableFooter(this._tableWrapper);
        }
    }
    _fillData(data, columns) {
        let rows = [];
        data.forEach((rowData, index) => {
            const tr = super.createRow(index);
            columns.forEach(column => {
                const td = super.createCell(rowData[column]);
                tr.appendChild(td);
            });
            rows.push(tr);
        });
        this._rowSection.replaceChildren(...rows);
    }
    _onSort(index) {
        if (this._sortContext) {
            if (this._checkbox && index === 0)
                return;
            if (this._sortContext.column === index) {
                this._sortContext.direction = this._sortContext.direction === "asc" ? "desc" : "asc";
            }
            else {
                this._sortContext.column = index;
                this._sortContext.direction = "desc";
            }
            let newDir = this._sortContext.direction;
            this._headerSection.querySelectorAll("th").forEach((_th, _index) => {
                _th.classList.remove("active-asc");
                _th.classList.remove("active-desc");
                if (_index === index) {
                    if (newDir == "asc")
                        _th.classList.add("active-asc");
                    else
                        _th.classList.add("active-desc");
                }
            });
            const columnName = this._props.columns[index].value;
            this._props.data.sort((a, b) => {
                const aValue = a[columnName]?.value ?? "";
                const bValue = b[columnName]?.value ?? "";
                if (aValue < bValue)
                    return newDir === "asc" ? -1 : 1;
                if (aValue > bValue)
                    return newDir === "asc" ? 1 : -1;
                return 0;
            });
            this._fillData(this._props.data, this._props.columns.map(col => col.value));
        }
    }
    _getSelectedRows() {
        return super.getSelectedRows(this._rowSection);
    }
    _addData(data) {
        this._props.data.push(...data);
    }
    _rearrangeHeader(columns) {
        super.rearrangeHeaders(this._table, columns);
        this._fillData(this._props.data, columns.map(col => col.value));
    }
    _fillFooter(content) {
        if (!this._tableFooter) {
            this._tableFooter = super.createTableFooter(this._tableWrapper);
        }
        this._tableFooter.replaceChildren(...content);
    }
}
