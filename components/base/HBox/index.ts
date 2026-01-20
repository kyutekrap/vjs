import { HBoxProps } from "../../props/HBox/index.js";
import { HBoxFactory } from "../../factory/HBox/index.js";

export abstract class HBoxBase extends HBoxFactory {

    _hBox: HTMLDivElement;

    constructor(props: HBoxProps = { children: [] }) {
        super(props);
        this._hBox = super.createHBox();
    }
}