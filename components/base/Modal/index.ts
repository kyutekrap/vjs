import { ModalProps } from "../../props/Modal/index.js";
import { closeModal } from "../../util/closeModal/index.js";
import { ModalFactory } from "../../factory/Modal/index.js";

export abstract class ModalBase extends ModalFactory {

    _modal: HTMLDivElement;
    _container: HTMLDivElement;
    _closeBtn: HTMLDivElement | undefined;
    _content: HTMLDivElement;

    constructor(props: ModalProps = {}) {
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

    abstract onClose(e: any): void;

    _onClose(e: any) {
        e.preventDefault();
        closeModal();
    }
}