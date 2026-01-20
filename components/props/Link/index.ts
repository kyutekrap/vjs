import { HTMLBase } from "../base.js";

export interface LinkProps extends HTMLBase {
    size: "medium" | "small";
    variant: "primary" | "secondary";
    text: string;
    href?: string;
}