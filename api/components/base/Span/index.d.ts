import { SpanProps } from "../../props/Span/index.js";
export declare abstract class SpanBase {
    _span: HTMLSpanElement;
    constructor(text?: string, props?: SpanProps);
}
