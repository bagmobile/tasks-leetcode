const isPalindrome = (x) => {
    let rev = 0;
    if (x < 0) return false;
    if (x < 10) return true;
    if (x % 10 === 0) return false;

    while (x > rev) {
        rev *= 10;
        rev += x % 10;
        x = Math.trunc(x / 10);
    }
    return x === rev || x === Math.trunc(rev / 10);
}

const isPalindrome1 = (x) => {
    if (x < 0) return false;
    if (x < 10) return true;
    let rank = 0;
    let tmp = x
    while (tmp > 0) {
        tmp = Math.trunc(tmp / 10)
        rank++;
    }
    x = x + Math.pow(10, rank);
    rank--;

    while (x > 9) {
        let l = Math.trunc(x / (Math.pow(10, rank))) % 10;
        let r = x % 10;
        if (l === r) {
            x = x - Math.pow(10, rank + 1) - l * Math.pow(10, rank) + Math.pow(10, rank);
            x = Math.trunc(x / 10);
            rank -= 2;
        } else {
            return false
        }
    }
    return true;
}
console.log(isPalindrome(121));
console.log(isPalindrome(120030221));
