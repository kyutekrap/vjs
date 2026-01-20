import { BackgroundBase } from "../../base/Background/index.js";
import { BackgroundProps } from "../../props/Background/index.js";
export declare class BackgroundDefault extends BackgroundBase {
    constructor(props: BackgroundProps);
    onClick(e: any): void;
    updateBadge(badge: string): void;
}
