import { extendObservable } from 'mobx';

class Counter {
    constructor() {
        extendObservable(this, {
            count: 0,
        });
    }

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }
}

export default Counter;
