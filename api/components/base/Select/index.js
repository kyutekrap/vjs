import { SelectFactory } from "../../factory/Select/index.js";
export class SelectBase extends SelectFactory {
    _select;
    _input;
    _optionContainer;
    _options;
    constructor(props) {
        super(props);
        this._select = super.createSelect();
        this._options = props.options;
        this._initialize(props);
    }
    _initialize(props) {
        this._input = super.createInput();
        this._select.appendChild(this._input);
        this._optionContainer = super.createOptionContainer(this._input);
        this._select.appendChild(this._optionContainer);
    }
    _refreshOptions(options) {
        const optionElements = options.map(option => super.createOption(option, this._input));
        this._optionContainer.replaceChildren(...optionElements);
        if (!options.includes(this._input.value))
            this._input.value = "";
        this._options = options;
    }
}
