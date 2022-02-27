const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];


const maxSubArray3 = function(nums) {
    let maxSoFar = nums[0]; maxEndHere = nums[0];
    for(let i = 1; i < nums.length; ++i) {
        maxEndHere = Math.max(nums[i], maxEndHere + nums[i])
        maxSoFar = Math.max(maxSoFar, maxEndHere)
        console.log(maxSoFar, maxEndHere);
    }
    return maxSoFar
}

let maxSubArray2 = function(nums) {
    let maxSum = nums[0], val = 0
    nums.forEach(num => {
        maxSum = Math.max(maxSum, val += num)
        val = Math.max(val, 0)
    })
    return maxSum;
}

const maxSubArray1 = function(nums) {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], (nums[i] + nums[i - 1]));
        max = Math.max(max, nums[i]);
    }
    return max;
};

const maxSubArray = function (nums) {

    let max = 0;
    let curMax = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        curMax = 0;
        sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            curMax = Math.max(curMax, sum);
        }
        max = Math.max(max, curMax);
    }
    return max;
};
console.log(maxSubArray3(nums))

function sum(...args) {
    return [...args].reduce((acc, v) => {
        acc += v;
        return acc
    }, 0)
}
