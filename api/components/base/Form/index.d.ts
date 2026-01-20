import { FormProps } from "../../props/Form/index.js";
import { FormFactory } from "../../factory/Form/index.js";
export declare abstract class FormBase extends FormFactory {
    _formContainer: HTMLDivElement;
    _form: HTMLFormElement;
    _formHeader: HTMLDivElement | undefined;
    _formFooter: HTMLDivElement | undefined;
    constructor(props: FormProps);
    abstract onSubmit(e: any): void;
    _onSubmit(e: any): void;
}
