import { FileInputBase } from "../../base/FileInput/index.js";
export class FileInputDefault extends FileInputBase {
    constructor(props) {
        super(props);
        this._textInput.addEventListener("click", (e) => this.onClick(e));
        this._fileInput.addEventListener("change", (e) => this.onChange(e));
    }
    onClick(e) {
        super._onClick(e);
    }
    onChange(e) {
        super._onChange(e);
    }
}
