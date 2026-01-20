import { FileInputBase } from "../../base/FileInput/index.js";
import { FileInputProps } from "../../props/FileInput/index.js";

export class FileInputDefault extends FileInputBase {
    constructor(props: FileInputProps) {
        super(props);
        this._textInput.addEventListener("click", (e) => this.onClick(e));
        this._fileInput.addEventListener("change", (e) => this.onChange(e));
    }

    onClick(e: any) {
        super._onClick(e);
    }

    onChange(e: any) {
        super._onChange(e);
    }
}