import { VBoxProps } from "../../props/VBox/index.js";
import { VBoxFactory } from "../../factory/VBox/index.js";

export abstract class VBoxBase extends VBoxFactory {

    _vBox: HTMLDivElement;

    constructor(props: VBoxProps = { children: [] }) {
        super(props);
        this._vBox = super.createVBox();
    }
}