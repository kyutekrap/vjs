import { BgButtonDefault } from "../../default/BgButton/index.js";
import { VBoxDefault } from "../../default/VBox/index.js";
export class ModalFactory {
    _props;
    constructor(props) {
        this._props = props;
    }
    createModal() {
        const modal = document.createElement("div");
        modal.classList.add("modal");
        if (this._props.id)
            modal.id = this._props.id;
        return modal;
    }
    createContainer() {
        const container = document.createElement("div");
        container.classList.add("modal-content");
        return container;
    }
    createCloseBtn(closeBgButton, container) {
        const closeButton = new BgButtonDefault(closeBgButton);
        closeButton._bgButton.style.marginLeft = "auto";
        closeButton._bgButton.style.marginBottom = "10px";
        container.appendChild(closeButton._bgButton);
        return closeButton._bgButton;
    }
    createContent() {
        const content = new VBoxDefault();
        return content._vBox;
    }
}
