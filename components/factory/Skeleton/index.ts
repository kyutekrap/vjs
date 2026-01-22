import { SkeletonProps } from "../../props/Skeleton/index.js";

export class SkeletonFactory {

    _props: SkeletonProps;

    constructor(props: SkeletonProps) {
        this._props = props;
    }

    createContainer(): HTMLDivElement {
        const container = document.createElement('div');
        container.className = 'skeleton';
        if (this._props.id) container.id = this._props.id;
        return container;
    }

    createLine(): HTMLDivElement {
        const line = document.createElement('div');
        line.className = 'line';
        return line;
    }
}