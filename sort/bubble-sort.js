const _in = [11, 2, 3, 0, 9, 0, 0, -100, 2, -11];

const sort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let swapped = false;
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                swapped = true;
            }
        }
        if (!swapped) {
            return arr;
        }
    }
    return arr;
}
console.log(sort(_in));
