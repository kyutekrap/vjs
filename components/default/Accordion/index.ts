import { AccordionBase } from "../../base/Accordion/index.js";
import { AccordionProps } from "../../props/Accordion/index.js";

export class AccordionDefault extends AccordionBase {
    constructor(props: AccordionProps) {
        super(props);
        this._header.addEventListener("click", (e) => this.onToggle(e));
    }

    onToggle(e: any) {
        super._onToggle(e);
    }
}