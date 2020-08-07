import { List, LNode } from './interface';
class ListNode<T> implements LNode<T>{
    public data;
    public next = null;
    constructor(data: T = null) {
        this.data = data;
    }
}
class LinkList<T> implements List<T>{
    private list: ListNode<T>;
    constructor() {
        this.list = new ListNode<T>();
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
        let current = this.list.next;
        let j = 1;
        while (current && j < i) {
            current = current.next;
            j++;
        }
        if (!current || j > i) throw new Error('取值位置不合法');
        return current.data;
    }
    locateElem(e: T) {
        let current = this.list.next;
        while (current && current.data !== e)
            current = current.next;
        return current;
    }
    priorElem(current: any): T {
        return;
    }
    nextElem(current: any): T {
        return;
    }
    listInsert(i: number, e: T) {
        const errorMsg = '插入位置不合法';
        let j = 0 , current = this.list;
        while (current&&j<i-1){
            current = current.next;
            j++;
        }
        if (!current||j>i-1) throw new Error(errorMsg);
        const node = new ListNode<T>(e);
        node.next = current.next;
        current.next = node;
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