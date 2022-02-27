const input = [1, 12, -5, -6, 50, 3];
const input1 = [-1];
const input2 = [493, 593, 1446, -6013, 2163, 8450, 3008, -1328, 6195, 4102, -6242, -9971, -8327, 4480, -4972, -8305, -1644, 2320, 331, 2465, 2955, -8386, -7580, 1759, -9576, -8088, -9446, -2916, -3600, 923, 1412, -5390, 4492, 9458, -9336, -4754, -3455, 9597, -324, -5628, 4242, 4076, 8159, -2423, -3449, 6744, 9029, -9231, 2283, 6118, -200, 3610, -7566, -6976, 2519, 9532, 2221, -5167, -2370, 1861, -1558, -9815, -1186, 2021, 7050, -4504, 4926, 8362, 7805, -8274, -351, 5826, 7623, -5520, -2395, -8466, -8461, 3261, -3197];


const findMaxAverage = function (nums, k) {
    let avg = -Infinity;

    for (let i = 0; i < nums.length - k + 1; i++) {
        const tmp = nums.slice(i, i + k).reduce((acc, val) => acc + val, 0) / k;
        avg = Math.max(tmp, avg)
    }
    return avg;
};
const findMaxAverage1 = function (nums, k) {
    let sum = nums.slice(0, k).reduce((acc, val) => acc + val, 0);
    let maxSum = sum;
    for (let i = 0; i < nums.length - k; i++) {
        sum += nums[i + k] - nums[i];
        maxSum = Math.max(sum, maxSum);
    }
    return maxSum / k;
};

console.log(findMaxAverage1(input, 4));
console.log(findMaxAverage(input1, 1));
console.log(findMaxAverage(input2, 7));
