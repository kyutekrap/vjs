export class LineBase {
    _line;
    constructor(props = {}) {
        this._line = document.createElement("div");
        this._line.classList.add("line");
    }
}
