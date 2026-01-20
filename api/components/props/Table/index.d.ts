import { HTMLBase } from "../base.js";
import { HBoxProps } from "../HBox/index.js";
export interface TableColumn {
    label?: string;
    value: string;
}
type EventType = "click" | "change";
export interface TableCell {
    value: string;
    href?: string;
    checked?: boolean;
    editable?: boolean;
    list?: string[];
    events?: Partial<Record<EventType, (e: any) => void>>;
}
export interface TableProps extends HTMLBase {
    title?: string;
    columns: TableColumn[];
    data: Record<string, TableCell>[];
    resizable?: boolean;
    checkbox?: boolean;
    sortable?: boolean;
    footer?: HBoxProps;
}
export {};
