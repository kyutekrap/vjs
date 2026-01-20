import { AppBarProps } from "../../props/AppBar/index.js";
import { AppBarFactory } from "../../factory/AppBar/index.js";
export declare abstract class AppBarBase extends AppBarFactory {
    _appBar: HTMLDivElement;
    constructor(props: AppBarProps);
}
