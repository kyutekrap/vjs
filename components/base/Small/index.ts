export abstract class SmallBase {

    _small: HTMLSpanElement;

    constructor(text: string = "") {
        this._small = document.createElement("small");
        this._small.classList.add("small");
        this._small.innerHTML = text;
    }
}