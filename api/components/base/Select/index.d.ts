import { SelectProps } from "../../props/Select/index.js";
import { SelectFactory } from "../../factory/Select/index.js";
export declare abstract class SelectBase extends SelectFactory {
    _select: HTMLDivElement;
    _input: HTMLInputElement;
    _optionContainer: HTMLDivElement;
    _options: string[];
    constructor(props: SelectProps);
    abstract refreshOptions(options: string[]): void;
    abstract filterItems(optionContainer: HTMLDivElement, filterKey: string): void;
    abstract toggleOptionContainer(): void;
    _refreshOptions(options: string[]): void;
    _filterItems(optionContainer: HTMLDivElement, filterKey: string): void;
    _toggleOptionContainer(): void;
}
