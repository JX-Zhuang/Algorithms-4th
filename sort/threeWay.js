var { test, swap } = require('./utils');
var threeWay = function (arr) {
    var sort = function (low, high) {
        if (high <= low) return;
        var lt = low, gt = high;
        var v = arr[low];
        var i = low;
        while (i <= gt) {
            if (v < arr[i]) swap(arr, i, gt--);
            else if (v > arr[i]) swap(arr, i++, lt++);
            else i++;
        }
        sort(low, lt - 1);
        sort(gt + 1, high);
    };
    sort(0, arr.length - 1);
};
test(threeWay);