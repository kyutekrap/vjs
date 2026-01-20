import { IndexedDBConfig } from "../types/IndexedDBConfig.js";
declare class IndexedDBUtility {
    config: IndexedDBConfig;
    static db: IDBDatabase;
    static onError: (error: string, context?: string) => void;
    constructor(config: IndexedDBConfig);
    create(): Promise<void>;
    connect(): Promise<void>;
    private static reportError;
    static addData(store: string, data: any[]): Promise<void>;
    static getAll(store: string): Promise<any[]>;
    static get(store: string, key: string | number): Promise<any>;
    static getLast(store: string): Promise<any>;
    static clearStore(store: string): Promise<void>;
    static deleteItem(store: string, key: string | number): Promise<any>;
}
export default IndexedDBUtility;
