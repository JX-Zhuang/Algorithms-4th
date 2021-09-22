const assert = require('assert');
class Node {
    constructor(item) {
        this.next = null;
        this.item = item;
    }
}
class LinkedStack {
    constructor() {
        this.first = null;
        this.n = 0;
    }
    push(item) {
        const oldFirst = this.first;
        this.first = new Node(item);
        this.first.next = oldFirst;
        this.n++;
        assert(this.check());
    }
    pop() {
        const result = this.first;
        this.first = this.first.next;
        this.n--;
        result.next = null;
        assert(this.check());
        return result.item;
    }
    isEmpty() {
        return this.n === 0;
    }
    size() {
        return this.n;
    }
    check() {
        const first = this.first, n = this.n;
        if (n < 0) {
            return false;
        }
        if (n == 0) {
            if (first != null) return false;
        }
        else if (n == 1) {
            if (first == null) return false;
            if (first.next != null) return false;
        }
        else {
            if (first == null) return false;
            if (first.next == null) return false;
        }
        let numberOfNodes = 0;
        for (let x = first; x != null && numberOfNodes <= n; x = x.next) {
            numberOfNodes++;
        }
        if (numberOfNodes != n) return false;

        return true;
    }
}
const stack = new LinkedStack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop());
stack.push(4)
console.log(stack.first);