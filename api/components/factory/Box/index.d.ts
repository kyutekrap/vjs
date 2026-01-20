import { BoxProps } from "../../props/Box/index.js";
export declare class BoxFactory {
    _props: BoxProps;
    constructor(props: BoxProps);
    createBox(): HTMLDivElement;
}
