import IndexedDBUtility from "../utils/IndexedDBUtility.js";
import { CachierType } from "../types/index.js";

export function collector(target: any, _propertyKey: string, descriptor: PropertyDescriptor): void {
    const cachier: CachierType = target._cachier;
    switch (cachier) {
        case "session":
            descriptor.value = function (...args: any[]) {
                sessionStorage.removeItem(target._name);
            }
            break;
        case "local":
            descriptor.value = function (...args: any[]) {
                localStorage.removeItem(target._name);
            }
            break;
        case "indexedDB":
            descriptor.value = async function (...args: any[]) {
                await IndexedDBUtility.clearStore(target._name);
            }
            break;
        default:
            break;
    };
}