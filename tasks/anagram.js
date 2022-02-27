const a = 'q1qqqwuy'
const b = 'wqyuqqq1'

const isAnagram = (a1, b1) => {
    const arr = [...b1];
    for (let i = 0; i < a1.length; i++) {
        const j = arr.indexOf(a[i]);
        if (j>=0){
            arr.splice(j,1)
        } else {
            return false
        }
    }

    return !arr.length
}

const isAnagram1 = (a1, b1) => {
    const o = {};
    if (a1.length !== b1.length){
        return false
    }
    for (let i = 0; i < a1.length; i++) {
        o[a[i]] = o[a[i]] + 1|| 1;

    }
    for (let i = 0; i < b1.length; i++) {
        if (o[b[i]]){
            o[b[i]] -=1
        } else {
            return false
        }
    }
    return true;
}


console.log(isAnagram(a,b));
console.log(isAnagram1 (a,b));
