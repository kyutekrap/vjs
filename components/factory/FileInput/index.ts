import { FileInputProps } from "../../props/FileInput/index.js";
import { InputDefault } from "../../default/Input/index.js";

export class FileInputFactory {

    _props: FileInputProps;

    constructor(props: FileInputProps) {
        this._props = props;
    }

    createTextInput(): HTMLInputElement {
        const textInput = document.createElement("input");
        textInput.classList.add("input");
        textInput.readOnly = true;
        textInput.value = this._props.value ?? "";
        textInput.placeholder = this._props.placeholder ?? "";
        textInput.style.width = this._props.width ?? "100%";
        return textInput;
    }

    createFileInput(): HTMLInputElement {
        const fileInput = new InputDefault({ variant: "file", name: this._props.name, required: this._props.required });
        fileInput._input.style.display = "none";
        fileInput._input.accept = this._props.accept;
        if (this._props.id) fileInput._input.id = this._props.id;
        return fileInput._input;
    }
}