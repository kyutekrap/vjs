import { FileInputProps } from "../../props/FileInput/index.js";
import { FileInputFactory } from "../../factory/FileInput/index.js";

export abstract class FileInputBase extends FileInputFactory {

    _textInput: HTMLInputElement;
    _fileInput: HTMLInputElement;
    _editable: boolean;
    _size: number;
    _multiselect: boolean;

    constructor(props: FileInputProps) {
        super(props);
        this._textInput = super.createTextInput();
        this._fileInput = super.createFileInput();
        this._editable = props.editable ?? true;
        this._size = props.size;
        this._multiselect = props.multiselect ?? false;
    }

    abstract onClick(e: any): void;
    abstract onChange(e: any): void;

    _onClick(e: any) {
        if (this._editable) this._fileInput.click();
    }

    _onChange(e: any) {
        const files: File[] = this._multiselect && this._fileInput.files
            ? Array.from(this._fileInput.files)
            : this._fileInput.files
            ? [this._fileInput.files[0]]
            : [];
        this._textInput.value = files.map(file => {
            if (file.size > this._size * 1024 * 1024) {
                console.log("File size exceeded:", file.name);
            } else {
                return file.name;
            }
        }).join(",");
    }
}