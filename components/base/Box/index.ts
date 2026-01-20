import { BoxProps } from "../../props/Box/index.js";
import { BoxFactory } from "../../factory/Box/index.js";

export abstract class BoxBase extends BoxFactory {

    _box: HTMLDivElement;
    
    constructor(props: BoxProps) {
        super(props);
        this._box = super.createBox();
    }
}