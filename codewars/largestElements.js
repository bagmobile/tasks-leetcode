function largest(n, xs) {

    for (let i = 0; i < n; i++) {
        for (let j = 1; j < xs.length - i; j++) {
            if (xs[j - 1] > xs[j]) {
                [xs[j - 1], xs[j]] = [xs[j], xs[j - 1]]
            }
        }
    }
    return n > 0 ? xs.slice(-n) : [];

}

console.log(largest(10, [7, 6, 5, 4, 3, 2, 1]));
