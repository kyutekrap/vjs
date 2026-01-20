import { HTMLBase } from "../base.js";

export interface FileInputProps extends HTMLBase {
    value?: string;
    editable?: boolean;
    placeholder?: string;
    width?: string;
    name?: string;
    required?: boolean;
    multiselect?: boolean;
    accept: string;
    size: number;
}