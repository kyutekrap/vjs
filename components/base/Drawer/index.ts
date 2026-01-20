import { closeDrawer } from "../../util/closeDrawer/index.js";
import { DrawerProps } from "../../props/Drawer/index.js";
import { DrawerFactory } from "../../factory/Drawer/index.js";

export abstract class DrawerBase extends DrawerFactory {

    _drawer: HTMLDivElement;
    _drawerContent: HTMLDivElement;
    _closeBtn: HTMLDivElement | undefined;

    constructor(props: DrawerProps) {
        super(props);
        this._drawer = document.createElement("div");
        this._drawer.classList.add("drawer");
        if (props.id) this._drawer.id = props.id;

        if (props.closeBgButton) {
            this._closeBtn = this.createCloseBtn(props.closeBgButton, this._drawer);
            this._closeBtn.addEventListener("click", (e) => closeDrawer());
        }

        this._drawerContent = document.createElement("div");
        this._drawerContent.classList.add("drawer-content");
        super.addChildren(this._drawerContent);

        this._drawer.appendChild(this._drawerContent);
        document.body.appendChild(this._drawer);
    }
}