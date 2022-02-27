let s = 0;
const summ = function sum(x) {

    if (x) {
        s += x;
        return sum;
    }
    return s;
}
console.log(summ(1)(2)(3)(4)());

const summ1 = function sum(x) {
    let sum = x;
    return function f(a) {
        if (a) {
            sum += a;
            return f;
        }
        return sum;
    }
}
console.log(summ1(1)(2)(3)(4)());

function summ2() {
    return [].join.apply(arguments).split(',').reduce((acc, item) => {acc +=parseInt(item); return acc;},0);
}
console.log(summ2(1,2,3,4,5))

function curry(func) {

    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };

}
function multiply(a,b,c){
    return a*b*c;
}
const curryMultiply = curry(multiply);
console.log(curryMultiply(1)(2)(3));
