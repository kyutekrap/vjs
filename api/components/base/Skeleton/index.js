import { SkeletonFactory } from "../../factory/Skeleton/index.js";
export class SkeletonBase extends SkeletonFactory {
    _skeleton;
    _lines;
    constructor(props) {
        super(props);
        this._skeleton = super.createContainer();
        for (let i = 0; i < (props.lines || 1); i++) {
            const line = super.createLine();
            this._lines.push(line);
            this._skeleton.appendChild(line);
        }
        ;
    }
}
