export interface List<T> {
    destroyList();
    clearList();
    listEmpty(): boolean;
    listLength(): number;
    getElem(i: number): T | null;
    locateElem(e: T): number;
    priorElem(current: T): T;
    nextElem(current: T): T;
    listInsert(i: number, e: T);
    listDelete(i: number): T;
    traverseList();
};
export interface LNode<T> {
    data: T;
    next: LNode<T>;
}