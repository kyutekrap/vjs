import { FormBase } from "../../base/Form/index.js";
export class FormDefault extends FormBase {
    constructor(props) {
        super(props);
        this._form.addEventListener("submit", (e) => this.onSubmit(e));
    }
    onSubmit(e) {
        super._onSubmit(e);
    }
}
