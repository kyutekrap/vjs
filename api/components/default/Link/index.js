import { LinkBase } from "../../base/Link/index.js";
export class LinkDefault extends LinkBase {
    constructor(props) {
        super(props);
        this._link.addEventListener("click", (e) => this.onClick(e));
    }
    onClick(e) {
        super._onClick(e);
    }
}
