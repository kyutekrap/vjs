import { closeModal } from "../../util/closeModal/index.js";
import { ModalFactory } from "../../factory/Modal/index.js";
export class ModalBase extends ModalFactory {
    _modal;
    _container;
    _closeBtn;
    _content;
    constructor(props = {}) {
        super(props);
        this._modal = super.createModal();
        this._container = super.createContainer();
        if (this._props.closeBgButton) {
            this._closeBtn = this.createCloseBtn(this._props.closeBgButton, this._container);
        }
        this._content = super.createContent();
        this._container.appendChild(this._content);
        this._modal.appendChild(this._container);
        document.body.appendChild(this._modal);
    }
    _onClose(e) {
        e.preventDefault();
        closeModal();
    }
}
