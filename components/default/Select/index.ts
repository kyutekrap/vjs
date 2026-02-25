import { SelectBase } from "../../base/Select/index.js";
import { SelectProps } from "../../props/Select/index.js";

export class SelectDefault extends SelectBase {
    
    constructor(props: SelectProps) {
        super(props);

        if (this._props.searchable) {
            this._input.addEventListener("keyup", (e) => {
                this.filterItems(this._optionContainer, (e.target as HTMLInputElement).value);
            });
        }
    }

    refreshOptions(options: string[]): void {
        super._refreshOptions(options);
    }
}