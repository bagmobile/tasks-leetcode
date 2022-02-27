/**
 * @param {number[]} nums
 */
const NumArray = function(nums) {
    this.nums = nums;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.nums.slice(left, right + 1).reduce((acc, value) => {
        acc += value;
        return acc;
    },0);
};

const obj = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(obj.sumRange(0,2))
console.log(obj.sumRange(2,5))
console.log(obj.sumRange(0,5))

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
