import { FooterProps } from "../../props/Footer/index.js";
import { FooterFactory } from "../../factory/Footer/index.js";

export abstract class FooterBase extends FooterFactory {

    _footer: HTMLDivElement;

    constructor(props: FooterProps) {
        super(props);
        this._footer = super.createFooter();
        document.body.appendChild(this._footer);
    }
}