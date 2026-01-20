import { SnackbarBase } from "../../base/Snackbar/index.js";
export class SnackbarDefault extends SnackbarBase {
    constructor(props) {
        super(props);
        this._closeBtn.addEventListener("click", (e) => this.onClose(e));
    }
    onClose(e) {
        super._onClose(e);
    }
}
