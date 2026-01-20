import { AccordionProps } from "../../props/Accordion/index.js";
import { AccordionFactory } from "../../factory/Accordion/index.js";
export declare abstract class AccordionBase extends AccordionFactory {
    _isOpen: boolean;
    _accordion: HTMLDivElement;
    _header: HTMLDivElement;
    _content: HTMLDivElement;
    constructor(props: AccordionProps);
    abstract onToggle(e: any): void;
    _onToggle(e: any): void;
}
