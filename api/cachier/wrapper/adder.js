import IndexedDBUtility from "../utils/IndexedDBUtility.js";
export function adder(target, _propertyKey, descriptor) {
    const cachier = target._cachier;
    switch (cachier) {
        case "indexedDB":
            descriptor.value = async function (...args) {
                await IndexedDBUtility.addData(target._name, args);
            };
            break;
        default:
            break;
    }
    ;
}
