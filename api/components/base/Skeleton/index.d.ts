import { SkeletonFactory } from "../../factory/index.js";
import { SkeletonProps } from "../../props/index.js";
export declare class SkeletonBase extends SkeletonFactory {
    _skeleton: HTMLDivElement;
    _lines: HTMLDivElement[];
    constructor(props: SkeletonProps);
}
