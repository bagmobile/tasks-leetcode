const nums = [1, 1, 1, 2, 2, 2, 3];
const nums1 = [1, 2, 2, 2, 3, 3, 3, 3, 3, 3];
const nums2 = [1, 1, 1, 2, 3];
const nums3 = [1, 1, 2, 2, 3, 3];
const nums4 = [1, 2, 2];
const nums5 = [0,0,0,0,0];

const removeDuplicates1 = function (nums) {
    let prev = 0;
    let next = 1;
    while(next < nums.length){
        if (nums[prev] !== nums[next]){
            next++;
            prev++;
        } else {
            if ( nums[prev - 1] === nums[next]){
                nums.splice(next, 1);
            } else {
                next++;
                prev++
            }
        }
    }
    return nums.length;
}
const removeDuplicates = function (nums) {
    let prev = 0;
    let next = 1;
    let flag = false;
    if (nums.length <= 2) {
        return nums.length;
    }
    while (next < nums.length) {
        if (nums[prev] === nums[next]) {
            if (flag) {
                nums[next] = '_';
                next++;
            } else {
                if (nums[prev + 1] === '_') {
                    [nums[prev + 1], nums[next]] = [nums[next], nums[prev + 1]]
                }
                next++;
                prev++;
                flag = true;
            }
        } else {
            if (nums[prev + 1] === '_') {
                [nums[prev + 1], nums[next]] = [nums[next], nums[prev + 1]]
            }
            if (flag) {
                flag = false;
            }
            prev++;
            next++;
        }
    }
    nums.splice(prev+1);
    return nums.length;
};

console.log(removeDuplicates1(nums5));
console.log(nums5);


