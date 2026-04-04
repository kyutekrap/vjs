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
    _filterItems(optionContainer, filterKey) {
        Array.from(optionContainer.children).forEach((child) => {
            if (child.children[0].textContent.toLowerCase().startsWith(filterKey.toLowerCase()))
                child.classList.remove("filter");
            else
                child.classList.add("filter");
        });
    }
    _toggleOptionContainer() {
        if (this._optionContainer.classList.contains("open")) {
            this._optionContainer.classList.remove("open");
            if (this._props.searchable && !this._props.options.includes(this._input.value)) {
                this._input.value = "";
            }
        }
        else {
            this._optionContainer.classList.add("open");
        }
    }
}
