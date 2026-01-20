import { BgButtonFactory } from "../../factory/BgButton/index.js";
import { SmallDefault } from "../../default/Small/index.js";
export class BgButtonBase extends BgButtonFactory {
    _bgButton;
    _background;
    _backgroundInst;
    constructor(props) {
        super(props);
        this._bgButton = super.createBgButton();
        this._initialize();
    }
    _initialize() {
        this._backgroundInst = super.createBackground();
        this._background = this._backgroundInst._background;
        this._bgButton.appendChild(this._background);
    }
    _onClick(e) {
        return;
    }
    _updateBadge(badge) {
        this._props.badge = badge;
        const badgeContent = new SmallDefault(this._props.badge);
        if (this._backgroundInst._badge)
            this._backgroundInst._badge.replaceChildren(badgeContent._small);
    }
}
