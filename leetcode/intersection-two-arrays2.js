const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
const nums3 = [4, 9, 5];
const nums4 = [9, 4, 9, 8, 4]


const intersect = function (nums1, nums2) {
    const map1 = {};

    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        map1[nums1[i]] = (map1[nums1[i]] || 0) + 1
    }
    for (let i = 0; i < nums2.length; i++) {
        const current = nums2[i];
        if (map1[current]) {
            result.push(current);
            map1[current]--;
        }
    }

    return result;
};

const intersect1 = function (nums1, nums2) {
    const map1 = {};
    const map2 = {}
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        map1[nums1[i]] = (map1[nums1[i]] || 0) + 1
    }
    for (let i = 0; i < nums2.length; i++) {
        map2[nums2[i]] = (map2[nums2[i]] || 0) + 1
    }
    const keys = Object.keys(map1);
    for (let i = 0; i < keys.length; i++) {
        if (map2[keys[i]]) {
            result = result.concat(Array(Math.min(map1[keys[i]], map2[keys[i]])).fill(keys[i]));
        }
    }
    return result;
};
console.log(intersect(nums1, nums2));
console.log(intersect(nums3, nums4));
