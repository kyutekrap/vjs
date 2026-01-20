import { IFrameProps } from "../../props/IFrame/index.js";

export class IFrameFactory {

    _props: IFrameProps;

    constructor(props: IFrameProps) {
        this._props = props;
    }

    createIFrame(): HTMLIFrameElement {
        const iframe = document.createElement("iframe");
        iframe.title = this._props.title ?? "";
        iframe.allow = this._props.allow ?? "";
        if (this._props.sandbox) iframe.sandbox = this._props.sandbox.join(" ");
        if (this._props.src) iframe.src = this._props.src;
        if (this._props.srcdoc) iframe.srcdoc = this._props.srcdoc;
        if (this._props.referrerpolicy) iframe.referrerPolicy = this._props.referrerpolicy;

        return iframe;
    }
}