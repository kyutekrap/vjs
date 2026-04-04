import { DrawerBase } from "../../base/Drawer/index.js";
export class DrawerDefault extends DrawerBase {
    constructor(props) {
        super(props);
        if (props.closeBgButton && this._closeBtn) {
            this._closeBtn.addEventListener("click", (_e) => this.onClose());
        }
    }
    onClose() {
        super._onClose();
    }
}
