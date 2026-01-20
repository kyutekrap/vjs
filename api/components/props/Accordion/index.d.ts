import { HTMLBase } from "../base.js";
import { HBoxProps } from "../HBox/index.js";
export interface AccordionProps extends HTMLBase {
    caption: HBoxProps;
    children: Node[];
}
