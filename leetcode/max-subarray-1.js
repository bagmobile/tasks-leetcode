const maxSubArray = function(nums) {
    let max = nums[0];
    let current = max;
    for(let i = 1; i < nums.length; i++){
        current = Math.max(nums[i], nums[i] + current);
        max = Math.max(max, current)
    }
    return max;
};
console.log(maxSubArray([5,4,-1,7,8]))
