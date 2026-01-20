import IndexedDBUtility from "./IndexedDBUtility.js";
export async function connectIndexedDB(config) {
    const db = new IndexedDBUtility(config);
    await db.connect();
}
