import { HBoxDefault } from "../../default/HBox/index.js";
export class AppBarFactory {
    _props;
    constructor(props) {
        this._props = props;
    }
    createHBox() {
        const hbox = new HBoxDefault(this._props);
        return hbox._hBox;
    }
}
