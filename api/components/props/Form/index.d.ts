import { HTMLBase } from "../base.js";
export interface FormProps extends HTMLBase {
    children: Node[];
    title?: string;
    showFooter?: boolean;
}
