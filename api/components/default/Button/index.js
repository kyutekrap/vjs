import { ButtonBase } from "../../base/Button/index.js";
export class ButtonDefault extends ButtonBase {
    constructor(props) {
        super(props);
        this._button.addEventListener("click", (e) => this.onClick(e));
    }
    onClick(e) {
        super._onClick(e);
    }
}
