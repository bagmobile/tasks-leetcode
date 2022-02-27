const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
const nums3 = [4, 9, 5];
const nums4 = [9, 4, 9, 8, 4];

const intersection = function (nums1, nums2) {
    const set = new Set();
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i])) {
            set.add(nums1[i])
        }
    }
    return Array.from(set);
};

const intersection1 = function (nums1, nums2) {
    let minSet = new Set(nums1);
    let maxSet = new Set(nums2);
    if (minSet.size > maxSet.size) {
        [minSet, maxSet] = [maxSet, minSet]
    }
    for (const el of minSet) {
        if (!maxSet.has(el)) {
            minSet.delete(el)
        }
    }
    return Array.from(minSet)
};

console.log(intersection(nums1, nums2));
console.log(intersection(nums3, nums4));
console.log(intersection1(nums1, nums2));
console.log(intersection1(nums3, nums4));
