import { HTMLBase } from "../base.js";

export interface SelectProps extends HTMLBase {
    options: string[];
    selected?: string;
    editable?: boolean;
    placeholder?: string;
    width?: string;
    required?: boolean;
    multiselect?: boolean;
    searchable?: boolean;
    name?: string;
}
