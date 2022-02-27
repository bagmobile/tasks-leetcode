const _in = [11, 2, 3, 0, 9, 0, 0, -100, 2, -11];

const sort = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i !== min) {
            [arr[i], arr[min]]  = [arr[min], arr[i]];
        }
    }
    return arr;
}
console.log(sort(_in));
