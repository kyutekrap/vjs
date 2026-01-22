import { InputDefault } from "../../default/Input/index.js";
import { TableCell, TableColumn, TableProps } from "../../props/Table/index.js";
import { HBoxDefault } from "../../default/HBox/index.js";
import { SpanDefault } from "../../default/Span/index.js";
import { LinkDefault } from "../../default/Link/index.js";
import { SelectDefault } from "../../default/Select/index.js";
import { SkeletonDefault } from "../../default/Skeleton/index.js";

export class TableFactory {

    _props: TableProps;
    _checkbox: HTMLInputElement | undefined;

    constructor(props: TableProps) {
        this._props = props;
    }

    createTableWrapper(): HTMLDivElement {
        const wrapper = document.createElement("div");
        wrapper.classList.add("table-wrapper");
        return wrapper;
    }

    createTableHeader(title: string, wrapper: HTMLDivElement): HTMLDivElement {
        const hbox = new HBoxDefault({
            children: [
                new SpanDefault(title)._span
            ]
        });
        hbox._hBox.classList.add("table-header");
        wrapper.appendChild(hbox._hBox);
        return hbox._hBox;
    }

    createTableContainer(wrapper: HTMLDivElement): HTMLDivElement {
        const container = document.createElement("div");
        container.classList.add("table-container");
        wrapper.appendChild(container);
        return container;
    }

    createTable(container: HTMLDivElement): HTMLTableElement {
        const table = document.createElement("table");
        table.classList.add("table");
        container.appendChild(table);
        if (this._props.id) table.id = this._props.id;
        return table;
    }

    createHeaderSection(table: HTMLTableElement): HTMLTableSectionElement {
        const thead = document.createElement("thead");
        table.appendChild(thead);
        return thead;
    }

    createHeader(thead: HTMLTableSectionElement): HTMLTableSectionElement {
        const tr = document.createElement("tr");
        if (this._props.checkbox) {
            const th = document.createElement("th");
            this._checkbox = new InputDefault({
                variant: "checkbox"
            })._input;
            th.appendChild(this._checkbox);
            th.classList.add("checkbox-cell");
            tr.appendChild(th);
        }
        this._props.columns.forEach(column => {
            const th = document.createElement("th");
            th.textContent = column.label ?? column.value;
            if (!this._props.title) {
                th.classList.add("th-round");
            }
            tr.appendChild(th);
        });
        thead.appendChild(tr);
        return thead;
    }

    createRowSection(table: HTMLTableElement): HTMLTableSectionElement {
        const tbody = document.createElement("tbody");
        table.appendChild(tbody);
        return tbody;
    }

    createRow(index: number): HTMLTableRowElement {
        const tr = document.createElement("tr");
        if (this._props.checkbox) {
            const td = document.createElement("td");
            const checkbox = new InputDefault({
                variant: "checkbox",
                name: index.toString()
            });
            td.appendChild(checkbox._input);
            td.classList.add("checkbox-cell");
            tr.appendChild(td);
        }
        return tr;
    }

    createCell(content: TableCell): HTMLTableCellElement {
        const td = document.createElement("td");
        const attachEvents = (el: Element, events?: TableCell['events']) => {
            if (!events) return;
            Object.keys(events).forEach((k) => {
                const fn = (events as any)[k];
                try { el.addEventListener(k, fn); } catch(e) { console.log(e) }
            });
        };

        if (content?.href) {
            const link = new LinkDefault({
                variant: "primary",
                href: content.href,
                text: content?.value,
                size: "small"
            });
            td.appendChild(link._link);
            attachEvents(link._link, content.events);
        } else {
            if (content?.checked !== undefined) {
                const checkbox = new InputDefault({
                    variant: "checkbox",
                    checked: content.checked,
                    editable: content?.editable ?? true
                });
                td.appendChild(checkbox._input);
                attachEvents(checkbox._input, content.events);
                td.style.display = "flex";
                td.style.justifyContent = "center";
            } else if (content?.list && content?.editable) {
                const select = new SelectDefault({
                    options: content.list,
                    selected: content.value
                });
                td.appendChild(select._select);
                attachEvents(select._select, content.events);
            } else {
                td.textContent = content?.value;
                attachEvents(td, content.events);
            }
        }
        return td;
    }

    createTableFooter(wrapper: HTMLDivElement): HTMLDivElement {
        const hbox = document.createElement("div");
        hbox.classList.add("table-footer");
        wrapper.appendChild(hbox);
        return hbox;
    }

    rearrangeHeaders(table: HTMLTableElement, columns: TableColumn[]): void {
        this._props.columns = columns;
        const thead = table.querySelector("thead");
        const newThead = document.createElement("thead");
        thead?.replaceWith(this.createHeader(newThead));
    }

    selectAllCheckboxes(rowSection: HTMLTableSectionElement, target: HTMLInputElement): void {
        const rows = rowSection.querySelectorAll("tr");
        rows.forEach(row => {
            const firstCell = row.querySelector("input");
            if (firstCell) firstCell.checked = target.checked;
        })
    }

    getSelectedRows(rowSection: HTMLTableSectionElement): number[] {
        const selectedRows: number[] = [];
        const rows = rowSection.querySelectorAll("tr");
        rows.forEach((row, idx) => {
            const firstCell = row.querySelector("input");
            if (firstCell && firstCell?.checked) selectedRows.push(idx);
        })
        return selectedRows;
    }

    enableResizing(table: HTMLTableElement): void {
        const thElements = table.querySelectorAll("th");

        thElements.forEach((th, index) => {
            if (this._props.checkbox && index === 0) return;

            const resizer = document.createElement("div");
            resizer.classList.add("resizer");
            th.appendChild(resizer);

            let startX: number, startWidth: number;

            resizer.addEventListener("mousedown", (e: MouseEvent) => {
                startX = e.pageX;
                startWidth = th.offsetWidth;

                const onMouseMove = (e: MouseEvent) => {
                    const newWidth = startWidth + (e.pageX - startX);
                    th.style.width = `${newWidth}px`;

                    table.querySelectorAll("tr").forEach(row => {
                        const cell = row.children[index] as HTMLElement;
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

    isExhausted(tableContainer: HTMLDivElement): boolean {
        return tableContainer.scrollTop + tableContainer.clientHeight >= tableContainer.scrollHeight;
    }

    showSkeleton(rowSection: HTMLDivElement) {
        const skeleton = new SkeletonDefault({});
        rowSection.appendChild(skeleton._skeleton);
        return skeleton._skeleton;
    }
}