import { SelectBase } from "../../base/Select/index.js";
export class SelectDefault extends SelectBase {
    constructor(props) {
        super(props);
    }
    refreshOptions(options) {
        super._refreshOptions(options);
    }
}
