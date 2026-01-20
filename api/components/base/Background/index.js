import { BackgroundFactory } from "../../factory/Background/index.js";
import { SmallDefault } from "../../default/Small/index.js";
export class BackgroundBase extends BackgroundFactory {
    _background;
    _badge;
    constructor(props) {
        super(props);
        this._background = super.createBackground();
        if (props.badge) {
            this._initializeBadge();
        }
    }
    _initializeBadge() {
        this._badge = super.createBadge();
        this._background.appendChild(this._badge);
    }
    _onClick(e) {
        return;
    }
    _updateBadge(badge) {
        this._props.badge = badge;
        const badgeContent = new SmallDefault(this._props.badge);
        this._badge?.replaceChildren(badgeContent._small);
    }
}
