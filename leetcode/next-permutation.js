const nums = [1, 2, 3];
const nums1 = [3, 2, 1];
const nums2 = [1, 3, 2];
const nums3 = [2, 3, 1];
const nums4 = [2, 1, 3];
const nums5 = [3, 1, 2];
const nums6 = [4, 2, 0, 2, 3, 2, 0];
const nums7 = [11, 12, 9, 20, 19];
const nums8 = [1, 3, 5, 4, 2];
const nums9 = [5, 4, 3, 2, 1];

function helper(x, d) {
    for (let i = d; i < x.length; i++)
        if (x[i] > x[d])
            return i;
    return 0;
}
const nextPermutation1 = function (nums) {
    for (let i = nums.length - 2; i > -1; i--) {
        if (nums[i] < nums[i + 1]) {
            let x = nums.slice(i + 1,).sort((a, b) => a - b);
            nums.splice(i + 1, x.length, ...x);
            let min = helper(nums, i);
            [nums[i], nums[min]] = [nums[min], nums[i]];
            return nums
        }
    }
    return nums.sort((a, b) => a - b);
};

nextPermutation1(nums8);
console.log(nums8)

const nextPermutation = function (nums) {

    if (nums.length < 2) {
        return nums;
    }
    let max = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] >= nums[max]) {
            max = i;
        } else {
            break;
        }
    }

    let min = max;
    for (let i = max; i < nums.length; i++) {
        if (nums[i] > nums[max - 1]) {
            min = i
        }
    }

    if (max !== 0) {
        [nums[max - 1], nums[min]] = [nums[min], nums[max - 1]];
        nums.splice(max, nums.length, ...nums.slice(max).sort((a, b) => a - b));
    } else {
        nums.sort((a, b) => a - b);
    }

};
nextPermutation(nums);
console.log(nums)
nextPermutation(nums1);
console.log(nums1)
nextPermutation(nums2);
console.log(nums2)
nextPermutation(nums3);
console.log(nums3)
nextPermutation(nums4);
console.log(nums4)
nextPermutation(nums5);
console.log(nums5)
nextPermutation(nums9);
console.log(nums9)
