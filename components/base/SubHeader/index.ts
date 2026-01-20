export abstract class SubHeaderBase {

    _subHeader: HTMLSpanElement;

    constructor(text: string = "") {
        this._subHeader = document.createElement("span");
        this._subHeader.classList.add("subHeader");
        this._subHeader.textContent = text;
    }
}