import { AccordionProps } from "../../props/Accordion/index.js";
import { HBoxDefault } from "../../default/HBox/index.js";
import { HBoxProps } from "../../props/HBox/index.js";

export class AccordionFactory {

    _props: AccordionProps;

    constructor(props: AccordionProps) {
        this._props = props;
    }

    createHeader(headerProps: HBoxProps, accordion: HTMLDivElement): HTMLDivElement {
        const header = new HBoxDefault(headerProps);
        header._hBox.classList.add("accordion-header");
        accordion.appendChild(header._hBox);
        return header._hBox;
    }
    
    createContent(): HTMLDivElement {
        const content = document.createElement("div");
        content.classList.add("accordion-content");
        for (let i = 0; i < this._props.children.length; i++) {
            content.appendChild(this._props.children[i]);
        }
        return content;
    }
}