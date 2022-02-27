const arr1 = [0, 1, 0];
const arr2 = [0, 2, 1, 0];
const arr3 = [0, 10, 5, 2];
const arr4 = [0, 1, 2, 3, 5, 16, 10, 11, 5, 4, 3, 2];

const peakIndexInMountainArray = function (arr) {

    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let currentIndex = Math.floor((end + start) / 2);

        if (arr[currentIndex] > arr[currentIndex + 1]) {
            end = currentIndex;
        } else {
            start = currentIndex + 1;
        }
    }
    return start;

};

console.log(peakIndexInMountainArray(arr4))
