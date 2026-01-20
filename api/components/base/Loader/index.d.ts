import { LoaderProps } from "../../props/Loader/index.js";
import { LoaderFactory } from "../../factory/Loader/index.js";
export declare abstract class LoaderBase extends LoaderFactory {
    _loader: HTMLDivElement;
    constructor(props: LoaderProps);
}
