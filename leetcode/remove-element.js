
const removeElement = function(nums, val) {
    nums.sort((a,b) => a - b);
    const ind = nums.indexOf(val);
    if (ind >=0){
        nums.splice(ind, nums.lastIndexOf(val) - ind + 1);
    }
    return nums.length;
};
console.log(removeElement([3,2,2,3],3));
console.log(removeElement([0,1,2,2,3,0,4,2], 4))
console.log(removeElement([2], 3))
