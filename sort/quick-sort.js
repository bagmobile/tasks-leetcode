const _in = [11, 2, 3, 0, 9, 10, 0, -100, 2, -11];

const sort = (arr) => {

    if (arr.length < 2) {
        return arr;
    }

    const pivot = arr.shift();
    const center = [pivot];
    const left = [];
    const right = [];
    while (arr.length) {
        const current = arr.shift();
        if (current === pivot) {
            center.push(current)
        }
        if (current > pivot) {
            right.push(current)
        }
        if (current < pivot) {
            left.push(current)
        }
    }

    return [...sort(left), ...center, ...sort(right)];
}
console.log(sort(_in));
