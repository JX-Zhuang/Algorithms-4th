class Node {
    constructor(key, val, size) {
        this.key = key;
        this.val = val;
        this.size = size;
        this.left = null;
        this.right = null
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    delete(key) {

    }
    get(key) {
        const get = (node) => {
            if (!node) return null;
            const compare = key.localeCompare(node.key);
            if (compare < 0) return get(node.left);
            if (compare > 0) return get(node.right);
            return node.val;
        }
        return get(this.root);
    }
    put(key, val) {
        const put = (node, key, val) => {
            if (!node) return new Node(key, val, 1);
            const compare = key.localeCompare(node.key);
            if (compare < 0) {
                node.left = put(node.left, key, val);
            } else if (compare > 0) {
                node.right = put(node.right, key, val);
            } else {
                node.val = val;
            }
            node.size = 1 + this.size(node.left) + this.size(node.right);
            return node;
        };
        if (!key) {
            console.error('put Error');
            return false;
        }
        this.root = put(this.root, key, val);
        this.check();
    }
    size(node) {
        if (!node) return 0;
        return 1 + this.size(node.left) + this.size(node.right);
    }
    check() {
        if (!this.isBST(this.root, null, null)) {
            console.log('error isBST');
            return false;
        }
    }
    isBST(root, min, max) {
        if (!root) return true;
        if (min !== null && root.key.localeCompare(min) <= 0) return false;
        if (max !== null && root.key.localeCompare(max) >= 0) return false;
        return this.isBST(root.left, min, root.key) && this.isBST(root.right, root.key, max);
    }
    inorder() {
        const result = [];
        const inorder = (root) => {
            if (!root) return null;
            inorder(root.left);
            result.push({
                key: root.key,
                val: root.val,
                size: root.size
            });
            inorder(root.right);
        }
        inorder(this.root);
        console.log(result);
        return result;
    }
}
const test = () => {
    const bst = new BST();
    bst.put('b', '1b');
    bst.put('a', '2a');
    bst.put('d', '3d');
    bst.put('y', '4y');
    bst.put('z', '5z');
    console.log(bst.get('y'));
    console.log(bst.get('d'));
    console.log(bst.get('s'));
};
test();
