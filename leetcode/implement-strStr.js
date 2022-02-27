const strStr = function (haystack, needle) {
    if (needle.length === 0) {
        return 0;
    }
    for (let i = 0; i < haystack.length; i++) {
            if (needle[0] === haystack[i]) {
                if (needle === haystack.substring(i, i + needle.length)){
                    return i;
                }
            }
    }

    return  -1;
};
console.log(strStr("babba", "bbb"))
console.log(strStr("aaa", ""))
console.log(strStr("aaa", "aa"))
console.log(strStr("aaa", "aaaa"))
console.log(strStr("hello", "ll"))
console.log(strStr("mississippi", "issip"))
console.log(strStr("mississippi", "pi"))
