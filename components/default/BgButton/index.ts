import { BgButtonBase } from "../../base/BgButton/index.js";
import { BgButtonProps } from "../../props/BgButton/index.js";

export class BgButtonDefault extends BgButtonBase {

    constructor(props: BgButtonProps) {
        super(props);
        this._bgButton.addEventListener("click", (e) => this.onClick(e));
    }

    onClick(e: any) {
        super._onClick(e);
    }

    updateBadge(badge: string): void {
        super._updateBadge(badge);
    }
}