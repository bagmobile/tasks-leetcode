const strs = ["flower", "flow", "flight"];
const strs1 = ["dog", "racecar", "car"];
const strs2 = ['a'];
const strs3 = ["reflower", "flow", "flight"];
const strs4 = ["c", "acc", "ccc"];

const longestCommonPrefix1 = function (strs) {
    if (strs.length === 0) {
        return '';
    }
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0){
            prefix = prefix.slice(0, prefix.length - 1);
            if (prefix.length === 0){
                return ''
            }
        }
    }
    return prefix;
}
const longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }
    let result = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        let tmp = '';
        while (strs[i-1][j] === strs[i][j]) {
            tmp += strs[i][j];
            j++;
        }
        if (tmp.length < result.length){
            result = tmp;
        }
    }

    return result;
};

function maxSubString(s1, s2) {
    let i = 0;
    let result = '';
    while (s1[i] === s2[i]) {
        result += s1[i];
        i++;
    }
    return result
}

console.log(longestCommonPrefix(strs))
console.log(longestCommonPrefix(strs1))
console.log(longestCommonPrefix(strs2))
console.log(longestCommonPrefix(strs3))
console.log(longestCommonPrefix(strs4))
