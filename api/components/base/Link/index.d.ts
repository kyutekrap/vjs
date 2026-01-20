import { LinkProps } from "../../props/Link/index.js";
import { LinkFactory } from "../../factory/Link/index.js";
export declare abstract class LinkBase extends LinkFactory {
    _link: HTMLSpanElement;
    _href: string | null;
    constructor(props: LinkProps);
    abstract onClick(e: any): void;
    _onClick(e: any): void;
}
