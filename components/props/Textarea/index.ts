import { HTMLBase } from "../base.js";

export interface TextareaProps extends HTMLBase {
    value?: string;
    lines: number;
    editable?: boolean;
    placeholder?: string;
    width?: string;
    resize: 'none' | 'both' | 'horizontal' | 'vertical';
    name?: string;
    required?: boolean;
}