const _in = [11, 21, 3, 0, 95, 0, 0, -100, 2, -11];

const sort = (arr) => {

    for (let i = 1; i < arr.length; i ++) {
        let currentIndex = i
        while (arr[currentIndex - 1] > arr[currentIndex]) {
            const temp = arr[currentIndex - 1];
            arr[currentIndex - 1] = arr[currentIndex];
            arr[currentIndex] = temp;
            currentIndex--;
        }
    }

    return arr;
}
console.log(sort(_in));
