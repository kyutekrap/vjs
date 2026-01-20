import { HTMLBase } from "../base.js";

export type ButtonVariant = "filled" | "outlined" | "text";

export interface ButtonProps extends HTMLBase {
    variant: ButtonVariant;
    size: "big" | "medium";
    content: string;
    type: "button" | "submit";
    width?: string;
    form?: string;
    name?: string;
}