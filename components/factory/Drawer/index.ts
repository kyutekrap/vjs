import { DrawerProps } from "../../props/Drawer/index.js";
import { BgButtonProps } from "../../props/BgButton/index.js";
import { BgButtonDefault } from "../../default/BgButton/index.js";

export class DrawerFactory {

    _props: DrawerProps;

    constructor(props: DrawerProps) {
        this._props = props;
    }

    createCloseBtn(closeBgButton: BgButtonProps, drawer: HTMLDivElement): HTMLDivElement {
        const closeButton = new BgButtonDefault(closeBgButton);
        drawer.appendChild(closeButton._bgButton);
        return closeButton._bgButton;
    }

    addChildren(drawerContent: HTMLDivElement) {
        for (var i=0; i < this._props.children.length; i++) {
            drawerContent.appendChild(this._props.children[i]);
        }
    }
}