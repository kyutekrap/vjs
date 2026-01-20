export class SpanBase {
    _span;
    constructor(text = "", props = { fontWeight: "normal" }) {
        this._span = document.createElement("span");
        this._span.classList.add("span");
        this._span.innerHTML = text;
        this._span.style.fontWeight = props.fontWeight;
    }
}
