import { LinkProps } from "../../props/Link/index.js";
export declare class LinkFactory {
    _props: LinkProps;
    constructor(props: LinkProps);
    createLink(): HTMLSpanElement;
}
