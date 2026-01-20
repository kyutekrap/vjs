import { SmallDefault } from "../../default/Small/index.js";
import { SpanDefault } from "../../default/Span/index.js";
import { LinkProps } from "../../props/Link/index.js";

export class LinkFactory {

    _props: LinkProps;

    constructor(props: LinkProps) {
        this._props = props;
    }

    createLink(): HTMLSpanElement {
        var link;
        if (this._props.size === "medium") {
            link = new SpanDefault(this._props.text);
            link._span.classList.add("link");
            link._span.classList.add(this._props.variant);
            if (this._props.id) link._span.id = this._props.id;
            return link._span;
        } else {
            link = new SmallDefault(this._props.text);
            link._small.classList.add("link");
            link._small.classList.add(this._props.variant);
            if (this._props.id) link._small.id = this._props.id;
            return link._small;
        }
    }
}