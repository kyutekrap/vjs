import { HTMLBase } from "../base.js";
export interface GridProps extends HTMLBase {
    columns: number;
    children: Node[];
}
