import { VBoxProps } from "../../props/VBox/index.js";

export class VBoxFactory {

    _props: VBoxProps;

    constructor(props: VBoxProps) {
        this._props = props;
    }

    createVBox(): HTMLDivElement {
        const vBox = document.createElement("div");
        vBox.classList.add("vBox");
        for (var i=0; i < this._props.children.length; i++) {
            vBox.appendChild(this._props.children[i]);
        }
        if (this._props.id) vBox.id = this._props.id;
        return vBox;
    }
}