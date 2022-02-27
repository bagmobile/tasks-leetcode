const input = [
    ['usd', 'buy', 10000],
    ['usd', 'sell', 5000],
    ['gbp', 'buy', 9000],
    ['eur', 'sell', 7000],
    ['uah', 'buy', 10000],
    ['usd', 'sell', 25000],
];


const output = {
    usd: [10000, 30000],
    gbp: [9000, 0],
    eur: [0, 7000],
    uah: [10000, 0]
}
const calculateTransactions = (list) => {
    const addTransaction = (bank, operation, amount) => {
        if (operation === 'buy') {
            bank[0] += amount;
        }
        if (operation === 'sell') {
            bank[1] += amount;
        }
        return bank
    }
    return list.reduce((acc, item) => {
        acc[item[0]] = addTransaction(acc[item[0]] || [0, 0], item[1], item[2]);
        return acc;
    }, {});
}

console.log(calculateTransactions(input))
