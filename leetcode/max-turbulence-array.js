const maxTurbulenceSize = function (arr) {
    let max = 0;
    let greater = 0;
    let less = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (i % 2 === 0) {
            greater = (arr[i] > arr[i + 1]) ? greater + 1 : 0;
            less = (arr[i] < arr[i + 1]) ? less + 1 : 0
        } else {
            greater = (arr[i] < arr[i + 1]) ? greater + 1 : 0;
            less = (arr[i] > arr[i + 1]) ? less + 1 : 0
        }
        max = Math.max(max, greater, less);
    }
    return max + 1
};
console.log(maxTurbulenceSize([0, 8, 45, 88, 48, 68, 28, 55, 17, 24]))
console.log(maxTurbulenceSize([2, 0, 2, 4, 2, 5, 0, 1, 2, 3]));
console.log(maxTurbulenceSize([4, 8, 12, 16]))
console.log(maxTurbulenceSize([8]));
console.log(maxTurbulenceSize([8, 8, 8]));
console.log(maxTurbulenceSize([0, 1, 1, 0, 1, 0, 1, 1, 0, 0]));
console.log(maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9]));
console.log(maxTurbulenceSize([4, 8]));

