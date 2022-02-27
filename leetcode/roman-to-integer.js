const romanToInt = function (s) {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900
    }
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i + 1] && map[s.slice(i, i + 2)]) {
            sum += map[s.slice(i, i + 2)];
            i++;
        } else {
            sum += map[s[i]];
        }
    }
    return sum;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
