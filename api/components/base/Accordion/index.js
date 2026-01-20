import { AccordionFactory } from "../../factory/Accordion/index.js";
export class AccordionBase extends AccordionFactory {
    _isOpen;
    _accordion;
    _header;
    _content;
    constructor(props) {
        super(props);
        this._isOpen = false;
        this._accordion = document.createElement("div");
        this._accordion.classList.add("accordion");
        if (props.id)
            this._accordion.id = props.id;
        this._header = super.createHeader(this._props.caption, this._accordion);
        this._content = super.createContent();
        this._accordion.appendChild(this._content);
    }
    _onToggle(e) {
        if (!this._isOpen) {
            this._accordion.classList.add("open");
        }
        else {
            this._accordion.classList.remove("open");
        }
        this._isOpen = !this._isOpen;
    }
}
