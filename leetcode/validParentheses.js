const s = "()[]{}";
const s1 = "(()({[]}))[]{}";
const s2 = "){"

const isValid = function (s) {
    const set = new Set(['{}', '()', '[]']);
    return !s.split('').reduce((acc, b) => {
        if (!acc) {
            return b;
        }
        return set.has(acc[acc.length - 1] + b)
            ? acc.slice(0, acc.length - 1)
            : acc + b;
    }, '');
};

const isValid1 = function (s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        if (Object.keys(map).includes(s[i])) {
            if (stack.pop() !== map[s[i]]) return false;
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0;
};

console.log(isValid1(s))
console.log(isValid1(s1))
console.log(isValid1(s2))
