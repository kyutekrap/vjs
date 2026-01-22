import { SkeletonFactory } from "../../factory/Skeleton/index.js";
import { SkeletonProps } from "../../props/Skeleton/index.js";
export declare class SkeletonBase extends SkeletonFactory {
    _skeleton: HTMLDivElement;
    _lines: HTMLDivElement[];
    constructor(props: SkeletonProps);
}
