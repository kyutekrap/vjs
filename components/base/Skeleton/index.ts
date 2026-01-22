import { SkeletonFactory } from "../../factory/Skeleton/index.js";
import { SkeletonProps } from "../../props/Skeleton/index.js";

export class SkeletonBase extends SkeletonFactory {

    _skeleton: HTMLDivElement;
    _lines: HTMLDivElement[] = [];

    constructor(props: SkeletonProps) {
        super(props);
        this._skeleton = super.createContainer();

        for (let i = 0; i < (props.lines || 1); i++) {
            const line = super.createLine();
            this._lines.push(line);
            this._skeleton.appendChild(line);
        };
    }
}