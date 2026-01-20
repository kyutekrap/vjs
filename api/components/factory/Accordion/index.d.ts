import { AccordionProps } from "../../props/Accordion/index.js";
import { HBoxProps } from "../../props/HBox/index.js";
export declare class AccordionFactory {
    _props: AccordionProps;
    constructor(props: AccordionProps);
    createHeader(headerProps: HBoxProps, accordion: HTMLDivElement): HTMLDivElement;
    createContent(): HTMLDivElement;
}
