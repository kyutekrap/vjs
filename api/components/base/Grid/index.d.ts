import { GridProps } from "../../props/Grid/index.js";
import { GridFactory } from "../../factory/Grid/index.js";
export declare abstract class GridBase extends GridFactory {
    _grid: HTMLDivElement;
    constructor(props: GridProps);
}
