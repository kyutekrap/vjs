import { InputProps } from "../../props/Input/index.js";
export declare class InputFactory {
    _props: InputProps;
    constructor(props: InputProps);
    createInput(): HTMLInputElement;
}
