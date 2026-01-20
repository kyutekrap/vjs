import { SelectBase } from "../../base/Select/index.js";
import { SelectProps } from "../../props/Select/index.js";

export class SelectDefault extends SelectBase {
    
    constructor(props: SelectProps) {
        super(props);
    }

    refreshOptions(options: string[]): void {
        super._refreshOptions(options);
    }
}