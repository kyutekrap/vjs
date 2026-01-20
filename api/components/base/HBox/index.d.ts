import { HBoxProps } from "../../props/HBox/index.js";
import { HBoxFactory } from "../../factory/HBox/index.js";
export declare abstract class HBoxBase extends HBoxFactory {
    _hBox: HTMLDivElement;
    constructor(props?: HBoxProps);
}
