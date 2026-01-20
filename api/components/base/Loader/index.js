import { LoaderFactory } from "../../factory/Loader/index.js";
export class LoaderBase extends LoaderFactory {
    _loader;
    constructor(props) {
        super(props);
        this._loader = super.createLoader();
        document.body.appendChild(this._loader);
    }
}
