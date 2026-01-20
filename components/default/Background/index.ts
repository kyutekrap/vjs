import { BackgroundBase } from "../../base/Background/index.js";
import { BackgroundProps } from "../../props/Background/index.js";

export class BackgroundDefault extends BackgroundBase {

    constructor(props: BackgroundProps) {
        super(props); 
        this._background.addEventListener("click", (e) => this.onClick(e));
    }

    onClick(e: any) {
        super._onClick(e);
    }

    updateBadge(badge: string): void {
        super._updateBadge(badge);
    }
}