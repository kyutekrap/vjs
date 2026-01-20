import { FileInputProps } from "../../props/FileInput/index.js";
import { FileInputFactory } from "../../factory/FileInput/index.js";
export declare abstract class FileInputBase extends FileInputFactory {
    _textInput: HTMLInputElement;
    _fileInput: HTMLInputElement;
    _editable: boolean;
    _size: number;
    _multiselect: boolean;
    constructor(props: FileInputProps);
    abstract onClick(e: any): void;
    abstract onChange(e: any): void;
    _onClick(e: any): void;
    _onChange(e: any): void;
}
