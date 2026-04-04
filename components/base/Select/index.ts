import { SelectProps } from "../../props/Select/index.js";
import { SelectFactory } from "../../factory/Select/index.js";

export abstract class SelectBase extends SelectFactory {

    _select: HTMLDivElement;
    _input!: HTMLInputElement;
    _optionContainer!: HTMLDivElement;
    _options: string[];

    constructor(props: SelectProps) {
        super(props);
        this._select = super.createSelect();
        this._options = props.options;
        this._input = super.createInput();
        this._select.appendChild(this._input);
        this._optionContainer = super.createOptionContainer(this._input);
        this._select.appendChild(this._optionContainer);
    }

    abstract refreshOptions(options: string[]): void;
    abstract filterItems(optionContainer: HTMLDivElement, filterKey: string): void;
    abstract toggleOptionContainer(): void;

    _refreshOptions(options: string[]): void {
        const optionElements = options.map(option => super.createOption(option, this._input));
        this._optionContainer.replaceChildren(...optionElements);
        if (!options.includes(this._input.value)) this._input.value = "";
        this._options = options;
    }

    _filterItems(optionContainer: HTMLDivElement, filterKey: string): void {
        Array.from(optionContainer.children).forEach((child) => {
            if ((child.children[0] as HTMLSpanElement).textContent.toLowerCase().startsWith(filterKey.toLowerCase()))
                child.classList.remove("filter");
            else
                child.classList.add("filter");
        });
    }

    _toggleOptionContainer(): void {
        if (this._optionContainer.classList.contains("open")) {
            this._optionContainer.classList.remove("open");
            if (this._props.searchable && !this._props.options.includes(this._input.value)) {
                this._input.value = "";
            }
        } else {
            this._optionContainer.classList.add("open");
        }
    }
}