var { test, swap } = require('./utils');
var middle = function (left, right) {
    return (left + right) >> 1;
}
var merge = function (tempArr, arr, left, mid, right) {
    for (var i = left; i <= right; i++) tempArr[i] = arr[i];
    var low = left, high = mid + 1;
    for (var i = left; i <= right; i++) {
        if (low > mid || high > right) arr[i] = tempArr[i];
        else if (arr[low] > arr[high]) arr[i] = arr[high++];
        else arr[i] = arr[low++];
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
    sort(0, arr.length);
    return arr;
};
test(mergeSort);