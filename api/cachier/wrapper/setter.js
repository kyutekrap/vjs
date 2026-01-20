import IndexedDBUtility from "../utils/IndexedDBUtility.js";
export function setter(target, _propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    const cachier = target._cachier;
    switch (cachier) {
        case "session":
            descriptor.value = function (...args) {
                sessionStorage.setItem(target._name, JSON.stringify(args?.[0]));
            };
            break;
        case "local":
            descriptor.value = function (...args) {
                localStorage.setItem(target._name, JSON.stringify(args?.[0]));
            };
            break;
        case "indexedDB":
            descriptor.value = async function (...args) {
                await originalMethod.apply(this, args);
                await IndexedDBUtility.clearStore(target._name);
                await IndexedDBUtility.addData(target._name, args?.[0]);
            };
            break;
        default:
            break;
    }
}
