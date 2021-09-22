class ArrayStack {
    constructor() {
        this.stack = [];
        this.n = 0;
    }
    push(value) {
        this.stack[this.n++] = value;
    }
    pop() {
        const result = this.stack[--this.n];
        this.stack[this.n] = null;
        return result;
    }
    isEmpty() {
        return this.n === 0;
    }
    size() {
        return this.n;
    }
}
const stack = new ArrayStack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop());
stack.push(4)
console.log(stack.stack);