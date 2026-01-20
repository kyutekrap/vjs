import { SnackbarProps } from "../../props/Snackbar/index.js";
import { SnackbarFactory } from "../../factory/Snackbar/index.js";
export declare abstract class SnackbarBase extends SnackbarFactory {
    _snackbar: HTMLDivElement;
    _span: HTMLSpanElement;
    _closeBtn: HTMLDivElement;
    constructor(props: SnackbarProps);
    abstract onClose(e: any): void;
    _onClose(e: any): void;
}
