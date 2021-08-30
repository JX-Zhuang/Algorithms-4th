const binarySearch = function (arr, key) {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (arr[mid] < key) low = mid + 1;
        else if (arr[mid] > key) high = mid - 1;
        else return mid;
    }
    return -1;
};