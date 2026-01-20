import { HTMLBase } from "../base.js";

export interface BackgroundProps extends HTMLBase {
    width: string;
    height: string;
    src: string;
    badge?: string;
}