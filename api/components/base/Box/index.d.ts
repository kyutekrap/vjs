import { BoxProps } from "../../props/Box/index.js";
import { BoxFactory } from "../../factory/Box/index.js";
export declare abstract class BoxBase extends BoxFactory {
    _box: HTMLDivElement;
    constructor(props: BoxProps);
}
