import { HBoxDefault } from "../../default/HBox/index.js";
import { SpanDefault } from "../../default/Span/index.js";
import { FormProps } from "../../props/Form/index.js";

export class FormFactory {

    _props: FormProps;

    constructor(props: FormProps) {
        this._props = props;
    }

    createFormContainer(): HTMLDivElement {
        const container = document.createElement("div");
        container.classList.add("form");
        return container;
    }

    createForm(container: HTMLDivElement): HTMLFormElement {
        const form = document.createElement("form");
        for (var i=0; i < this._props.children.length; i++) {
            form.appendChild(this._props.children[i]);
        }
        container.appendChild(form);
        if (this._props.id) form.id = this._props.id;
        form.classList.add("vBox");
        return form;
    }

    createFormHeader(title: string, form: HTMLDivElement): HTMLDivElement {
        const header = new HBoxDefault({
            children: [
                new SpanDefault(title)._span
            ]
        });
        header._hBox.classList.add("form-header");
        form.appendChild(header._hBox);
        return header._hBox;
    }

    createFormFooter(form: HTMLDivElement): HTMLDivElement {
        const hbox = new HBoxDefault({
            children: [
                
            ]
        });
        hbox._hBox.classList.add("form-footer");
        form.appendChild(hbox._hBox);
        return hbox._hBox;
    }
}