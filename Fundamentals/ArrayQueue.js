class ArrayQueue {
    constructor() {
        this.queue = [];
        this.n = 0;
        this.first = 0;
        this.last = 0;
    }
    resize(capacity) {
        const copy = new Array(capacity);
        for (let i = 0; i < this.n; i++) {
            copy[i] = this.queue[(this.first + i) % this.queue.length];
        }
        this.queue = copy;
        this.first = 0;
        this.last = this.n;
    }
    enqueue(value) {
        this.queue[this.last++] = value;
        if (this.last === this.queue.length) this.last = 0;
        this.n++;
    }
    dequeue() {
        if (this.isEmpty()) return;
        const item = this.queue[this.first];
        this.queue[this.first++] = null;
        this.n--;
        if (this.first === this.queue.length) this.first = 0;
        if (n > 0 && n === this.queue.length >> 2) this.resize(q.length >> 1);
        return item;
    }
    isEmpty() {
        return this.n === 0;
    }
    size() {
        return this.n;
    }
}