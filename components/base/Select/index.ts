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
        this._initialize(props);
    }

    private _initialize(props: SelectProps) {
        this._input = super.createInput();
        this._select.appendChild(this._input);
        this._optionContainer = super.createOptionContainer(this._input);
        this._select.appendChild(this._optionContainer);
    }

    abstract refreshOptions(options: string[]): void;

    _refreshOptions(options: string[]): void {
        const optionElements = options.map(option => super.createOption(option, this._input));
        this._optionContainer.replaceChildren(...optionElements);
        if (!options.includes(this._input.value)) this._input.value = "";
        this._options = options;
    }
}