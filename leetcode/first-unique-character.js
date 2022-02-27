const s = "leetcode";
const s1 = "loveleetcode";
const s2 = "aadd";

const firstUniqChar = function (s) {
    const map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1;
    }
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1){
            return i
        }
    }
    return -1;
};
const firstUniqChar1 = function (s) {
    const map = {};
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]] && !s.includes(s[i], i + 1)) {
            return i
        } else {
            map[s[i]] = 1;
        }
    }
    return -1;
};
console.log(firstUniqChar(s));
console.log(firstUniqChar(s1));
console.log(firstUniqChar(s2));
