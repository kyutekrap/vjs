import { InputProps } from "../../props/Input/index.js";
import { InputFactory } from "../../factory/Input/index.js";

export abstract class InputBase extends InputFactory {

    _input: HTMLInputElement;

    constructor(props: InputProps = {}) {
        super(props);
        this._input = super.createInput();
    }
}