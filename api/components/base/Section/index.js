import { SectionFactory } from "../../factory/Section/index.js";
export class SectionBase extends SectionFactory {
    _section;
    constructor(props) {
        super(props);
        this._section = super.createSection();
        document.body.appendChild(this._section);
    }
}
