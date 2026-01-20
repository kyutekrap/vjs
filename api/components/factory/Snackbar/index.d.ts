import { SnackbarProps } from "../../props/Snackbar/index.js";
export declare class SnackbarFactory {
    _props: SnackbarProps;
    constructor(props: SnackbarProps);
    createSnackbar(): HTMLDivElement;
    createSpan(): HTMLSpanElement;
    createCloseBtn(): HTMLDivElement;
}
