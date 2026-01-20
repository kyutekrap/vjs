import { HBoxBase } from "../../base/HBox/index.js";
import { HBoxProps } from "../../props/HBox/index.js";

export class HBoxDefault extends HBoxBase {
    constructor(props: HBoxProps = { children: [] }) {
        super(props);
    }
}