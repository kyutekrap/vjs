import { SnackbarBase } from "../../base/Snackbar/index.js";
import { SnackbarProps } from "../../props/Snackbar/index.js";

export class SnackbarDefault extends SnackbarBase {
    constructor(props: SnackbarProps) {
        super(props);
        this._closeBtn.addEventListener("click", (e) => this.onClose(e));
    }

    onClose(e: any) {
        super._onClose(e);
    }
}