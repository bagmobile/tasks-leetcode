const nums = [1, 1, 2, 0, 2, 1, 1, 0];
const nums1 = [2, 0, 1]
const sortColors = function (nums) {
    nums.splice(nums.length, 0, [], [], []);
    for (let i = 0; i < nums.length - 3; i++) {
        nums[nums[i] + nums.length - 3].push(nums[i]);
    }
    nums.splice(0, nums.length - 3);
    nums.splice(0, 3, ...nums[0], ...nums[1], ...nums[2]);
};


const sortColors1 = function (nums) {
    let end = nums.length - 1;
    let start = 0;
    let index = 0;

    while (index <= end) {
        if (nums[index] === 0) {
            nums[index++] = nums[start];
            nums[start++] = 0;
        } else if (nums[index] === 2) {
            nums[index] = nums[end];
            nums[end--] = 2;
        } else {
            index++;
        }
    }
};

const sortColors2 = function(nums) {
    let low = 0, mid = 0, high = nums.length - 1;

    while(mid <= high){
        switch(nums[mid]){
            case 0:
                [nums[low], nums[mid]] = [nums[mid], nums[low]];
                low++;
                mid++;
                break;
            case 1:
                mid++;
                break;
            case 2:
                [nums[mid], nums[high]] = [nums[high], nums[mid]];
                high--;
                break;
        }
    }
};


sortColors2(nums);
console.dir(nums)

