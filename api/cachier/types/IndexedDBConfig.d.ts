import { StoreConfig } from "./StoreConfig.js";
export interface IndexedDBConfig {
    dbName: string;
    stores?: StoreConfig[];
    onError?: (error: string, context?: string) => void;
}
