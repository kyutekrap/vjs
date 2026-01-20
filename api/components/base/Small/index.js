export class SmallBase {
    _small;
    constructor(text = "") {
        this._small = document.createElement("small");
        this._small.classList.add("small");
        this._small.innerHTML = text;
    }
}
