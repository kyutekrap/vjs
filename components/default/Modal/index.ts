import { ModalBase } from "../../base/Modal/index.js";
import { ModalProps } from "../../props/Modal/index.js";

export class ModalDefault extends ModalBase {

    constructor(props: ModalProps) {
        super(props);

        this._closeBtn?.addEventListener("click", (e) => this.onClose(e));
    }

    onClose(e: any) {
        super._onClose(e);
    }
}