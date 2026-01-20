import { AppBarProps } from "../../props/AppBar/index.js";
import { AppBarFactory } from "../../factory/AppBar/index.js";

export abstract class AppBarBase extends AppBarFactory {

    _appBar: HTMLDivElement;

    constructor(props: AppBarProps) {
        super(props);
        this._appBar = super.createHBox();
        this._appBar.classList.add("appBar");
        if (props.id) this._appBar.id = props.id;
        document.body.appendChild(this._appBar);
    }
}