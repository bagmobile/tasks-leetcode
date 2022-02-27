const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

const _trap = (height) => {
    let maxLeft = height[0];
    let maxRight = height[height.length - 1];
    let left = 1;
    let right = height.length - 2;
    let count = 0;

    while (left <= right) {
        if (maxLeft <= maxRight) {
            maxLeft = Math.max(maxLeft, height[left]);
            count += maxLeft - height[left];
            left += 1;
        } else {

            maxRight = Math.max(maxRight, height[right]);
            count += maxRight - height[right];
            right -= 1;
        }
    }
    return count;
}

console.log(_trap(height));

const matrix = [
    [0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
];


const makeMatrix = (water) => {
    const result = [];
    let max = Math.max(...water);
    for (let i = 0; i < max; i++) {
        const level = [];
        for (let j = 0; j < water.length; j++) {
            if (water[j] === 0) {
                level.push(0);
            } else {
                level.push(1);
                water[j] -= 1;
            }
        }
        result.push(level);

    }
    return result;
}


const trap = (waterMatrix) => {
    let counter = 0;

    for (let i = 0; i < waterMatrix.length; i++) {
        let flag = false;
        let local = 0;
        for (let j = 0; j < waterMatrix[i].length; j++) {
            if (waterMatrix[i][j] === 1) {
                flag = true;
                if (local) {
                    counter += local;
                    local = 0
                }
            }
            if (flag && waterMatrix[i][j] === 0) {
                local++;
            }
        }
    }
    return counter;
}
console.log(trap(makeMatrix(height)))
