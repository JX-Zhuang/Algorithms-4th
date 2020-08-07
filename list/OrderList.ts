import { List } from './interface';
class OrderList<T> implements List<T>{
    private MAX_SIZE: number = 0;
    private length: number = 0;
    private list: Array<T>;
    constructor(size: number) {
        const errorMsg = '顺序表的长度必须大于0';
        if (size <= 0) throw new Error(errorMsg);
        this.list = new Array(size);
        this.MAX_SIZE = size;
    }
    destroyList() {

    }
    clearList() {

    }
    listEmpty() {
        return this.length === 0;
    }
    listLength() {
        return this.length;
    }
    getElem(i: number): T {
        if (i < 1 || i > this.length) return null;
        return this.list[i - 1];
    }
    locateElem(e: T) {
        for (let i = 0; i < this.length; i++) {
            if (e === this.list[i])
                return i + 1;
        }
        return 0;
    }
    priorElem(current: any): T {
        return;
    }
    nextElem(current: any): T {
        return;
    }
    listInsert(i: number, e: T) {
        const errorMsg = '插入位置不合法';
        if (i < 1 || i > this.length + 1) throw new Error(errorMsg);
        const fullMsg = '存储空间已满，不能插入';
        if (this.length === this.MAX_SIZE) throw new Error(fullMsg);
        for (let j = this.length; j > i; j--) {
            this.list[j] = this.list[j - 1];
        }
        this.list[i - 1] = e;
        this.length++;
    }
    listDelete(i: number): T {
        const errorMsg = '删除的位置不合法';
        if (i < 1 || i > this.length) throw new Error(errorMsg);
        const element = this.list[i - 1];
        for (let j = i - 1; j < this.length; j++) {
            this.list[j] = this.list[j + 1];
        }
        this.length--;
        return element;
    }
    traverseList() {

    }
}
export default OrderList;