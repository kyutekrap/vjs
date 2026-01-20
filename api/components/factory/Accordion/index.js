import { HBoxDefault } from "../../default/HBox/index.js";
export class AccordionFactory {
    _props;
    constructor(props) {
        this._props = props;
    }
    createHeader(headerProps, accordion) {
        const header = new HBoxDefault(headerProps);
        header._hBox.classList.add("accordion-header");
        accordion.appendChild(header._hBox);
        return header._hBox;
    }
    createContent() {
        const content = document.createElement("div");
        content.classList.add("accordion-content");
        for (let i = 0; i < this._props.children.length; i++) {
            content.appendChild(this._props.children[i]);
        }
        return content;
    }
}
