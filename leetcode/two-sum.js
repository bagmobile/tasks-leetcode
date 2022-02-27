const twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const index = nums.indexOf(target - nums[i], i + 1);
        if (index > 0) {
            return [i, index];
        }
    }
};

const twoSum1 = function (nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        if (map[target - nums[i]] !== i){
            return [i, map[target - nums[i]]];
        }
    }
    return []
};

const orderedTwoSum = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let sum = nums[left] + nums[right];

        if (sum === target) {
            return [left, right];
        }
        if (sum > target) {
            right -= 1;
        } else {
            left += 1;

        }
    }
    return [];
};


console.log(twoSum([3, 2, 4], 6))
console.log(twoSum1([3, 2, 4], 6))
console.log(orderedTwoSum([2, 7, 11, 15], 9))
