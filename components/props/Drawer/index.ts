import { BgButtonProps } from "../BgButton/index.js";
import { HTMLBase } from "../base.js";


export interface DrawerProps extends HTMLBase {
    children: Node[];
    closeBgButton?: BgButtonProps;
}
