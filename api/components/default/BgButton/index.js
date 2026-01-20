import { BgButtonBase } from "../../base/BgButton/index.js";
export class BgButtonDefault extends BgButtonBase {
    constructor(props) {
        super(props);
        this._bgButton.addEventListener("click", (e) => this.onClick(e));
    }
    onClick(e) {
        super._onClick(e);
    }
    updateBadge(badge) {
        super._updateBadge(badge);
    }
}
