import { InputProps } from "../../props/Input/index.js";

export class InputFactory {

    _props: InputProps;

    constructor(props: InputProps) {
        this._props = props;
    }

    createInput(): HTMLInputElement {
        const input = document.createElement("input");
        input.classList.add("input");
        input.value = this._props.value ?? "";
        input.placeholder = this._props.placeholder ?? "";
        input.type = this._props.variant ?? "text";

        if (input.type === "checkbox" || input.type === "radio") {
            input.checked = this._props.checked ?? false;
            input.disabled = !(this._props.editable ?? true);
        } else {
            if ((this._props.editable ?? true) === false) {
                input.readOnly = true;
            }
        }
        input.style.width = this._props.width ?? "100%";
        input.name = this._props.name ?? "";
        input.required = this._props.required ?? false;
        if (this._props.id) input.id = this._props.id;
        return input;
    }
}