import { ButtonProps } from "../../props/Button/index.js";
export declare class ButtonFactory {
    _props: ButtonProps;
    constructor(props: ButtonProps);
    createButton(): HTMLButtonElement;
}
