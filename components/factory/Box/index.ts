import { BoxProps } from "../../props/Box/index.js";

export class BoxFactory {

    _props: BoxProps;

    constructor(props: BoxProps) {
        this._props = props;
    }

    createBox(): HTMLDivElement {
        const box = document.createElement("div");
        box.classList.add("box");
        for (var i=0; i < this._props.children.length; i++) {
            box.appendChild(this._props.children[i]);
        }
        if (this._props.id) box.id = this._props.id;
        return box;
    }
}