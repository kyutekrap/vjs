import { LoaderProps } from "../../props/Loader/index.js";
import { LoaderFactory } from "../../factory/Loader/index.js";

export abstract class LoaderBase extends LoaderFactory {

    _loader: HTMLDivElement;

    constructor(props: LoaderProps) {
        super(props);
        this._loader = super.createLoader();
        document.body.appendChild(this._loader);
    }
}