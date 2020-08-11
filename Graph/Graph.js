class Graph{
    // 顶点数
    _V
    //边数
    _E
    _adj
    constructor(v){
        this._V = v;
        this._E = 0;
        this._adj = [];
        for(var i = 0;i<v;i++){
            this._adj[i] = [];
        }
    }
    V(){
        return this._V;
    }
    E(){
        return this._E;
    }
    //向图中添加一条边 v-w
    addEdge(v,w){
        this._adj[v].push(w);
        this._adj[w].push(v);
        this._E++;
    }
    //和v相邻的所有顶点
    adj(v){
        return this._adj[v];
    }
    //对象的字符串表示
    toString(){
        var s = `${this._V} vertices, ${this._E} edges\n`;
        for(var v = 0;v<this._V;v++){
            s+=`${v}: `;
            for(var w of this._adj[v]){
                s+=`${w} `;
            }
            s+='\n';
        }
        return s;
    }
}
var g = new Graph(3);