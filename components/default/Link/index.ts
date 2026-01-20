import { LinkBase } from "../../base/Link/index.js";
import { LinkProps } from "../../props/Link/index.js";

export class LinkDefault extends LinkBase {
    constructor(props: LinkProps) {
        super(props);
        this._link.addEventListener("click", (e) => this.onClick(e));
    }

    onClick(e: any) {
        super._onClick(e);
    }
}