import { SelectProps } from "../../props/Select/index.js";
export declare class SelectFactory {
    _props: SelectProps;
    constructor(props: SelectProps);
    createSelect(): HTMLDivElement;
    createInput(): HTMLInputElement;
    createOptionContainer(input: HTMLInputElement): HTMLDivElement;
    createOption(text: string, input: HTMLInputElement): HTMLDivElement;
    filterItems(optionContainer: HTMLDivElement, filterKey: string): void;
}
