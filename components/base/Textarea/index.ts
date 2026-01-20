import { TextareaProps } from "../../props/Textarea/index.js";
import { TextareaFactory } from "../../factory/Textarea/index.js";

export abstract class TextareaBase extends TextareaFactory {

    _textarea: HTMLTextAreaElement;

    constructor(props: TextareaProps) {
        super(props);
        this._textarea = super.createTextarea();
    }
}