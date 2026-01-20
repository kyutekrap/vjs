import { BgButtonProps } from "../../props/BgButton/index.js";
import { ModalProps } from "../../props/Modal/index.js";
export declare class ModalFactory {
    _props: ModalProps;
    constructor(props: ModalProps);
    createModal(): HTMLDivElement;
    createContainer(): HTMLDivElement;
    createCloseBtn(closeBgButton: BgButtonProps, container: HTMLDivElement): HTMLDivElement;
    createContent(): HTMLDivElement;
}
