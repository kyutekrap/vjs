import { VBoxProps } from "../../props/VBox/index.js";
import { VBoxFactory } from "../../factory/VBox/index.js";
export declare abstract class VBoxBase extends VBoxFactory {
    _vBox: HTMLDivElement;
    constructor(props?: VBoxProps);
}
