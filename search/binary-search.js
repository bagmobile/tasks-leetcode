const _in = [-1, 2, 2, 3, 3, 5, 6, 7, 10, 130];

const search = (arr, value) => {

    let startIndex = 0;
    let endIndex = arr.length - 1;

    while (startIndex <= endIndex) {
        let middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

        if (value === arr[middleIndex]) {
            return middleIndex
        }

        if (value > arr[middleIndex]) {
            startIndex = middleIndex + 1;
        } else {
            endIndex = middleIndex - 1;
        }

    }
    return null;
}
console.log(search(_in, 55));
