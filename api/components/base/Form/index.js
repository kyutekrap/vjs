import { FormFactory } from "../../factory/Form/index.js";
export class FormBase extends FormFactory {
    _formContainer;
    _form;
    _formHeader;
    _formFooter;
    constructor(props) {
        super(props);
        this._formContainer = super.createFormContainer();
        if (props.title) {
            this._formHeader = super.createFormHeader(props.title, this._formContainer);
        }
        this._form = super.createForm(this._formContainer);
        if (props.showFooter) {
            this._formFooter = super.createFormFooter(this._formContainer);
        }
    }
    _onSubmit(e) {
        return;
    }
}
