import { LinkProps } from "../../props/Link/index.js";
import { LinkFactory } from "../../factory/Link/index.js";

export abstract class LinkBase extends LinkFactory {

    _link: HTMLSpanElement;
    _href: string | null;

    constructor(props: LinkProps) {
        super(props);
        this._link = super.createLink();
        this._href = props.href ?? null;
    }

    abstract onClick(e: any): void;

    _onClick(e: any) {
        if (this._href) window.location.href = this._href;

        return;
    }
}