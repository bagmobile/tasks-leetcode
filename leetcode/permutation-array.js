function variant(str, now = '', arr = []) {
    if (str)
        for (let i = 0; i < str.length; i++)
            variant(str.slice(0, i) + str.slice(i + 1), now + str[i], arr);
    else if (!arr.includes(now))
        arr.push(now);
    return arr;
}
console.log(variant('123'));

function variant1(_inn, now = '', arr = []) {
    if (_inn.length)
        for (let i = 0; i < _inn.length; i++)
            variant1([..._inn.slice(0, i), ..._inn.slice(i + 1)], now + _inn[i], arr);
    else if (!arr.includes(now))
        arr.push(now);
    return arr;
}
console.log(variant1([1,2,3]));
