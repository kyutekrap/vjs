import { TextareaFactory } from "../../factory/Textarea/index.js";
export class TextareaBase extends TextareaFactory {
    _textarea;
    constructor(props) {
        super(props);
        this._textarea = super.createTextarea();
    }
}
