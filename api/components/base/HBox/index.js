import { HBoxFactory } from "../../factory/HBox/index.js";
export class HBoxBase extends HBoxFactory {
    _hBox;
    constructor(props = { children: [] }) {
        super(props);
        this._hBox = super.createHBox();
    }
}
