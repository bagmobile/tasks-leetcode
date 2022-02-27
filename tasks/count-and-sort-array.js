const arr = ['vv', 'r', 'tt', 'tt', '0', 3, 4, 7, 'tt', 'vv', 4, -1];

function sort(arr) {
    const result = {};
    for (let i = 0; i < arr.length; i++) {
        if (!result[arr[i]]) {
            result[arr[i]] = 1;
        } else {
            result[arr[i]]++;
        }
    }

    return Object.entries(result).sort((a, b) => {
        return b[1] - a[1]
    }).map(([key]) => key);
}

console.log(sort(arr))
