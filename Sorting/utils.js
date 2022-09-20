var check = (arr) => {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) return false;
    }
    return true;
}
var random = () => {
    return Math.floor(Math.random() * 100 + 2);
}
var genArr = (l = 100) => {
    var arr = new Array(l);
    for (var i = 0; i < l; i++) {
        arr[i] = random();
    }
    return arr;
}
var test = (sort,l = 100) => {
    const arr = genArr(l);
    console.time('sort');
    sort(arr);
    console.timeEnd('sort');
    const result = check(arr);
    console.log(result);
}
var swap = (arr, i, j) => {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
// test((arr) => {
//     return arr.sort((a, b) => a - b);
// });
module.exports = {
    test,
    swap
}