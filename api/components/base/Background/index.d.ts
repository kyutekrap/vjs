import { BackgroundProps } from "../../props/Background/index.js";
import { BackgroundFactory } from "../../factory/Background/index.js";
export declare abstract class BackgroundBase extends BackgroundFactory {
    _background: HTMLDivElement;
    _badge: HTMLDivElement | undefined;
    constructor(props: BackgroundProps);
    private _initializeBadge;
    abstract onClick(e: any): void;
    abstract updateBadge(badge: string): void;
    _onClick(e: any): void;
    _updateBadge(badge: string): void;
}
