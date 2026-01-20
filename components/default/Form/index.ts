import { FormBase } from "../../base/Form/index.js";
import { FormProps } from "../../props/Form/index.js";

export class FormDefault extends FormBase {
    constructor(props: FormProps) {
        super(props);
        this._form.addEventListener("submit", (e) => this.onSubmit(e));
    }

    onSubmit(e: any) {
        super._onSubmit(e);
    }
}