import { ButtonProps } from "../../props/Button/index.js";

export class ButtonFactory {

    _props: ButtonProps;

    constructor(props: ButtonProps) {
        this._props = props;
    }

    createButton(): HTMLButtonElement {
        const button = document.createElement("button");
        button.classList.add("button");
        button.classList.add(this._props.variant);
        button.classList.add(this._props.size);
        button.innerHTML = this._props.content;
        button.type = this._props.type;
        button.style.width = this._props.width ?? "100%";
        if (this._props.id) button.id = this._props.id;
        if (this._props.form) button.setAttribute("form", this._props.form);
        if (this._props.name) button.name = this._props.name;
        return button;
    }
}