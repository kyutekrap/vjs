import { IFrameFactory } from "../../factory/IFrame/index.js";
import { IFrameProps } from "../../props/IFrame/index.js";
export declare abstract class IFrameBase extends IFrameFactory {
    _iframe: HTMLIFrameElement;
    constructor(props: IFrameProps);
}
