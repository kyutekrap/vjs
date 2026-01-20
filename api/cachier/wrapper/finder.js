import IndexedDBUtility from "../utils/IndexedDBUtility.js";
export function finder(target, _propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    const cachier = target._cachier;
    switch (cachier) {
        case "session":
            descriptor.value = function (...args) {
                let result = originalMethod.apply(this, args);
                if (!result) {
                    result = sessionStorage.getItem(target._name);
                    if (result) {
                        result = JSON.parse(result);
                        result = args.reduce((accumulator, key) => {
                            return accumulator && accumulator[key];
                        }, result);
                    }
                }
                return result;
            };
            break;
        case "local":
            descriptor.value = function (...args) {
                let result = originalMethod.apply(this, args);
                if (!result) {
                    result = localStorage.getItem(target._name);
                    if (result) {
                        result = JSON.parse(result);
                        result = args.reduce((accumulator, key) => {
                            return accumulator && accumulator[key];
                        }, result);
                    }
                }
                return result;
            };
            break;
        case "indexedDB":
            descriptor.value = async function (...args) {
                let result = await originalMethod.apply(this, args);
                if (!result) {
                    result = IndexedDBUtility.get(target._name, args?.[0] ?? "").then(response => {
                        if (response)
                            return response;
                    });
                }
                return result;
            };
            break;
        default:
            break;
    }
}
