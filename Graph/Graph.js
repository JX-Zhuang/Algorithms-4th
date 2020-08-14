class Graph {
    // 顶点数
    _V
    //边数
    _E
    _adj
    constructor(v) {
        this._V = v;
        this._E = 0;
        this._adj = [];
        for (var i = 0; i < v; i++) {
            this._adj[i] = [];
        }
    }
    init(arr) {
        for (const item of arr) {
            const [v, w] = item;
            this.addEdge(v, w);
        }
    }
    V() {
        return this._V;
    }
    E() {
        return this._E;
    }
    //向图中添加一条边 v-w
    addEdge(v, w) {
        this._adj[v].unshift(w);
        this._adj[w].unshift(v);
        this._E++;
    }
    //和v相邻的所有顶点
    adj(v) {
        return this._adj[v];
    }
    //对象的字符串表示
    toString() {
        var s = `${this._V} vertices, ${this._E} edges\n`;
        for (var v = 0; v < this._V; v++) {
            s += `${v}: `;
            for (var w of this._adj[v]) {
                s += `${w} `;
            }
            s += '\n';
        }
        return s;
    }
}
var g = new Graph(13);
var arr = [[0, 5], [4, 3], [0, 1], [9, 12], [6, 4], [5, 4], [0, 2], [11, 12], [9, 10], [0, 6], [7, 8], [9, 11], [5, 3]];
g.init(arr);
// console.log(g.toString())
class DepthFirstSearch{
    _marked = [];
    _count = 0;
    constructor(g,s){
        this.dfs(g,s);
    }
    dfs(g,v){
        this._marked[v] = true;
        this._count++;
        for(const i of g.adj(v)){
            if(!this._marked[i]) this.dfs(g,i);
        }
    }
    marked(w){
        return this._marked[w];
    }
    count(){
        return this._count;
    }
}
var depthFirstSearch = new DepthFirstSearch(g,12);
// console.log(depthFirstSearch.count());
class DepthFirstPaths{
    marked = [];
    edgeTo = [];
    s;
    constructor(g,s){
        this.s = s;
        this.dfs(g,s);
    }
    dfs(g,v){
        console.log(g.adj(v))
        this.marked[v] = true;
        for(var w of g.adj(v)){
            if(!this.marked[w]){
                this.edgeTo[w] = v;
                this.dfs(g,w);
            }
        }
    }
    hasPathTo(v){
        return this.marked[v];
    }
    pathTo(v){
        if(!this.hasPathTo(v)) return null;
        var path = [];
        console.log(this.edgeTo)
        for(var x = v;x!=this.s;x = this.edgeTo[x]){
            path.unshift(x);
        }
        path.unshift(this.s);
        return path;
    }
}
var g1 = new Graph(6);
var arr = [[0, 5], [2, 4], [2, 3], [1, 2], [0, 1], [3, 4], [3, 5], [0, 2]];
g1.init(arr);
var dfpaths = new DepthFirstPaths(g1,0);
console.log(dfpaths.pathTo(4));