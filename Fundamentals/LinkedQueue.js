const assert = require('assert');
class Node {
    constructor(item) {
        this.next = null;
        this.item = item;
    }
}
class LinkedQueue {
    constructor() {
        this.first = null;
        this.last = null;
        this.n = 0;
    }
    isEmpty() {
        return this.first === null;
    }
    size() {
        return this.n;
    }
    peek() {
        return this.first.item;
    }
    enqueue(item) {
        const oldLast = this.last;
        this.last = new Node(item);
        if (this.isEmpty()) {
            this.first = this.last;
        } else {
            oldLast.last = this.last;
        }
        this.n++;
    }
    dequeue() {
        if (this.isEmpty()) return;
        const item = this.first.item;
        this.first = this.first.next;
        this.n--;
        if (this.isEmpty()) this.last = null;
        return item;
    }
}