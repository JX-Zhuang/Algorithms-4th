var { test } = require('./utils');
var sortArray = function (nums) {
    quickSort(nums, 0, nums.length - 1);
    return nums;
};
var quickSort = function (nums, start, end) {
    if (start >= end) return;
    var index = partition(nums, start, end);
    quickSort(nums, start, index - 1);
    quickSort(nums, index + 1, end);
};
var partition = function (nums, start, end) {
    var value = nums[start], index = start;
    for (var i = start + 1; i <= end; i++) {
        var item = nums[i];
        if (item < value) {
            swap(nums, i, ++index);
        }
    }
    swap(nums, index, start);
    return index;
};
var swap = function (nums, a, b) {
    var temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
};
// test(sortArray,1000000);
var insertion = function(nums){
    var l = nums.length;
    for(var i = 1;i<l;i++){
        var v = nums[i];
        for(var j = i;j>0 && v<nums[j-1];j--){
            nums[j] = nums[j-1];
        }
        nums[j] = v;
    }
    return nums;
}
test(insertion,1000000);