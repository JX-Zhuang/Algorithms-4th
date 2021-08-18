var { test, swap } = require('./utils');
var partition = function (arr, low, high) {
    var i = low + 1, j = high;
    while (true) {
        while (arr[i] <= arr[low]) {
            i++;
            if (i == high) break;
        }
        while (arr[j] >= arr[low]) {
            j--;
            if (j == low) break;
        }
        if (i >= j) break;
        swap(arr, i, j);
        i++;
        j--;
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
test(quickSort);
// 3 1 6 .....2 3 4 5 8