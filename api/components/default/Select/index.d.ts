import { SelectBase } from "../../base/Select/index.js";
import { SelectProps } from "../../props/Select/index.js";
export declare class SelectDefault extends SelectBase {
    constructor(props: SelectProps);
    refreshOptions(options: string[]): void;
}
