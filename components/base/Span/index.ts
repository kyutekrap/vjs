import { SpanProps } from "../../props/Span/index.js";

export abstract class SpanBase {

    _span: HTMLSpanElement;

    constructor(text: string = "", props: SpanProps = { fontWeight: "normal" }) {
        this._span = document.createElement("span");
        this._span.classList.add("span");
        this._span.innerHTML = text;
        this._span.style.fontWeight = props.fontWeight;
    }
}