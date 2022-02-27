const _in = [11, 21, 3, 0, 95, 0, 0, -100, 2, -11, 7, 8];

const sort = (arr) => {

    if (arr.length < 2) {
        return arr;
    }

    const [left, right] = [arr.splice(0, Math.floor(arr.length / 2)), arr];

    const leftSorted = sort(left);
    const rightSorted = sort(right);

    return mergeSorted(leftSorted, rightSorted);
}

const mergeSorted = (left, right) => {

    const arr = [];
    while (left.length && right.length) {
        if (left[0] > right[0]) {
            arr.push(right.shift())
        } else {
            arr.push(left.shift())
        }
    }
    return [...arr, ...left, ...right];
}


console.log(sort(_in));
