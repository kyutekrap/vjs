import IndexedDBUtility from "../utils/IndexedDBUtility.js";
import { CachierType } from "../types/index.js";

export function getter(target: any, _propertyKey: string, descriptor: PropertyDescriptor): void {
    const originalMethod = descriptor.value;
    const cachier: CachierType = target._cachier;
    switch(cachier) {
        case "session":
            descriptor.value = function (...args: any[]) {
                let result = originalMethod.apply(this, args);
                if (!result) {
                    result = sessionStorage.getItem(target._name);
                    if (result) result = JSON.parse(result);
                }
                return result;
            }
            break;

        case "local":
            descriptor.value = function (...args: any[]) {
                let result = originalMethod.apply(this, args);
                if (!result) {
                    result = localStorage.getItem(target._name);
                    if (result) result = JSON.parse(result);
                }
                return result;
            }
            break;

        case "indexedDB":
            descriptor.value = async function (...args: any[]) {
                let result = await originalMethod.apply(this, args);
                if (!result) {
                    result = IndexedDBUtility.getAll(target._name).then(response => response);
                }
                return result;
            }
            break;
        default:
            descriptor.value = function (...args: any[]) {
                let result = originalMethod.apply(this, args);
                return result;
            }
            break;
    }
}