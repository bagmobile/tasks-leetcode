const fibo = (n) => {
    if (n <= 2) {
        return 1
    }
    return fibo(n - 1) + fibo(n - 2)
}

const fibo1 = (n) => {
    const result = [0, 1];

    for (let i = 2; i <= n; i++) {
        result.push(result[i - 1] + result[i - 2])
    }
    return result[n]
}

const fibo3 = (n) => {
    let a = 1;
    let b = 1;

    let i = 2
    while (i < n) {
        [a, b] = [b, a + b]
        i++
    }
    return b;

}

console.log(fibo(3))
console.log(fibo1(3))
console.log(fibo(5))
console.log(fibo1(5))
console.log(fibo3(10))
