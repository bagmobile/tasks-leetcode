const s = "3sbs1nngnn5";
const s1 = "sbs";
const s2 = 'ab';
const s3 = 'cbbd';
const s4 = "aacabdkaacaa";
const s5 = "babad";

const longestPalindrome = function (s) {
    let left = 0;
    let right = 0;
    const getDepth = (s, l, r) => {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++
        }
        return r - l - 1;
    }

    for (let i = 0; i < s.length; i++) {
        const v1 = getDepth(s, i, i);
        const v2 = getDepth(s, i, i + 1);
        const max = Math.max(v1, v2);
        if (max > right - left) {
            left = Math.ceil(i - (max - 1) / 2);
            right = Math.floor(i + max / 2)
        }
    }

    return s.slice(left, right + 1)
};

const longestPalindrome1 = function (s) {

    let maxPalindrome = s[0];
    for (let i = 0; i < s.length; i++) {
        let j = s.length - 1;
        while (s.slice(i, j + 1).lastIndexOf(s[i], j)) {

            const ss = s.slice(i, j + 1);
            if (ss !== s[i] && ss.split('').reverse().join('') === ss) {
                if (maxPalindrome.length < ss.length) {
                    maxPalindrome = ss;
                }
            }
            j = s.lastIndexOf(s[i], j - 1);
        }
    }

    return maxPalindrome
};

console.log(longestPalindrome(s));
console.log(longestPalindrome(s1));
console.log(longestPalindrome(s2));
console.log(longestPalindrome(s3));
console.log(longestPalindrome(s4));
console.log(longestPalindrome1(s5));
