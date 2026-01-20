import { BackgroundProps } from "../../props/Background/index.js";
import { SmallDefault } from "../../default/Small/index.js";

export class BackgroundFactory {

    _props: BackgroundProps;

    constructor(props: BackgroundProps) {
        this._props = props;
    }

    createBackground(): HTMLDivElement {
        const background = document.createElement("div");
        background.classList.add("background");
        background.style.width = this._props.width;
        background.style.height = this._props.height;
        background.style.backgroundImage = `url(${this._props.src})`;
        if (this._props.id) background.id = this._props.id;
        return background;
    }

    createBadge(): HTMLDivElement | undefined {
        const badgeContainer = document.createElement("div");
        const badgeContent = new SmallDefault(this._props.badge);
        badgeContainer.appendChild(badgeContent._small);
        badgeContainer.classList.add("badge");
        return badgeContainer;
    }
}