const isPrime = (num) => {
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

console.log(isPrime(13));

let countPrimes1 = function (n) {
    const result = [];
    const temp = [];
    for (let i = 2; i < n; i++) {
        if (!temp[i]) {
            result.push(i);
            for (let j = i * 2; j < n; j += i) {
                temp[j] = true;
            }
        }
    }
    return result;
};
console.log(countPrimes1(10))

let countPrimes = function (n) {
    const result = [];
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            result.push(i)
        }
    }
    return result;
};
console.log(countPrimes(120))
