import { FooterFactory } from "../../factory/Footer/index.js";
export class FooterBase extends FooterFactory {
    _footer;
    constructor(props) {
        super(props);
        this._footer = super.createFooter();
        document.body.appendChild(this._footer);
    }
}
