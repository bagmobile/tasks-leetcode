const wall = [[1, 2, 2, 1], [3, 1, 2], [1, 3, 2], [2, 4], [3, 1, 2], [1, 3, 1, 1]];

const leastBricks = function (wall) {
    let map = {};
    let max = 0
    wall.forEach(row => {
        let sum = 0;
        for (let i = 0; i < row.length - 1; i++) {
            sum += row[i];
            map[sum] = (map[sum] || 0) + 1;
            max = Math.max(map[sum], max);
        }
    });
    return wall.length - max;
}

console.log(leastBricks(wall));
