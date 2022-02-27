const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];

const intervals1 = [[1, 4], [4, 5]];

const intervals2 = [[1, 4], [0, 5]];

const intervals3 = [[1, 4], [0, 1]];

const intervals4 = [[1, 4], [0, 0]];

const intervals5 = [[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]];

const intervals6 = [[1, 4], [1, 5]];

const intervals7 = [[1, 4], [0, 4]];

const test = [[2, 3], [3, 3], [1, 10], [4, 5], [6, 7], [8, 9], [1, 10], [0, 0], [6, 7], [3, 3]];//[[3, 4], [1, 3]];

const merge = function (intervals) {

    return intervals
        .sort((a, b) => a[0] - b[0])
        .reduce((acc, interval) => {

            if (interval[0] > acc[acc.length - 1][1]) {
                acc.push(interval)
            } else {
                acc[acc.length - 1][1] = Math.max(acc[acc.length - 1][1], interval[1]);
            }
            return acc;
        }, [intervals.shift()]);
};

console.log(merge(test));

console.log(merge(intervals));
console.log(merge(intervals1));
console.log(merge(intervals2));
console.log(merge(intervals3));
console.log(merge(intervals4));
console.log(merge(intervals5));
console.log(merge(intervals6));
console.log(merge(intervals7));
