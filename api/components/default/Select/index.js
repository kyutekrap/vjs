import { SelectBase } from "../../base/Select/index.js";
export class SelectDefault extends SelectBase {
    constructor(props) {
        super(props);
        if (this._props.searchable) {
            this._input.addEventListener("keyup", (e) => {
                this.filterItems(this._optionContainer, e.target.value);
            });
        }
        if (this._props.editable ?? true) {
            this._input.addEventListener("click", (_e) => {
                this.toggleOptionContainer();
            });
        }
    }
    refreshOptions(options) {
        return super._refreshOptions(options);
    }
    filterItems(optionContainer, filterKey) {
        return super._filterItems(optionContainer, filterKey);
    }
    toggleOptionContainer() {
        return super._toggleOptionContainer();
    }
}
