import { ButtonFactory } from "../../factory/Button/index.js";
export class ButtonBase extends ButtonFactory {
    _button;
    constructor(props) {
        super(props);
        this._button = super.createButton();
    }
    _onClick(e) {
        return;
    }
}
