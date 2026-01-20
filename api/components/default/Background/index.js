import { BackgroundBase } from "../../base/Background/index.js";
export class BackgroundDefault extends BackgroundBase {
    constructor(props) {
        super(props);
        this._background.addEventListener("click", (e) => this.onClick(e));
    }
    onClick(e) {
        super._onClick(e);
    }
    updateBadge(badge) {
        super._updateBadge(badge);
    }
}
