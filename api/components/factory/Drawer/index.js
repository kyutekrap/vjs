import { BgButtonDefault } from "../../default/BgButton/index.js";
export class DrawerFactory {
    _props;
    constructor(props) {
        this._props = props;
    }
    createCloseBtn(closeBgButton, drawer) {
        const closeButton = new BgButtonDefault(closeBgButton);
        drawer.appendChild(closeButton._bgButton);
        return closeButton._bgButton;
    }
    addChildren(drawerContent) {
        for (var i = 0; i < this._props.children.length; i++) {
            drawerContent.appendChild(this._props.children[i]);
        }
    }
}
