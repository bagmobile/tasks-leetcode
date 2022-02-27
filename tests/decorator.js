'use strict'
let worker = {
    someMethod() {
        return 1;
    },

    slow(x) {
        console.log(x)
        return x * this.someMethod();
    },
    sum(a, b) {
        return a + b;
    }
};


function cachingDecorator(func) {
    let cache = new Map();
    return function (...args) {
        if (cache.has(hash(args))) {

            return cache.get(hash(args));
        }
        let result = func.apply(this, args); // (**)
        cache.set(hash(args), result);
        return result;
    };
}

function hash(...args) {
    //console.log(arguments)
    return [args].join(',')
}

//console.log( worker.slow(1) );
//worker.slow = cachingDecorator(worker.slow);
//console.log( worker.slow(2) );
//
// worker.sum = cachingDecorator(worker.sum);
//
// console.log(worker.sum(6,5));
// console.log(worker.sum(6,5));

function delayDecorator(fn, ms) {
    return function (...args) {
        setTimeout(function () {
            fn.apply(this, args);
        }.bind(this), ms)
        return 'Waiting'
    }
}

function delayDecorator1(fn, ms) {
    return function () {
        setTimeout(() => {
            fn.apply(this, arguments);
        }, ms)
    }
}

worker.slow = delayDecorator1(worker.slow, 2000);
//console.log(worker.slow(5));


const myF = delayDecorator(function () {
    console.log('hi')
}, 2000);
//myF();


