const nums = [4, 1, 2, 1, 2]


const singleNumber = function (nums) {
    const uniq = {};
    let sumUniq = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        uniq[nums[i]] = (uniq[nums[i]] || 0) + 1;
        sumUniq += (uniq[nums[i]] === 1) ? nums[i] : 0;
        sum +=nums[i];
    }
    return sumUniq*2 - sum;
};
const singleNumber1 = function (nums) {
    let result = nums.reduce((acc, value) => {
        acc[value] = (acc[value] || 0) + 1;
        return acc;
    }, {});
    for (const resultElement in result) {
        if (result[resultElement] === 1) {
            return resultElement;
        }
    }
};

console.log(singleNumber(nums));
