import { SelectProps } from "../../props/Select/index.js";
import { SelectFactory } from "../../factory/Select/index.js";
export declare abstract class SelectBase extends SelectFactory {
    _select: HTMLDivElement;
    _input: HTMLInputElement;
    _optionContainer: HTMLDivElement;
    _options: string[];
    constructor(props: SelectProps);
    private _initialize;
    abstract refreshOptions(options: string[]): void;
    _refreshOptions(options: string[]): void;
}
