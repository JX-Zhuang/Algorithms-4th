var { test, swap } = require('./utils');
var middle = function (left, right) {
    return (left + right) >> 1;
}
var merge = function (tempArr, arr, left, mid, right) {
    for (var i = left; i <= right; i++) tempArr[i] = arr[i];
    var low = left, high = mid + 1;
    for (var i = left; i <= right; i++) {
        if (low > mid) arr[i] = tempArr[high++];
        else if (high > right) arr[i] = tempArr[low++];
        else if (tempArr[low] <= tempArr[high]) arr[i] = tempArr[low++];
        else arr[i] = tempArr[high++];
    }
}
var mergeSort = function (arr) {
    var tempArr = new Array(arr.length);
    var sort = function (left, right) {
        if (left >= right) return;
        const mid = middle(left, right);
        sort(left, mid);
        sort(mid + 1, right);
        merge(tempArr, arr, left, mid, right);
    }
    sort(0, arr.length - 1);
    return arr;
};
console.log(mergeSort([1, 3, 5, 7, 0, 4, 6, 8]));
test(mergeSort);