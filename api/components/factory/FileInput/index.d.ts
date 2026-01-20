import { FileInputProps } from "../../props/FileInput/index.js";
export declare class FileInputFactory {
    _props: FileInputProps;
    constructor(props: FileInputProps);
    createTextInput(): HTMLInputElement;
    createFileInput(): HTMLInputElement;
}
