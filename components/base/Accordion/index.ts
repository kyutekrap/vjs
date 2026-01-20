import { AccordionProps } from "../../props/Accordion/index.js";
import { AccordionFactory } from "../../factory/Accordion/index.js";

export abstract class AccordionBase extends AccordionFactory {

    _isOpen: boolean;
    _accordion: HTMLDivElement;
    _header: HTMLDivElement;
    _content: HTMLDivElement;

    constructor(props: AccordionProps) {
        super(props);
        this._isOpen = false;
        this._accordion = document.createElement("div");
        this._accordion.classList.add("accordion");
        if (props.id) this._accordion.id = props.id;
        this._header = super.createHeader(this._props.caption, this._accordion);
        this._content = super.createContent();
        this._accordion.appendChild(this._content);
    }

    abstract onToggle(e: any): void;
    
    _onToggle(e: any): void {
        if (!this._isOpen) {
            this._accordion.classList.add("open");
        } else {
            this._accordion.classList.remove("open");
        }
        this._isOpen = !this._isOpen;
    }
}