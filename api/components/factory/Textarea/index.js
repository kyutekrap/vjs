export class TextareaFactory {
    _props;
    constructor(props) {
        this._props = props;
    }
    createTextarea() {
        const textarea = document.createElement("textarea");
        textarea.classList.add("textarea");
        if (!(this._props.editable ?? true)) {
            textarea.readOnly = true;
        }
        textarea.placeholder = this._props.placeholder ?? "";
        textarea.value = this._props.value ?? "";
        textarea.rows = this._props.lines;
        textarea.style.width = this._props.width ?? "100%";
        textarea.style.resize = this._props.resize;
        textarea.required = this._props.required ?? false;
        textarea.name = this._props.name ?? "";
        if (this._props.id)
            textarea.id = this._props.id;
        return textarea;
    }
}
