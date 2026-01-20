import { LoaderProps } from "../../props/Loader/index.js";
export declare class LoaderFactory {
    _props: LoaderProps;
    constructor(props: LoaderProps);
    createLoader(): HTMLDivElement;
}
