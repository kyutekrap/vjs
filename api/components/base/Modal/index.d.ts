import { ModalProps } from "../../props/Modal/index.js";
import { ModalFactory } from "../../factory/Modal/index.js";
export declare abstract class ModalBase extends ModalFactory {
    _modal: HTMLDivElement;
    _container: HTMLDivElement;
    _closeBtn: HTMLDivElement | undefined;
    _content: HTMLDivElement;
    constructor(props?: ModalProps);
    abstract onClose(e: any): void;
    _onClose(e: any): void;
}
