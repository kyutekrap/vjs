import { ButtonProps } from "../../props/Button/index.js";
import { ButtonFactory } from "../../factory/Button/index.js";

export abstract class ButtonBase extends ButtonFactory {

    _button: HTMLButtonElement;

    constructor(props: ButtonProps) {
        super(props);
        this._button = super.createButton();
    }

    abstract onClick(e: any): void;

    _onClick(e: any) {
        return;
    }
}