class SeparateChainingHashST {
    constructor(m) {
        this.m = m;
        this.st = new Array(m);
        for (var i = 0; i < m; i++) {
            this.st[i] = {};
        }
    }
    hash(key) {
        return String(key).length % this.m;
    }
    get(key) {
        return this.st[this.hash(key)][key];
    }
    put(key, val) {
        this.st[this.hash(key)][key] = val;
    }
    delete(key){
        delete this.st[this.hash(key)][key];
    }
}
var st = new SeparateChainingHashST(100);
st.put('name','zjx');
st.put('age',12);
st.put('1234','4321');
console.log(st.get('name'),st.get('age'),st.get('1234'));
st.delete('1234')
console.log(st.get('name'),st.get('age'),st.get('1234'));
class LinearProbingHashST{
    keys = [];
    vals = [];
    M = 16;
    N;
    constructor(){
        this.keys = new Array(this.M);
        this.vals = new Array(this.M);
    }
}