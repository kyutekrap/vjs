import { FormProps } from "../../props/Form/index.js";
export declare class FormFactory {
    _props: FormProps;
    constructor(props: FormProps);
    createFormContainer(): HTMLDivElement;
    createForm(container: HTMLDivElement): HTMLFormElement;
    createFormHeader(title: string, form: HTMLDivElement): HTMLDivElement;
    createFormFooter(form: HTMLDivElement): HTMLDivElement;
}
