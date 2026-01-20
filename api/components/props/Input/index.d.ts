import { HTMLBase } from "../base.js";
export type InputVariant = "number" | "text" | "date" | "datetime-local" | "checkbox" | "radio" | "password" | "email" | "url" | "file";
export interface InputProps extends HTMLBase {
    variant?: InputVariant;
    editable?: boolean;
    placeholder?: string;
    value?: string;
    width?: string;
    name?: string;
    required?: boolean;
    checked?: boolean;
}
