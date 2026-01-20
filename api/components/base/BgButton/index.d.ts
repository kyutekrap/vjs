import { BgButtonProps } from "../../props/BgButton/index.js";
import { BgButtonFactory } from "../../factory/BgButton/index.js";
export declare abstract class BgButtonBase extends BgButtonFactory {
    _bgButton: HTMLDivElement;
    _background: HTMLDivElement;
    private _backgroundInst;
    constructor(props: BgButtonProps);
    private _initialize;
    abstract onClick(e: any): void;
    abstract updateBadge(badge: string): void;
    _onClick(e: any): void;
    _updateBadge(badge: string): void;
}
