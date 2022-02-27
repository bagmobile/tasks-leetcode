const arr = [1, 1, 2, 3, 3, 3, 5, 23, 123];

function removeDuplicate(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (!result.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    return result;
}

function removeDuplicate1(arr) {

    for (let i = 0; i < arr.length - 1; i += 1) {
        if (arr[i] === arr[i + 1]) {
            arr.splice(i + 1, 1);
            i--;
        }
    }
    return arr;
}


function uniq_fast(a) {
    let seen = {};
    let out = [];
    for (let i = 0; i < a.length; i++) {
        const item = a[i];
        if (seen[item] !== 1) {
            seen[item] = 1;
            out.push(item)
        }
    }
    return out;
}

function remove_duplicates2(arr) {
    let i = 0;
    let result = [arr[0]];
    while (i < arr.length) {
        if (arr[i] < arr[i + 1]) {
            result.push(arr[i + 1]);
        }
        i++
    }
    return result;
}

console.log(remove_duplicates2(arr));
