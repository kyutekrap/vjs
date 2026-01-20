import { TextareaProps } from "../../props/Textarea/index.js";
import { TextareaFactory } from "../../factory/Textarea/index.js";
export declare abstract class TextareaBase extends TextareaFactory {
    _textarea: HTMLTextAreaElement;
    constructor(props: TextareaProps);
}
