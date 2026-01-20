import { AppBarFactory } from "../../factory/AppBar/index.js";
export class AppBarBase extends AppBarFactory {
    _appBar;
    constructor(props) {
        super(props);
        this._appBar = super.createHBox();
        this._appBar.classList.add("appBar");
        if (props.id)
            this._appBar.id = props.id;
        document.body.appendChild(this._appBar);
    }
}
