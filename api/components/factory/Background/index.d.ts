import { BackgroundProps } from "../../props/Background/index.js";
export declare class BackgroundFactory {
    _props: BackgroundProps;
    constructor(props: BackgroundProps);
    createBackground(): HTMLDivElement;
    createBadge(): HTMLDivElement | undefined;
}
