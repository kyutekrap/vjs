import { FooterProps } from "../../props/Footer/index.js";
import { FooterFactory } from "../../factory/Footer/index.js";
export declare abstract class FooterBase extends FooterFactory {
    _footer: HTMLDivElement;
    constructor(props: FooterProps);
}
