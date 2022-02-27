const o = {
    from: 1,
    to: 5
}
const m = new Map([[2, 4], ['w', 6], ['ddd fdffd', null]]);
const t = [3, 5, 'sdfsdf', null]
for (let num of t) {
    console.log(num)
}

o[Symbol.iterator] = function () {

    return {
        current: this.from,
        last: this.to,
        next: function () {
            if (this.current <= this.last) {
                return {done: false, value: this.current++}
            } else {
                return {done: true, value: this.last}
            }
        }
    }
}
//console.log(o)
/*
for(let i of o){
    console.log(i);
}*/

const iterator = o[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);
}
