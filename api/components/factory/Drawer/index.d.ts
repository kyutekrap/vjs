import { DrawerProps } from "../../props/Drawer/index.js";
import { BgButtonProps } from "../../props/BgButton/index.js";
export declare class DrawerFactory {
    _props: DrawerProps;
    constructor(props: DrawerProps);
    createCloseBtn(closeBgButton: BgButtonProps, drawer: HTMLDivElement): HTMLDivElement;
    addChildren(drawerContent: HTMLDivElement): void;
}
