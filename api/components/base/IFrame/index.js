import { IFrameFactory } from "../../factory/IFrame/index.js";
export class IFrameBase extends IFrameFactory {
    _iframe;
    constructor(props) {
        super(props);
        this._iframe = super.createIFrame();
        this._iframe.classList.add("iframe");
    }
}
