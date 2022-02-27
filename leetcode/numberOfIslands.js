const grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]
const grid1 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]

const one = '1';
const marked = '-';

const numberOfIslands = (grid) => {
    let counter = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === one) {
                counter++;
                markIsland(grid, i, j);
            }
        }
    }
    return counter;
}

const markIsland = (grid, i, j) => {

    grid[i][j] = marked;

    if (grid?.[i]?.[j + 1] === one) {
        markIsland(grid, i, j + 1)
    }
    if (grid?.[i-1]?.[j] === one) {
        markIsland(grid, i - 1, j)
    }
    if (grid?.[i+1]?.[j] === one) {
        markIsland(grid, i + 1, j)
    }
    if (grid?.[i]?.[j - 1] === one) {
        markIsland(grid, i, j - 1)
    }
}

console.log(numberOfIslands(grid1));
