import { BoxFactory } from "../../factory/Box/index.js";
export class BoxBase extends BoxFactory {
    _box;
    constructor(props) {
        super(props);
        this._box = super.createBox();
    }
}
