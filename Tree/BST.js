class Node {
    constructor(key, val, N) {
        this.val = val;
        this.key = key;
        this.N = N;
        this.left = this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    size(node) {
        if (node === null) return 0;
        return node.N;
    }
    get(key) {
        var get = (node, key) => {
            if (node === null) return null;
            var cmp = key.localeCompare(node.key);
            if (cmp < 0) return get(node.left, key);
            else if (cmp > 0) return get(node.right, key);
            return node.val;
        };
        return get(this.root, key);
    }
    put(key, val) {
        var put = (node, key, val) => {
            if (node === null) return new Node(key, val, 1);
            var cmp = key.localeCompare(node.key);
            if (cmp < 0) node.left = put(node.left, key, val);
            else if (cmp > 0) node.right = put(node.right, key, val);
            else node.val = val;
            node.N = this.size(node.left) + this.size(node.right) + 1;
            return node;
        };
        this.root = put(this.root, key, val);
    }
    min() {
        return this._min(this.root).key;
    }

    _min(node) {
        if (node.left === null) return node;
        return this._min(node.left);
    }
    floor(key) {
        var floor = (node, key) => {
            if (node === null) return null;
            var cmp = key.localeCompare(node.key);
            if (cmp === 0) return node;
            if (cmp < 0) return floor(node.left, key);
            var result = floor(node.right, key);
            return result ? result : node;
        };
        var node = floor(this.root, key);
        if (!node) return null;
        return node.key;
    }
    ceil(key) {
        var ceil = (node, key) => {
            if (node === null) return null;
            var cmp = key.localeCompare(node.key);
            if (cmp === 0) return node;
            if (cmp > 0) return ceil(node.right, key);
            var result = ceil(node.left, key);
            return result ? result : node;
        }
        var node = ceil(this.root, key);
        if (!node) return null;
        return node.key;
    }
    max() {
        var max = (node) => {
            if (node.right === null) return node;
            return max(node.right);
        }
        return max(this.root).key;
    }
    select(k) {
        var select = (node, k) => {
            if (node === null) return null;
            var size = this.size(node.left);
            if (size > k) return select(node.left, k);
            else if (size < k) return select(node.right, k - size - 1);
            return node;
        }
        return select(this.root, k).key;
    }
    rank(key) {
        var rank = (node, key) => {
            if (!node) return 0;
            var cmp = key.localeCompare(node.key);
            if (cmp == 0) return this.size(node.left);
            if (cmp < 0) return rank(node.left, key);
            return 1 + this.size(node.left) + rank(node.right, key);
        }
        return rank(this.root, key);
    }
    deleteMin() {

        this.root = this._deleteMin(this.root);
    }
    _deleteMin = (node) => {
        if (!node.left) return node.right;
        node.left = this._deleteMin(node.left);
        node.N = this.size(node.left) + this.size(node.right) + 1;
        return node;
    };
    deleteMax() {
        var deleteMax = (node) => {
            if (!node.right) return node.left;
            node.right = deleteMax(node.right);
            node.N = this.size(node.left) + this.size(node.right) + 1;
            return node;
        }
        this.root = deleteMax(this.root);
    }
    delete(key) {
        var remove = (node, key) => {
            if (!node) return null;
            var cmp = key.localeCompare(node.key);
            if (cmp < 0) node.left = remove(node.left, key);
            else if (cmp > 0) node.right = remove(node.right, key);
            else {
                if (!node.left) return node.right;
                if (!node.right) return node.left;
                var t = node;
                node = this._min(t.right);
                node.right = this._deleteMin(t.right);
                node.left = t.left;
            }
            node.N = this.size(node.left) + this.size(node.right) + 1;
            return node;
        }
        this.root = remove(this.root, key);
    }
    keys() {
        var keys = (node, queue, low, high) => {
            if (!node) return null;
            var cmplow = low.localeCompare(node.key);
            var cmphigh = high.localeCompare(node.key);
            if (cmplow < 0) keys(node.left, queue, low, high);
            if (cmplow <= 0 && cmphigh >= 0) queue.push(node.key);
            if (cmphigh > 0) keys(node.right, queue, low, high);
        }
        var queue = [];
        keys(this.root, queue, this.min(), this.max());
        return queue;
    }
}
var testGet = () => {
    var n1 = new Node('a', 'a');
    var n2 = new Node('b', 'b');
    var n3 = new Node('c', 'c');
    var bst = new BST();
    bst.root = n2;
    n2.left = n1;
    n2.right = n3;
    console.log(bst.get('a'), bst.get('b'), bst.get('c'), bst.get('d'));
}
var testPut = () => {
    var bst = new BST();
    bst.put('x', 'x');
    bst.put('z', 'z');
    bst.put('b', 'b');
    bst.put('e', 'e');
    console.log(bst);
    // bst.delete('x');
    console.log(bst.keys());
    // console.log(bst.floor('f'));
    // console.log(bst.ceil('f'));
}
// testPut();
class Node1 {
    constructor(key, val, next) {
        this.key = key;
        this.val = val;
        this.next = next;
    }
}
class SequentialSearchST {
    constructor() {
        this.first = null;
    }
    get(key) {
        for (var node = this.first; node != null; node = node.next) {
            if (node.key === key) {
                return node.val;
            }
        }
        return null;
    }
    put(key, val) {
        for (var node = this.first; node != null; node = node.next) {
            if (node.key === key) {
                node.val = val;
                return;
            }
        }
        this.first = new Node1(key, val, this.first);
    }
}
var testSequentialSearchST = function () {
    var st = new SequentialSearchST();
    st.put('b', 'b');
    st.put('a', 'a');
    st.put('c', 'c');
    st.put('d', 'd');
    console.log(st)
};
// testSequentialSearchST();
class BinarySearchST {
    constructor() {
        this.keys = [];
        this.vals = [];
        this.N = 0;
    }
    size() {
        return this.N;
    }
    isEmpty(){
        return this.N === 0;
    }
    get(key) {
        if(this.isEmpty()) return null;
        var index = this.rank(key);
        if(index<this.N&&this.keys[index].localeCompare(key) === 0) return this.vals[index];
        return null;
    }
    put(key,val){
        var index = this.rank(key);
        if(index<this.N&&this.keys[index].localeCompare(key)===0){
            this.vals[index] = val;
            return;
        }
        for(var j = this.N;j>index;j--){
            this.vals[j] = this.vals[j-1];
            this.keys[j] = this.keys[j-1];
        }
        this.vals[index] = val;
        this.keys[index] = key; 
        this.N++;
    }
    rank(key) {
        var lo = 0, hi = this.N - 1;
        while (lo <= hi) {
            var mid = Math.floor((hi - lo) / 2) + lo;
            var cmp = key.localeCompare(this.keys[mid]);
            if (cmp < 0) hi = mid - 1;
            else if (cmp > 0) lo = mid + 1;
            else return mid;
        }
        return lo;
    }
}
var testBinarySearchST = function(){
    var st = new BinarySearchST();
    st.put('b', 'b');
    st.put('c', 'c');
    st.put('a', 'a');
    st.put('d', 'd');
    console.log(st);
};
testBinarySearchST();