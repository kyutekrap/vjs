export class SkeletonFactory {
    _props;
    constructor(props) {
        this._props = props;
    }
    createContainer() {
        const container = document.createElement('div');
        container.className = 'skeleton';
        if (this._props.id)
            container.id = this._props.id;
        return container;
    }
    createLine() {
        const line = document.createElement('div');
        line.className = 'line';
        return line;
    }
}
