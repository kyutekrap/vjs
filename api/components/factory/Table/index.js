import { InputDefault } from "../../default/Input/index.js";
import { HBoxDefault } from "../../default/HBox/index.js";
import { SpanDefault } from "../../default/Span/index.js";
import { LinkDefault } from "../../default/Link/index.js";
import { SelectDefault } from "../../default/Select/index.js";
import { SkeletonDefault } from "../../default/Skeleton/index.js";
export class TableFactory {
    _props;
    _checkbox;
    constructor(props) {
        this._props = props;
    }
    createTableWrapper() {
        const wrapper = document.createElement("div");
        wrapper.classList.add("table-wrapper");
        return wrapper;
    }
    createTableHeader(title, wrapper) {
        const hbox = new HBoxDefault({
            children: [
                new SpanDefault(title)._span
            ]
        });
        hbox._hBox.classList.add("table-header");
        wrapper.appendChild(hbox._hBox);
        return hbox._hBox;
    }
    createTableContainer(wrapper) {
        const container = document.createElement("div");
        container.classList.add("table-container");
        wrapper.appendChild(container);
        return container;
    }
    createTable(container) {
        const table = document.createElement("table");
        table.classList.add("table");
        container.appendChild(table);
        if (this._props.id)
            table.id = this._props.id;
        return table;
    }
    createHeaderSection(table) {
        const thead = document.createElement("thead");
        table.appendChild(thead);
        return thead;
    }
    createHeaderGroup(thead) {
        this._props.columnGroups.forEach((group, i) => {
            const tr = document.createElement("tr");
            if (this._props.checkbox) {
                const th = document.createElement("th");
                if (!this._props.title && i === 0) {
                    th.classList.add("th-round");
                }
                tr.appendChild(th);
            }
            group.forEach((column) => {
                const th = document.createElement("th");
                th.textContent = column.label;
                if (column.rowspan)
                    th.rowSpan = column.rowspan;
                if (column.colspan)
                    th.colSpan = column.colspan;
                if (!this._props.title && i === 0) {
                    th.classList.add("th-round");
                }
                th.classList.add("group");
                tr.appendChild(th);
            });
            thead.appendChild(tr);
        });
    }
    createHeader(thead) {
        const tr = document.createElement("tr");
        if (this._props.checkbox) {
            const th = document.createElement("th");
            this._checkbox = new InputDefault({
                variant: "checkbox"
            })._input;
            th.appendChild(this._checkbox);
            th.classList.add("checkbox-cell");
            th.classList.add("tight");
            tr.appendChild(th);
        }
        this._props.columns.forEach((column, idx) => {
            const th = document.createElement("th");
            th.textContent = column.label ?? column.value;
            if (!this._props.title && (this._props.columnGroups ?? []).length === 0) {
                th.classList.add("th-round");
            }
            if (this._props?.fixedLeftColumn && idx === 0) {
                th.classList.add("fixed-left");
            }
            else if (this._props?.fixedRightColumn && idx === this._props.columns.length - 1) {
                th.classList.add("fixed-right");
            }
            tr.appendChild(th);
        });
        thead.appendChild(tr);
        return thead;
    }
    createRowSection(table) {
        const tbody = document.createElement("tbody");
        table.appendChild(tbody);
        return tbody;
    }
    createRow(index) {
        const tr = document.createElement("tr");
        if (this._props.checkbox) {
            const td = document.createElement("td");
            const checkbox = new InputDefault({
                variant: "checkbox",
                name: index.toString()
            });
            td.appendChild(checkbox._input);
            td.classList.add("checkbox-cell");
            td.classList.add("tight");
            tr.appendChild(td);
        }
        return tr;
    }
    createCell(content, colIdx, rowIdx) {
        const td = document.createElement("td");
        const attachEvents = (el, events) => {
            if (!events)
                return;
            Object.keys(events).forEach((k) => {
                const fn = events[k];
                try {
                    el.addEventListener(k, fn);
                }
                catch (e) {
                    console.log(e);
                }
            });
        };
        if (content?.href) {
            const link = new LinkDefault({
                variant: "primary",
                href: content.href,
                text: content?.label ?? content?.value,
                size: "small"
            });
            td.appendChild(link._link);
            attachEvents(link._link, content.events);
        }
        else {
            if (content?.checked !== undefined) {
                const checkbox = new InputDefault({
                    variant: "checkbox",
                    checked: content.checked,
                    editable: content?.editable ?? true
                });
                td.classList.add("checkbox-cell");
                td.appendChild(checkbox._input);
                attachEvents(checkbox._input, content.events);
            }
            else if (content?.list && content?.editable) {
                const select = new SelectDefault({
                    options: content.list,
                    selected: content.value
                });
                td.appendChild(select._select);
                attachEvents(select._select, content.events);
            }
            else {
                td.textContent = content?.label ?? content?.value;
                attachEvents(td, content.events);
            }
        }
        td.style.textAlign = content?.textAlign ?? "left";
        if (this._props?.fixedLeftColumn && colIdx === 0) {
            td.classList.add("fixed-left");
        }
        if (this._props?.fixedRightColumn && colIdx === this._props.columns.length - 1) {
            td.classList.add("fixed-right");
        }
        if (this._props?.fixedBottomRow && rowIdx === this._props.data.length - 1) {
            td.classList.add("fixed-bottom");
        }
        return td;
    }
    createTableFooter(wrapper) {
        const hbox = document.createElement("div");
        hbox.classList.add("table-footer");
        wrapper.appendChild(hbox);
        return hbox;
    }
    rearrangeHeaders(table, columns) {
        this._props.columns = columns;
        const thead = table.querySelector("thead");
        const newThead = document.createElement("thead");
        thead?.replaceWith(this.createHeader(newThead));
    }
    selectAllCheckboxes(rowSection, target) {
        const rows = rowSection.querySelectorAll("tr");
        rows.forEach(row => {
            const firstCell = row.querySelector("input");
            if (firstCell)
                firstCell.checked = target.checked;
        });
    }
    getSelectedRows(rowSection) {
        const selectedRows = [];
        const rows = rowSection.querySelectorAll("tr");
        rows.forEach((row, idx) => {
            const firstCell = row.querySelector("input");
            if (firstCell && firstCell?.checked)
                selectedRows.push(idx);
        });
        return selectedRows;
    }
    enableResizing(table) {
        const thElements = table.querySelectorAll("th");
        thElements.forEach((th, index) => {
            if (this._props.checkbox && index === 0)
                return;
            const resizer = document.createElement("div");
            resizer.classList.add("resizer");
            th.appendChild(resizer);
            let startX, startWidth;
            resizer.addEventListener("mousedown", (e) => {
                startX = e.pageX;
                startWidth = th.offsetWidth;
                const onMouseMove = (e) => {
                    const newWidth = startWidth + (e.pageX - startX);
                    th.style.width = `${newWidth}px`;
                    table.querySelectorAll("tr").forEach(row => {
                        const cell = row.children[index];
                        if (cell && cell !== th) {
                            cell.style.width = `${newWidth}px`;
                        }
                    });
                };
                const onMouseUp = () => {
                    document.removeEventListener("mousemove", onMouseMove);
                    document.removeEventListener("mouseup", onMouseUp);
                };
                document.addEventListener("mousemove", onMouseMove);
                document.addEventListener("mouseup", onMouseUp);
            });
        });
    }
    isExhausted(tableContainer) {
        return tableContainer.scrollTop + tableContainer.clientHeight >= tableContainer.scrollHeight;
    }
    createSkeleton(tableContainer, lines) {
        const skeleton = new SkeletonDefault({ lines: lines });
        tableContainer.appendChild(skeleton._skeleton);
        return skeleton._skeleton;
    }
    showSkeleton(skeleton) {
        skeleton.classList.add("active");
    }
    hideSkeleton(skeleton) {
        skeleton.classList.remove("active");
    }
}
