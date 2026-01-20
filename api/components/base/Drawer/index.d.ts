import { DrawerProps } from "../../props/Drawer/index.js";
import { DrawerFactory } from "../../factory/Drawer/index.js";
export declare abstract class DrawerBase extends DrawerFactory {
    _drawer: HTMLDivElement;
    _drawerContent: HTMLDivElement;
    _closeBtn: HTMLDivElement | undefined;
    constructor(props: DrawerProps);
}
