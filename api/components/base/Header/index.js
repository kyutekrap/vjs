export class HeaderBase {
    _header;
    constructor(text = "") {
        this._header = document.createElement("span");
        this._header.classList.add("header");
        this._header.textContent = text;
    }
}
