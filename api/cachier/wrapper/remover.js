import IndexedDBUtility from "../utils/IndexedDBUtility.js";
export function remover(target, _propertyKey, descriptor) {
    const cachier = target._cachier;
    switch (cachier) {
        case "indexedDB":
            descriptor.value = async function (...args) {
                await IndexedDBUtility.deleteItem(target._name, args?.[0]);
            };
            break;
        default:
            break;
    }
}
