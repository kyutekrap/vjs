import { SpanBase } from "../../base/Span/index.js";
import { SpanProps } from "../../props/Span/index.js";

export class SpanDefault extends SpanBase {
    constructor(text = "", props: SpanProps = { fontWeight: "normal" }) {
        super(text, props);
    }
}