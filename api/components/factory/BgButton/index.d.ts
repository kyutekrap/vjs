import { BgButtonProps } from "../../props/BgButton/index.js";
import { BackgroundDefault } from "../../default/Background/index.js";
export declare class BgButtonFactory {
    _props: BgButtonProps;
    constructor(props: BgButtonProps);
    createBgButton(): HTMLDivElement;
    createBackground(): BackgroundDefault;
}
