import IndexedDBUtility from "../utils/IndexedDBUtility.js";
export function collector(target, _propertyKey, descriptor) {
    const cachier = target._cachier;
    switch (cachier) {
        case "session":
            descriptor.value = function (...args) {
                sessionStorage.removeItem(target._name);
            };
            break;
        case "local":
            descriptor.value = function (...args) {
                localStorage.removeItem(target._name);
            };
            break;
        case "indexedDB":
            descriptor.value = async function (...args) {
                await IndexedDBUtility.clearStore(target._name);
            };
            break;
        default:
            break;
    }
    ;
}
