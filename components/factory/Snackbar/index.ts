import { SnackbarProps } from "../../props/Snackbar/index.js";
import { HBoxDefault } from "../../default/HBox/index.js";
import { SpanDefault } from "../../default/Span/index.js";
import { BgButtonDefault } from "../../default/BgButton/index.js";

export class SnackbarFactory {

    _props: SnackbarProps;

    constructor(props: SnackbarProps) {
        this._props = props;
    }

    createSnackbar(): HTMLDivElement {
        const snackbar = new HBoxDefault();
        snackbar._hBox.classList.add("snackbar");
        if (this._props.id) snackbar._hBox.id = this._props.id;
        return snackbar._hBox;
    }

    createSpan(): HTMLSpanElement {
        const span = new SpanDefault();
        span._span.style.flex = "1";
        return span._span;
    }

    createCloseBtn(): HTMLDivElement {
        const closeButton = new BgButtonDefault(this._props.closeBgButton);
        return closeButton._bgButton;
    }
}