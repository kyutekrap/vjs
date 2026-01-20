import { AccordionBase } from "../../base/Accordion/index.js";
export class AccordionDefault extends AccordionBase {
    constructor(props) {
        super(props);
        this._header.addEventListener("click", (e) => this.onToggle(e));
    }
    onToggle(e) {
        super._onToggle(e);
    }
}
