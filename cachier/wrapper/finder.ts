import IndexedDBUtility from "../utils/IndexedDBUtility.js";
import { CachierType } from "../types/index.js";

export function finder(target: any, _propertyKey: string, descriptor: PropertyDescriptor): void {
    const originalMethod = descriptor.value;
    const cachier: CachierType = target._cachier;
    switch(cachier) {
        case "session":
            descriptor.value = function (...args: any[]) {
                let result = originalMethod.apply(this, args);
                if (!result) {
                    result = sessionStorage.getItem(target._name);
                    if (result) {
                        result = JSON.parse(result);
                        result = args.reduce((accumulator: { [x: string]: any; }, key: string | number) => {
                            return accumulator && accumulator[key];
                        }, result);
                    }
                }
                return result;
            }
            break;
        case "local":
            descriptor.value = function (...args: any[]) {
                let result = originalMethod.apply(this, args);
                if (!result) {
                    result = localStorage.getItem(target._name);
                    if (result) {
                        result = JSON.parse(result);
                        result = args.reduce((accumulator: { [x: string]: any; }, key: string | number) => {
                            return accumulator && accumulator[key];
                        }, result);
                    }
                }
                return result;
            }
            break;
        case "indexedDB":
            descriptor.value = async function (...args: any[]) {
                let result = await originalMethod.apply(this, args);
                if (!result) {
                    result = IndexedDBUtility.get(target._name, args?.[0] ?? "").then(response => {
                        if (response) return response;
                    });
                }
                return result;
            }
            break;
        default:
            break;
    }
}