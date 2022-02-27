const debounceDecorator = (fn, ms) => {
    let timer = null;
    return function (...args) {
        if (timer) {
            return
        }
        timer = setTimeout(() => {
            fn.apply(this, args);
            timer = null;
        }, ms);
    }
}

const debounceDecorator1 = (fn, ms) => {
    let timer;
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => fn.apply(this, args), ms);
    }
}

const f = debounceDecorator1(console.log, 1000);

f(1)
f(2)
setTimeout(() => f(3), 1100);
setTimeout(() => f(4), 2150);
