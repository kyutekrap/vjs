import { LinkFactory } from "../../factory/Link/index.js";
export class LinkBase extends LinkFactory {
    _link;
    _href;
    constructor(props) {
        super(props);
        this._link = super.createLink();
        this._href = props.href ?? null;
    }
    _onClick(e) {
        if (this._href)
            window.location.href = this._href;
        return;
    }
}
