import { ModalBase } from "../../base/Modal/index.js";
export class ModalDefault extends ModalBase {
    constructor(props) {
        super(props);
        this._closeBtn?.addEventListener("click", (e) => this.onClose(e));
    }
    onClose(e) {
        super._onClose(e);
    }
}
