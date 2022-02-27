const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const height1 = [1,1]

const maxArea = function (height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left <= right) {
        const length = right - left;
        if (height[left] <= height[right]) {
            maxArea = Math.max(maxArea, length * height[left]);
            left += 1;
        } else {
            maxArea = Math.max(maxArea, length * height[right]);
            right -= 1;
        }
    }
    return maxArea;
};

console.log(maxArea(height));
console.log(maxArea(height1));
