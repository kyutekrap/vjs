import { BackgroundDefault } from "../../default/Background/index.js";
export class BgButtonFactory {
    _props;
    constructor(props) {
        this._props = props;
    }
    createBgButton() {
        const bgButton = document.createElement("div");
        bgButton.classList.add("bgButton");
        if (this._props.rounded) {
            bgButton.classList.add("rounded");
        }
        bgButton.style.width = this._props.width;
        bgButton.style.height = this._props.height;
        if (this._props.id)
            bgButton.id = this._props.id;
        return bgButton;
    }
    createBackground() {
        return new BackgroundDefault({
            width: this._props.width,
            height: this._props.height,
            src: this._props.src,
            badge: this._props.badge
        });
    }
}
