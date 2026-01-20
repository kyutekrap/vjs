import { FileInputFactory } from "../../factory/FileInput/index.js";
export class FileInputBase extends FileInputFactory {
    _textInput;
    _fileInput;
    _editable;
    _size;
    _multiselect;
    constructor(props) {
        super(props);
        this._textInput = super.createTextInput();
        this._fileInput = super.createFileInput();
        this._editable = props.editable ?? true;
        this._size = props.size;
        this._multiselect = props.multiselect ?? false;
    }
    _onClick(e) {
        if (this._editable)
            this._fileInput.click();
    }
    _onChange(e) {
        const files = this._multiselect && this._fileInput.files
            ? Array.from(this._fileInput.files)
            : this._fileInput.files
                ? [this._fileInput.files[0]]
                : [];
        this._textInput.value = files.map(file => {
            if (file.size > this._size * 1024 * 1024) {
                console.log("File size exceeded:", file.name);
            }
            else {
                return file.name;
            }
        }).join(",");
    }
}
