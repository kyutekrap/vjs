export abstract class HeaderBase {

    _header: HTMLSpanElement;

    constructor(text: string = "") {
        this._header = document.createElement("span");
        this._header.classList.add("header");
        this._header.textContent = text;
    }
}