import { IndexedDBConfig } from "../types/IndexedDBConfig.js";
import IndexedDBUtility from "./IndexedDBUtility.js";

export async function connectIndexedDB(config: IndexedDBConfig): Promise<void> {
    const db = new IndexedDBUtility(config);
    await db.connect();
}