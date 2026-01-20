import { SectionProps } from "../../props/Section/index.js";
import { VBoxDefault } from "../../default/VBox/index.js";

export class SectionFactory {

    _props: SectionProps;

    constructor(props: SectionProps) {
        this._props = props;
    }

    createSection(): HTMLDivElement {
        const section = new VBoxDefault();
        section._vBox.classList.add("section");
        for (var i=0; i < this._props.children.length; i++) {
            section._vBox.appendChild(this._props.children[i]);
        }
        if (this._props.id) section._vBox.id = this._props.id;
        return section._vBox;
    }
}