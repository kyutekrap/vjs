import { InputFactory } from "../../factory/Input/index.js";
export class InputBase extends InputFactory {
    _input;
    constructor(props = {}) {
        super(props);
        this._input = super.createInput();
    }
}
