const Solution = function (nums) {
    this.nums = nums;
};

Solution.prototype.reset = function () {
    return this.nums
};

Solution.prototype.shuffle = function () {
    let arr = [...this.nums];
    let i = arr.length - 1;
    while (i > 0) {
        const si = Math.floor(Math.random() * (i + 1));
        const tmp = arr[i];
        arr[i] = arr[si];
        arr[si] = tmp;
        i--;
    }
    return arr;
};
const nums = [1, 2, 3, 4, 5]
const obj = new Solution(nums)
console.log(obj.shuffle().join(''));
console.log(obj.shuffle().join(''));
console.log(obj.shuffle().join(''));
console.log(obj.shuffle().join(''));
console.log(obj.shuffle().join(''));


console.log(obj.reset().join(''));
