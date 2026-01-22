import { SkeletonProps } from "../../props/Skeleton/index.js";
export declare class SkeletonFactory {
    _props: SkeletonProps;
    constructor(props: SkeletonProps);
    createContainer(): HTMLDivElement;
    createLine(): HTMLDivElement;
}
