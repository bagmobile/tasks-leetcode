const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSubarray = (nums) => {
    let max = nums[0], sum = 0;
    for (let i = 1; i < nums.length; i++) {
        sum = Math.max(nums[i], nums[i] + sum);
        max = Math.max(max, sum);
    }
    return max;
}


console.log(maxSubArray(nums))
