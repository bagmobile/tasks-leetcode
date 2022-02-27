const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 1;
const nums1 = [4, 5, 6, 7, 0, 1, 2];
const target1 = 3;
const nums2 = [1];
const target2 = 1
const nums3 = [5, 1, 3];
const target3 = 3

const search = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        //const current = start + Math.floor((end - start) / 2);
        const current = Math.floor((end + start) / 2);

        if (nums[current] === target) {
            return current;
        }

        if (nums[start] <= nums[current]) {
            if (nums[start] <= target && target <= nums[current]) {
                end = current - 1;
            } else {
                start = current + 1;
            }
        } else {
            if (nums[current] <= target && target <= nums[end]) {
                start = current + 1;
            } else {
                end = current - 1;
            }
        }

        /* if (target >= nums[start]) {
             if (target < nums[current]) {
                 end = current - 1;
             } else {
                 start = current + 1
             }
         } else {
             start = current
         }*/
    }
    return -1
};

//console.log(search(nums, target));
//console.log(search(nums1, target1));
console.log(search(nums2, target2));
console.log(search(nums3, target3));
