export class SubHeaderBase {
    _subHeader;
    constructor(text = "") {
        this._subHeader = document.createElement("span");
        this._subHeader.classList.add("subHeader");
        this._subHeader.textContent = text;
    }
}
