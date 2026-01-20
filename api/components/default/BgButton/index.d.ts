import { BgButtonBase } from "../../base/BgButton/index.js";
import { BgButtonProps } from "../../props/BgButton/index.js";
export declare class BgButtonDefault extends BgButtonBase {
    constructor(props: BgButtonProps);
    onClick(e: any): void;
    updateBadge(badge: string): void;
}
