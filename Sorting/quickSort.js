var { test, swap } = require('./utils');
var partition = function (arr, low, high) {
    var i = low, j = high + 1;
    while (true) {
        while (arr[++i] <= arr[low] && i !== high);
        while (arr[--j] >= arr[low] && j !== low);
        if (i >= j) break;
        swap(arr, i, j);
    }
    swap(arr, low, j);
    return j;
}
var quickSort = function (arr) {
    var sort = function (arr, low, high) {
        if (high <= low) return;
        var i = partition(arr, low, high);
        sort(arr, low, i - 1);
        sort(arr, i + 1, high);
    };
    sort(arr, 0, arr.length - 1);
    return arr;
};
test(quickSort,100000);