var { test, swap } = require('./utils');
class MaxPQ {
    constructor(param) {
        if (Array.isArray(param)) {
            this.n = param.length;
            this.pq = new Array(this.n + 1);
            for (let i = 0; i < this.n; i++) {
                this.pq[i + 1] = param[i];
            }
            for (let i = this.n >> 1; i >= 1; i--) {
                this.sink(i);
            }
        }
        if (typeof param === 'number') {
            this.pq = new Array(param + 1);
            this.n = 0;
        }
        if (this.isMaxHeapOrdered(1)) {
            console.log('Max PQ');
        } else {
            console.log(this.pq);
            throw new Error('Max PQ');
        }
    }
    insert(value) {
        this.pq[++this.n] = value;
        this.swim(this.n);
    }
    max() {
        return this.pq[1];
    }
    delMax() {
        const max = this.pq[1];
        this.exch(1, this.n--);
        delete this.pq[this.n + 1];
        this.sink(1);
        return max;
    }
    isEmpty() {
        return this.n === 0;
    }
    size() {
        return this.n;
    }
    sink(k) {
        while (2 * k <= this.n) {
            let j = 2 * k;
            if (j < this.n && this.less(j, j + 1)) j++;
            if (!this.less(k, j)) break;
            this.exch(k, j);
            k = j;
        }
    }
    swim(k) {
        while (k > 1 && this.less(k >> 1, k)) {
            this.exch(k >> 1, k);
            k >>= 1;
        }
    }
    less(a, b) {
        return this.pq[a] < this.pq[b];
    }
    exch(a, b) {
        const temp = this.pq[a];
        this.pq[a] = this.pq[b];
        this.pq[b] = temp;
    }
    isMaxHeapOrdered(k) {
        if (k > this.n) return true;
        const left = k * 2, right = left + 1;
        if (left <= this.n && this.less(k, left)) return false;
        if (right <= this.n && this.less(k, right)) return false;
        return this.isMaxHeapOrdered(left) && this.isMaxHeapOrdered(right);
    }
    order() {
        const copy = [...this.pq];
        const arr = [];
        while (this.n) {
            arr.push(this.delMax());
        }
        this.pq = copy;
        return arr;
    }
}
const maxPQ = new MaxPQ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
test(function (arr) {
    const maxPQ = new MaxPQ(arr);
    const result = maxPQ.order();
    for (let i = arr.length - 1; i >= 0; i--) arr[arr.length - 1 - i] = result[i];
});