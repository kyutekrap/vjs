import { HTMLBase } from "../base.js";
export interface HBoxProps extends HTMLBase {
    children: Node[];
    startFrom?: "right" | "left";
}
