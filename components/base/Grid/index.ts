import { GridProps } from "../../props/Grid/index.js";
import { GridFactory } from "../../factory/Grid/index.js";

export abstract class GridBase extends GridFactory {

    _grid: HTMLDivElement;

    constructor(props: GridProps) {
        super(props);
        this._grid = super.createGrid();
    }
}