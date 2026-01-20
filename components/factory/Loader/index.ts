import { LoaderProps } from "../../props/Loader/index.js";

export class LoaderFactory {

    _props: LoaderProps;

    constructor(props: LoaderProps) {
        this._props = props;
    }

    createLoader(): HTMLDivElement {
        const loader = document.createElement("div");
        loader.classList.add("loader");
        if (this._props.id) loader.id = this._props.id;
        return loader;
    }
}