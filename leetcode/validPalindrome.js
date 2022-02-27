const s = "A man, a plan, a canal: Panama";
const s1 = '0P'
const isPalindrome = function (s) {
    s = s.toLowerCase().replace(/[^0-9a-zA-Z]+/g, '');
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] === s[right]) {
            left += 1;
            right -= 1;
        } else {
            return false
        }
    }
    return true
};

const isPalindrome1 = function (s) {
    s = s.replace(/[^0-9a-zA-Z]+/g, '');
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left].toLowerCase() === s[right].toLowerCase()) {
            left += 1;
            right -= 1;
        } else {
            return false
        }
    }
    return true
};

const isPalindrome2 = function (s) {
    const set = new Set([0,1,2,3,4,5,6,7,8,9]);
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if ((s[left].toLowerCase().charCodeAt(0) < 'a'.charCodeAt(0) || s[left].toLowerCase().charCodeAt(0) > 'z'.charCodeAt(0) )){
            if (!set.has(parseInt(s[left]))){
                left += 1;
                continue;
            }
        }
        if ((s[right].toLowerCase().charCodeAt(0) < 'a'.charCodeAt(0) || s[right].toLowerCase().charCodeAt(0) > 'z'.charCodeAt(0) )){
            if (!set.has(parseInt(s[right]))) {
                right -= 1;
                continue;
            }
        }
        if (s[left].toLowerCase() === s[right].toLowerCase()) {
            left += 1;
            right -= 1;
        } else {
            return false
        }
    }
    return true
};
console.log(isPalindrome1(s));
