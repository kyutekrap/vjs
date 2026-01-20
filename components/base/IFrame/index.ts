import { IFrameFactory } from "../../factory/IFrame/index.js";
import { IFrameProps } from "../../props/IFrame/index.js";

export abstract class IFrameBase extends IFrameFactory {

    _iframe: HTMLIFrameElement;

    constructor(props: IFrameProps) {
        super(props);

        this._iframe = super.createIFrame();
        this._iframe.classList.add("iframe");
    }
}