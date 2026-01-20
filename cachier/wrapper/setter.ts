import IndexedDBUtility from "../utils/IndexedDBUtility.js";
import { CachierType } from "../types/index.js";

export function setter(target: any, _propertyKey: string, descriptor: PropertyDescriptor): void {
    const originalMethod = descriptor.value;
    const cachier: CachierType = target._cachier;
    switch (cachier) {
        case "session":
            descriptor.value = function (...args: any[]) {
                sessionStorage.setItem(target._name, JSON.stringify(args?.[0]));
            }
            break;
        case "local":
            descriptor.value = function (...args: any[]) {
                localStorage.setItem(target._name, JSON.stringify(args?.[0]));
            }
            break;
        case "indexedDB":
            descriptor.value = async function (...args: any[]) {
                await originalMethod.apply(this, args);
                await IndexedDBUtility.clearStore(target._name);
                await IndexedDBUtility.addData(target._name, args?.[0]);
            }
            break;
        default:
            break;
    }
}