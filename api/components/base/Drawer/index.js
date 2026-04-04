import { closeDrawer } from "../../util/closeDrawer/index.js";
import { DrawerFactory } from "../../factory/Drawer/index.js";
export class DrawerBase extends DrawerFactory {
    _drawer;
    _drawerContent;
    _closeBtn;
    constructor(props) {
        super(props);
        this._drawer = super.createDrawer();
        this._drawer.classList.add("drawer");
        if (props.id)
            this._drawer.id = props.id;
        if (props.closeBgButton) {
            this._closeBtn = super.createCloseBtn(props.closeBgButton, this._drawer);
        }
        this._drawerContent = super.createDrawerContent();
        this._drawerContent.classList.add("drawer-content");
        this._drawer.appendChild(this._drawerContent);
        document.body.appendChild(this._drawer);
    }
    _onClose() {
        closeDrawer();
    }
}
