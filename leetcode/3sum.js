const nums = [-1, 0, 1, 2, -1, -4];
const nums1 = [0, 0, 0, 0];
const nums2 = [-1, 0, 1, 0];

const threeSum = function (nums) {
    const result = [];
    const target = 0;
    const m = {};
    if (nums.length < 3) {
        return result;
    }

    let j = 0;
    let k = 0;
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > target) {
            break;
        }

        j = i + 1;
        k = nums.length - 1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum === target) {
                const _in = [nums[i], nums[j], nums[k]];
                if (!m[_in.toString()]) {
                    result.push(_in);
                    m[_in.toString()] = true
                }
                j++;
                k--;
                continue;
            }
            if (sum > target) {
                k--;
            }
            if (sum < target) {
                j++;
            }

        }
    }

    return result;
};

const threeSum1 = function (nums) {
    const result = [];
    const m = {};
    if (nums.length < 3) {
        return result;
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            const thirdIndex = nums.indexOf(0 - nums[i] - nums[j], j + 1);
            if (thirdIndex > 0) {
                const _in = [nums[i], nums[j], nums[thirdIndex]].sort((a, b) => a - b);
                if (!m[[_in[0], _in[1]].toString()]) {
                    result.push(_in);
                    m[[_in[0], _in[1]].toString()] = true
                }
            }
        }
    }
    return result;
};

//console.log(threeSum(nums))

console.log(threeSum(nums1))
