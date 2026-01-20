import { CachierType } from "../types/index.js";
import IndexedDBUtility from "../utils/IndexedDBUtility.js";

export function adder(target: any, _propertyKey: string, descriptor: PropertyDescriptor): void {
    const cachier: CachierType = target._cachier;
    switch (cachier) {
        case "indexedDB":
            descriptor.value = async function (...args: any[]) {
                await IndexedDBUtility.addData(target._name, args);
            }
            break;
        default:
            break;
    };
}