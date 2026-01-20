import { BackgroundProps } from "../../props/Background/index.js";
import { BackgroundFactory } from "../../factory/Background/index.js";
import { SmallDefault } from "../../default/Small/index.js";

export abstract class BackgroundBase extends BackgroundFactory {

    _background: HTMLDivElement;
    _badge: HTMLDivElement | undefined;

    constructor(props: BackgroundProps) {
        super(props);
        this._background = super.createBackground();
        if (props.badge) {
            this._initializeBadge();
        }
    }

    private _initializeBadge() {
        this._badge = super.createBadge() as HTMLDivElement;
        this._background.appendChild(this._badge);
    }

    abstract onClick(e: any): void;
    abstract updateBadge(badge: string): void;

    _onClick(e: any): void {
        return;
    }

    _updateBadge(badge: string): void {
        this._props.badge = badge;
        const badgeContent = new SmallDefault(this._props.badge);
        this._badge?.replaceChildren(badgeContent._small);
    }
}