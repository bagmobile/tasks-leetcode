const stock = [7, 1, 5, 3, 6, 4, 8];
const stock1 = [7, 6, 5, 5, 4, 4, 3];

const maxProfit = (arr) => {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const diff = arr[j] - arr[i];
            if (diff > max) {
                max = diff;
            }
        }
    }
    return max;
}

const bestMaxProfit = (arr) => {
    let maxProfit = 0;
    let minPrice = arr[0];

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];

        if (minPrice > arr[i]) {
            minPrice = arr[i];
        }

        if (current - minPrice > maxProfit) {
            maxProfit = current - minPrice;
        }
    }
    return maxProfit;
}

console.log(maxProfit(stock))
console.log(bestMaxProfit(stock))
