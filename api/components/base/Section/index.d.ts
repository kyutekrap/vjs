import { SectionProps } from "../../props/Section/index.js";
import { SectionFactory } from "../../factory/Section/index.js";
export declare abstract class SectionBase extends SectionFactory {
    _section: HTMLDivElement;
    constructor(props: SectionProps);
}
