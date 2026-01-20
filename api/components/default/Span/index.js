import { SpanBase } from "../../base/Span/index.js";
export class SpanDefault extends SpanBase {
    constructor(text = "", props = { fontWeight: "normal" }) {
        super(text, props);
    }
}
