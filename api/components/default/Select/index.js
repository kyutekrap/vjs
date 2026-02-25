import { SelectBase } from "../../base/Select/index.js";
export class SelectDefault extends SelectBase {
    constructor(props) {
        super(props);
        if (this._props.searchable) {
            this._input.addEventListener("keyup", (e) => {
                this.filterItems(this._optionContainer, e.target.value);
            });
        }
    }
    refreshOptions(options) {
        super._refreshOptions(options);
    }
}
