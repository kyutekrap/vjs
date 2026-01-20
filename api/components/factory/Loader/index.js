export class LoaderFactory {
    _props;
    constructor(props) {
        this._props = props;
    }
    createLoader() {
        const loader = document.createElement("div");
        loader.classList.add("loader");
        if (this._props.id)
            loader.id = this._props.id;
        return loader;
    }
}
