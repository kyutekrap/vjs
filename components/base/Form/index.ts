import { FormProps } from "../../props/Form/index.js";
import { FormFactory } from "../../factory/Form/index.js";

export abstract class FormBase extends FormFactory {

    _formContainer: HTMLDivElement;
    _form: HTMLFormElement;
    _formHeader: HTMLDivElement | undefined;
    _formFooter: HTMLDivElement | undefined;

    constructor(props: FormProps) {
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

    abstract onSubmit(e: any): void;

    _onSubmit(e: any) {
        return;
    }
}