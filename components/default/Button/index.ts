import { ButtonBase } from "../../base/Button/index.js";
import { ButtonProps } from "../../props/Button/index.js";

export class ButtonDefault extends ButtonBase {
    constructor(props: ButtonProps) {
        super(props);
        this._button.addEventListener("click", (e) => this.onClick(e));   
    }

    onClick(e: any) {
        super._onClick(e);
    }
}