var { test, swap } = require('./utils');
var quickSort = function (arr) {
    var partition = function (low, high) {
        var i = low, j = high + 1;
        while (true) {
            while (arr[++i] < arr[low] && i <= high);
            while (arr[--j] > arr[low] && j >= low);
            if (i >= j) break;
            swap(arr, i, j);
        }
        swap(arr, low, j);
        return j;
    };
    var sort = function (low, high) {
        if (low >= high) return;
        var i = partition(low, high);
        sort(low, i - 1);
        sort(i + 1, high);
    };
    sort(0, arr.length - 1);
};
test(quickSort);