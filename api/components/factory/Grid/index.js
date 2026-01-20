export class GridFactory {
    _props;
    constructor(props) {
        this._props = props;
    }
    createGrid() {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        for (var i = 0; i < this._props.children.length; i++) {
            grid.appendChild(this._props.children[i]);
        }
        grid.style.setProperty('--grid-columns', this._props.columns.toString());
        if (this._props.id)
            grid.id = this._props.id;
        return grid;
    }
}
