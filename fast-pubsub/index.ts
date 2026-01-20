export class PubSub<T> {
    value: T;
    subscribers: Array<(value: T) => void>;

    constructor(initial: T) {
        this.value = initial;
        this.subscribers = [];
    }

    parameter(value: T = this.value) {
        this.value = value;
        return this.value;
    }

    publish(value: T) {
        this.parameter(value);
        this.subscribers.forEach(sub => sub(value));
    }

    subscribe(fx: (value: T) => void) {
        this.subscribers.push(fx);
    }
}
