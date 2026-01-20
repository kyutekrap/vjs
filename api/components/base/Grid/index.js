import { GridFactory } from "../../factory/Grid/index.js";
export class GridBase extends GridFactory {
    _grid;
    constructor(props) {
        super(props);
        this._grid = super.createGrid();
    }
}
