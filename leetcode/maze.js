let maze = [
    [1, 1, 1, 0, 0, 1],
    [1, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0]
];

let maze1 = [
    [1, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1],
    [0, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 0]
];

const checkPath = (maze, a, b) => {

    if (!(maze?.[a.x]?.[a.y] >= 0 && maze?.[b.x]?.[b.y] >= 0)) return false;
    let isFinish = false;
    const check = (i, j) => {

        if (maze?.[i]?.[j] === 0 && maze?.[i]?.[j] !== '_' && !isFinish) {

            console.log(i, j)
            maze[i][j] = '_';

            if (i === b.x && j === b.y) {
                isFinish = true;
                return
            }

            check(i, j + 1);
            check(i, j - 1);
            check(i + 1, j);
            check(i - 1, j);
        }
    }
    check(a.x, a.y);
    return maze[b.x][b.y] === '_';
}

console.log(checkPath(maze, {x: 0, y: 3}, {x: 5, y: 5}))
console.log(checkPath(maze1, {x: 3, y: 0}, {x: 5, y: 0}))
