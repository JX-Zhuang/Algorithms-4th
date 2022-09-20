var { test, swap } = require('./utils');
var quickSort = function (arr) {
    var partition = function (low, high) {
        var i = low + 1, j = high;
        while (true) {
            while (arr[i] <= arr[low] && i <= j) i++;
            while (arr[j] >= arr[low] && i <= j) j--;
            if (j <= i) break;
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
test(quickSort,100000);