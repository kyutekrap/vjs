import { BgButtonDefault } from "../../default/BgButton/index.js";
import { VBoxDefault } from "../../default/VBox/index.js";
import { BgButtonProps } from "../../props/BgButton/index.js";
import { ModalProps } from "../../props/Modal/index.js";

export class ModalFactory {

    _props: ModalProps;

    constructor(props: ModalProps) {
        this._props = props;
    }

    createModal(): HTMLDivElement {
        const modal = document.createElement("div");
        modal.classList.add("modal");
        if (this._props.id) modal.id = this._props.id;
        return modal;
    }

    createContainer(): HTMLDivElement {
        const container = document.createElement("div");
        container.classList.add("modal-content");
        return container;
    }

    createCloseBtn(closeBgButton: BgButtonProps, container: HTMLDivElement): HTMLDivElement {
        const closeButton = new BgButtonDefault(closeBgButton);
        closeButton._bgButton.style.marginLeft = "auto";
        closeButton._bgButton.style.marginBottom = "10px";
        container.appendChild(closeButton._bgButton);
        return closeButton._bgButton;
    }

    createContent(): HTMLDivElement {
        const content = new VBoxDefault();
        return content._vBox;
    }
}