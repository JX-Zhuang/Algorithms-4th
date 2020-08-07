class Node {
    left = null;
    right = null;
    constructor(key, val, N, color) {
        this.key = key;
        this.val = val;
        this.N = N;
        this.color = color;
    }
}
class RedBlackTree {
    root = null;
    RED = true;
    BLACK = false;
    isRed(node) {
        if (!node) return false;
        return node.color === this.RED;
    }
    rotateLeft(node) {
        var x = node.right;
        node.right = x.left;
        x.left = node;
        x.color = node.color;
        node.color = this.RED;
        x.N = node.N;
        node.size = 1 + this.size(node.left) + this.size(node.right);
        return x;
    }
    rotateRight(node) {
        var x = node.left;
        node.left = x.right;
        x.right = node;
        node.color = this.RED;
        x.N = node.N;
        node.N = 1 + this.size(node.left) + this.size(node.right);
        return x;
    }
    filpColor(node) {
        node.color = !node.color;
        node.left.color = !node.left.color;
        node.right.color = !node.right.color;
    }
    size() {
        return this._size(this.root);
    }
    _size(node) {
        if (node) return node.N;
        return null;
    }
    put(key, val) {
        this.root = this._put(node, key, val);
        this.root = this.BLACK;
    }
    _put(node, key, val) {
        if (!node) {
            return new Node(key, val, 1, this.RED);
        }
        var cmp = key.localeCompare(node.key);
        if (cmp < 0) return this._put(node.left, key, val);
        else if (cmp > 0) return this._put(node.right, key, val);
        else node.key = val;
        if (this.isRed(node.right) && !this.isRed(node.left)) node = this.rotateLeft(node);
        if (this.isRed(node.left) && this.isRed(node.left.left)) node = this.rotateRight(node);
        if (this.isRed(node.left) && this.isRed(node.right)) this.filpColor(node);
        node.N = this._size(node.left) + this._size(node.right) + 1;
        return node;
    }
    isEmpty() {
        return this.size() == 0;
    }
    moveRedLeft(h) {
        this.filpColor(h);
        if (this.isRed(h.right.left)) {
            h.right = this.rotateRight(h.right);
            h = this.rotateLeft(h);
            this.filpColor(h); //
        }
        return h;
    }
    deleteMin() {
        if (!this.isRed(this.root.left) && !this.isRed(this.root.right)) {
            this.root.color = this.RED;
        }
        this.root = this._deleteMin(this.root);
        if (!this.isEmpty()) this.root = this.BLACK;
    }
    _deleteMin(h) {
        if (!h.left) return null;
        if (!this.isRed(h.left) && !this.isRed(h.left.left)) {
            this.moveRedLeft(h);
        }
        h.left = this._deleteMin(h.left);
        return this.balance(h);
    }
    balance(h) {
        if (this.isRed(h.right)) h = this.rotateLeft(h);
        if (this.isRed(node.right) && !this.isRed(node.left)) node = this.rotateLeft(node);
        if (this.isRed(node.left) && this.isRed(node.left.left)) node = this.rotateRight(node);
        if (this.isRed(node.left) && this.isRed(node.right)) this.filpColor(node);
        node.N = this._size(node.left) + this._size(node.right) + 1;
        return node;
    }
}