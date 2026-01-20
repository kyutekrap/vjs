import { HBoxProps } from "../../props/HBox/index.js";

export class HBoxFactory {

    _props: HBoxProps;

    constructor(props: HBoxProps) {
        this._props = props;
    }

    createHBox() {
        const hBox = document.createElement("div");
        hBox.classList.add("hBox");
        hBox.classList.add(this._props.startFrom ?? "left");
        for (var i=0; i < this._props.children.length; i++) {
            hBox.appendChild(this._props.children[i]);
        }
        if (this._props.id) hBox.id = this._props.id;
        return hBox;
    }
}