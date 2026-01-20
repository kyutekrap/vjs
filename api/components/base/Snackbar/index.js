import { closeSnackbar } from "../../util/closeSnackbar/index.js";
import { SnackbarFactory } from "../../factory/Snackbar/index.js";
export class SnackbarBase extends SnackbarFactory {
    _snackbar;
    _span;
    _closeBtn;
    constructor(props) {
        super(props);
        this._snackbar = super.createSnackbar();
        this._span = super.createSpan();
        this._snackbar.appendChild(this._span);
        this._closeBtn = super.createCloseBtn();
        this._snackbar.appendChild(this._closeBtn);
        document.body.appendChild(this._snackbar);
    }
    _onClose(e) {
        closeSnackbar();
    }
}
