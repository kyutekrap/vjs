import { IndexedDBConfig } from "../types/IndexedDBConfig.js";

class IndexedDBUtility {

    config: IndexedDBConfig;
    static db: IDBDatabase;
    static onError: (error: string, context?: string) => void;

    constructor(config: IndexedDBConfig) {
        this.config = config;
        IndexedDBUtility.onError = config.onError;
    }

    async create(): Promise<void> {
        return new Promise((resolve, reject) => {
            const deleteRequest = indexedDB.deleteDatabase(this.config.dbName);

            deleteRequest.onerror = (event) => {
                IndexedDBUtility.reportError(event, 'Error deleting IndexedDB.');
                reject(event);
            };

            deleteRequest.onblocked = () => {
                console.warn(
                    `Close other tabs using this database.`
                );
            };

            deleteRequest.onsuccess = () => {
                const openRequest = indexedDB.open(this.config.dbName);

                openRequest.onupgradeneeded = () => {
                    const db = openRequest.result;
                    const stores = this.config?.stores || [];

                    stores.forEach((storeConfig) => {
                        const store = db.createObjectStore(storeConfig.name, {
                            keyPath: storeConfig.keyPath,
                            autoIncrement: storeConfig.autoIncrement || false
                        });

                        storeConfig.indices?.forEach((index) => {
                            store.createIndex(index.name, index.keyPath, {
                                unique: index.unique || false
                            });
                        });
                    });
                };

                openRequest.onsuccess = () => {
                    resolve();
                };

                openRequest.onerror = (event) => {
                    const error = (event.target as IDBOpenDBRequest).error;
                    IndexedDBUtility.reportError(error, 'Error creating IndexedDB.');
                    reject(error);
                };
            };
        });
    }

    async connect(): Promise<void> {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.config.dbName);

            request.onsuccess = (event) => {
                const dbRequest = event.target as IDBOpenDBRequest;
                IndexedDBUtility.db = dbRequest.result;
                resolve();
            };

            request.onerror = (event) => {
                const error = (event.target as IDBOpenDBRequest).error;
                IndexedDBUtility.reportError(error, 'Error opening IndexedDB.');
                reject(error);
            };
        });
    }

    private static reportError(error: any, context?: string) {
        try {
            if (IndexedDBUtility.onError) IndexedDBUtility.onError(error, context);
            else console.error(error + " " + context);
        } catch (e) {
            console.error('Error reporting error', e);
        }
    }

    static async addData(store: string, data: any[]): Promise<void> {
        return new Promise((resolve, reject) => {
            const transaction = IndexedDBUtility.db.transaction(store, "readwrite");
            const objectStore = transaction.objectStore(store);

            data.forEach((value: any) => {
                const request = objectStore.put(value);
                request.onerror = (event) => {
                    IndexedDBUtility.reportError(event, 'Error adding data to IndexedDB.');
                    reject(event);
                };
            });

            transaction.oncomplete = () => {
                resolve();
            };

            transaction.onerror = (event) => {
                IndexedDBUtility.reportError(event, 'Transaction failed in IndexedDB.');
                reject(event);
            };
        });
    }

    static async getAll(store: string): Promise<any[]> {
        return new Promise((resolve, reject) => {
            const transaction = IndexedDBUtility.db.transaction(store, "readonly");
            const objectStore = transaction.objectStore(store);
            const request = objectStore.getAll();

            request.onsuccess = () => {
                resolve(request.result);
            };

            request.onerror = (event) => {
                IndexedDBUtility.reportError(event, 'Error retrieving data from IndexedDB.');
                reject(event);
            };
        });
    }

    static async get(store: string, key: string | number): Promise<any> {
        return new Promise((resolve, reject) => {
            const transaction = IndexedDBUtility.db.transaction(store, "readonly");
            const objectStore = transaction.objectStore(store);
            const request = objectStore.get(key);

            request.onsuccess = () => {
                if (request.result) {
                    resolve(request.result);
                } else {
                    resolve(null);
                }
            };

            request.onerror = (event) => {
                IndexedDBUtility.reportError(event, 'Error retrieving data by key.');
                reject(event);
            };
        });
    }

    static async getLast(store: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const transaction = IndexedDBUtility.db.transaction(store, "readonly");
            const objectStore = transaction.objectStore(store);
            const request = objectStore.openCursor(null, 'prev');

            request.onsuccess = (event: Event) => {
                const cursor = (event.target as IDBRequest).result as IDBCursorWithValue;
                
                if (cursor) {
                    resolve(cursor.value);
                } else {
                    resolve(null);
                }
            };

            request.onerror = (event) => {
                IndexedDBUtility.reportError(event, `Error reading last entry from ${store} in IndexedDB.`);
                reject(event);
            };
        });
    }

    static async clearStore(store: string): Promise<void> {
        return new Promise((resolve, reject) => {
            const transaction = IndexedDBUtility.db.transaction(store, "readwrite");
            const objectStore = transaction.objectStore(store);
            const request = objectStore.clear();

            request.onsuccess = () => {
                resolve();
            };

            request.onerror = (event) => {
                IndexedDBUtility.reportError(event, `Error clearing ${store} in IndexedDB.`);
                reject(event);
            };
        });
    }

    static async deleteItem(store: string, key: string | number): Promise<any> {
        return new Promise((resolve, reject) => {
            const transaction = IndexedDBUtility.db.transaction(store, "readwrite");
            const objectStore = transaction.objectStore(store);
            const request = objectStore.delete(key);

            request.onsuccess = () => {
                if (request.result) {
                    resolve(request.result);
                } else {
                    resolve(null);
                }
            };

            request.onerror = (event) => {
                IndexedDBUtility.reportError(event, 'Error deleting item by key.');
                reject(event);
            };
        });
    }
}

export default IndexedDBUtility;