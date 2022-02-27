const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];

const matrix1 = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]
const matrix2 = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];

const setZeroes = function (matrix) {
    let rows = matrix.length;
    let columns = matrix[0].length;
    let isCol = false;

    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] === 0) {
            isCol = true;
        }
        for (let j = 1; j < columns; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < columns; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if (matrix[0][0] === 0) {
        for (let i = 0; i < columns; i++) {
            matrix[0][i] = 0;
        }
    }

    if (isCol) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }

    return matrix;
};

console.log(setZeroes(matrix))
console.log(setZeroes(matrix1))
console.log(setZeroes(matrix2))
