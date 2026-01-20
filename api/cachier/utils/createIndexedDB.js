import IndexedDBUtility from "./IndexedDBUtility.js";
export async function createIndexedDB(config) {
    const db = new IndexedDBUtility(config);
    await db.create();
}
;
