var { test, swap } = require('./utils');
class MinPQ {
    constructor(param) {
        if (Array.isArray(param)) {
            this.n = param.length;
            this.pq = new Array(this.n + 1);
            for (let i = 0; i < this.n; i++)
                this.pq[i + 1] = param[i];
            for (let i = this.n >> 1; i >= 1; i--)
                this.sink(i);
        }
        if (typeof param === 'number') {
            this.pq = new Array(param + 1);
            this.n = 0;
        }
        this.check();
    }
    check() {
        if (this.isMinHeapOrdered(1)) {
            console.log('Min PQ');
        } else {
            console.log(this.pq);
            throw new Error('Error Min PQ');
        }
    }
    insert(value) {
        this.pq[++this.n] = value;
        this.swim(this.n);
    }
    min() {
        return this.pq[1];
    }
    delMin() {
        const min = this.pq[1];
        this.pq[1] = this.pq[this.n--];
        this.sink(1);
        return min;
    }
    exch(a, b) {
        const temp = this.pq[a];
        this.pq[a] = this.pq[b];
        this.pq[b] = temp;
    }
    swim(key) {
        while (key > 1 && this.less(key, key >> 1)) {
            this.exch(key, key >> 1);
            key >>= 1;
        }
        this.check();
    }
    sink(key) {
        while (key * 2 <= this.n) {
            let j = key * 2;
            if (j < this.n && this.less(j + 1, j)) j++;
            if (!this.less(j, key)) break;
            this.exch(j, key);
            key = j;
        }
    }
    less(i, j) {
        return this.pq[i] < this.pq[j];
    }
    isMinHeapOrdered(key) {
        if (key > this.n) return true;
        const left = key * 2, right = left + 1;
        if (left <= this.n && this.less(left, key)) return false;
        if (right <= this.n && this.less(right, key)) return false;
        return this.isMinHeapOrdered(left) && this.isMinHeapOrdered(right);
    }
    order() {
        const copy = [...this.pq];
        const arr = [], n = this.n;
        while (this.n) {
            arr.push(this.delMin());
        }
        this.pq = copy;
        this.n = n;
        return arr;
    }
}
const minPQ1 = new MinPQ([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
// const minPQ = new MinPQ(10);
[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].forEach(item => minPQ1.insert(item));
test(function (arr) {
    const minPQ = new MinPQ(arr);
    const result = minPQ.order();
    for (let i = 0; i < arr.length; i++) arr[i] = result[i];
});