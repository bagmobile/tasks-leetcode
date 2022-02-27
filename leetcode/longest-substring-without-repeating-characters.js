const s = "abcabcbb";
const s1 = "bbbbb";
const s2 = "pwwkew";

const lengthOfLongestSubstring = function (s) {
    let hash = {};
    let counter = 0;
    let current = '';

    for (let i = 0; i < s.length; i++) {
        current = current || s[i];

        for (let j = i + 1; j < s.length; j++) {
            hash[s[j - 1]] = (hash[s[j - 1]] || 0) + 1;
            if (hash[s[j]]) {
                hash[s[j]] = 0;
                counter = Math.max(counter, current.length);
                i = j - 1;
                current = current.substring(current.indexOf(s[j]) + 1) + s[j];
                break;
            } else {
                current += s[j];
                if (j === s.length - 1) {
                    i = j;
                }
            }
        }
    }
    return Math.max(counter, current.length);
};
console.log(lengthOfLongestSubstring(s));
console.log(lengthOfLongestSubstring(s1));
console.log(lengthOfLongestSubstring(s2));
