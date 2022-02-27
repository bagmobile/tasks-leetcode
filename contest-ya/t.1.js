const a = 'ab';
const b = 'aabbccdea';

const countAinB = (a, b) => {
    let counter = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                counter++;
            }
        }
    }
    return counter;
}

const countAinB1 = (a, b) => {
    let counter = 0;
    for (let i = 0; i < b.length; i++) {
        if (a.includes(b[i])) {
            counter++;
        }
    }
    return counter;
}

const countAinB2 = (a, b) => {
    let counter = 0;
    const set = new Set(a);
    for (let i = 0; i < b.length; i++) {
        if (set.has(b[i])) {
            counter++;
        }
    }
    return counter;
}

console.log(countAinB(a, b));
console.log(countAinB1(a, b));
console.log(countAinB2(a, b));
