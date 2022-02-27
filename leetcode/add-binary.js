const addBinary = function (a, b) {
    let result = '';
    let add = 0;

    if (a.length > b.length) {
        b = Array(a.length - b.length).fill(0).join('') + b;
    }

    if (a.length < b.length) {
        a = Array(b.length - a.length).fill(0).join('') + a;
    }
    for (let i = a.length - 1; i >= 0; i--) {

        let cur = a[i] ^ b[i];
        if (cur === 0) {

            if (parseInt(a[i]) === 0 && parseInt(b[i]) === 0) {
                if (add === 1) {
                    cur = '1';
                    add = 0;
                }
            } else {
                if (add === 1) {
                    cur = '1'
                } else {
                    add = 1;
                }
            }
        } else if (cur ^ add === 0) {
            add = 1;
            cur = '0'
        }
        result = cur + result;

    }

    return add > 0 ? add + result : result;
};

const addBinary1 = function (a, b) {
    return (parseInt(a, 2) + parseInt(b, 2)).toString(2)
};

console.log(addBinary('110111', '1010100'))
console.log(addBinary1('110111', '1010100'))
// console.log(addBinary('11', '11'))
// console.log(addBinary1('11', '11'))
