const factorial = (n) => {
    if (n < 2) {
        return 1
    }
    return n * factorial(n - 1);
}

const factorial1 = (n) => {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));
console.log(factorial1(3));
