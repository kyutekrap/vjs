import { VBoxBase } from "../../base/VBox/index.js";
import { VBoxProps } from "../../props/VBox/index.js";

export class VBoxDefault extends VBoxBase {
    constructor(props: VBoxProps = { children: [] }) {
        super(props);
    }
}