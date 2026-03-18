import { HTMLBase } from "../base.js";
import { HBoxProps } from "../HBox/index.js";

export interface TableColumn {
    label?: string;
    value: string;
}

type EventType = "click" | "change";

export interface TableCell {
    label?: string;
    value: any;
    href?: string;
    checked?: boolean;
    editable?: boolean;
    list?: string[];
    textAlign?: "left" | "center" | "right";
    events?: Partial<Record<EventType, (e: any) => void>>;
}

export interface TableColumnGroup {
    label: string;
    rowspan?: number;
    colspan?: number;
}

export interface TableProps extends HTMLBase {
    title?: string;
    columns: TableColumn[];
    columnGroups?: TableColumnGroup[][];
    data: Record<string, TableCell>[];
    resizable?: boolean;
    checkbox?: boolean;
    sortable?: boolean;
    footer?: HBoxProps;
    skeletonLines?: number;
    fixedLeftColumn?: boolean;
    fixedRightColumn?: boolean;
    fixedBottomRow?: boolean;
}