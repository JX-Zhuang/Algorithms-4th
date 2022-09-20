var { test, swap } = require('./utils');
var threeWay = function (arr) {
    var sort = function (low, high) {
        if (high <= low) return;
        var lt = low, gt = high;
        var i = low;
        var v = arr[low];
        while (i <= gt) {
            if (arr[i] > v) swap(arr, i, gt--);
            else if (arr[i] < v) swap(arr, i++, lt++);
            else i++;
        }
        sort(low, lt - 1);
        sort(gt + 1, high);
    };
    sort(0, arr.length - 1);
};
test(threeWay,10000000);