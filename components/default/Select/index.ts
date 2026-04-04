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

        if (this._props.editable ?? true) {
            this._input.addEventListener("click", (_e) => {
                this.toggleOptionContainer();
            });
        }
    }

    refreshOptions(options: string[]): void {
        return super._refreshOptions(options);
    }

    filterItems(optionContainer: HTMLDivElement, filterKey: string): void {
        return super._filterItems(optionContainer, filterKey);
    }

    toggleOptionContainer(): void {
        return super._toggleOptionContainer();
    }
}