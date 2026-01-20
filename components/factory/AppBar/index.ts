import { HBoxDefault } from "../../default/HBox/index.js";
import { AppBarProps } from "../../props/AppBar/index.js";

export class AppBarFactory {

    _props: AppBarProps

    constructor(props: AppBarProps) {
        this._props = props;
    }

    createHBox(): HTMLDivElement {
        const hbox = new HBoxDefault(this._props);
        return hbox._hBox;
    }
}