import { DrawerProps } from "../../props/Drawer/index.js";
import { BgButtonProps } from "../../props/BgButton/index.js";
export declare class DrawerFactory {
    _props: DrawerProps;
    constructor(props: DrawerProps);
    createDrawer(): HTMLDivElement;
    createCloseBtn(closeBgButton: BgButtonProps, drawer: HTMLDivElement): HTMLDivElement;
    createDrawerContent(): HTMLDivElement;
}
