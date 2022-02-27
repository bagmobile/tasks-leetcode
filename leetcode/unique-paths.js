const uniquePaths = function (m, n) {

    if (m === 1 || n === 1) {
        return 1;
    }
    const grid = [];
    for (let i = 0; i < m; i++) {
        grid.push([]);
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0) {
                grid[i].push(1);
            } else {
                grid[i].push(grid[i - 1][j] + grid[i][j - 1]);
            }
        }
    }
    return grid[m - 1][n - 1];

};

const uniquePaths1 = function(m, n) {
    let fact = (num) => {
        if (num === 0) {
            return 1;
        }

        return num * fact(num - 1);
    }

    return fact(m + n - 2) / (fact(m - 1) * fact(n - 1));

};
console.log(uniquePaths(3,7))
console.log(uniquePaths1(3,7))
