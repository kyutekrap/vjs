export declare class PubSub<T> {
    value: T;
    subscribers: Array<(value: T) => void>;
    constructor(initial: T);
    parameter(value?: T): T;
    publish(value: T): void;
    subscribe(fx: (value: T) => void): void;
}
