export class BoxFactory {
    _props;
    constructor(props) {
        this._props = props;
    }
    createBox() {
        const box = document.createElement("div");
        box.classList.add("box");
        for (var i = 0; i < this._props.children.length; i++) {
            box.appendChild(this._props.children[i]);
        }
        if (this._props.id)
            box.id = this._props.id;
        return box;
    }
}
