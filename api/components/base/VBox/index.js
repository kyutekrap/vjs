import { VBoxFactory } from "../../factory/VBox/index.js";
export class VBoxBase extends VBoxFactory {
    _vBox;
    constructor(props = { children: [] }) {
        super(props);
        this._vBox = super.createVBox();
    }
}
