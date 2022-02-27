const nums = [1,3];
const target = 3;

function search(arr, value) {
    let [start, end] = [0, arr.length - 1];
    while (start <= end) {
       // const current = start + Math.floor((end - start) / 2);
        const current = Math.floor((end + start) / 2);
        if (value === arr[current]) {
            return current;
        }
        if (value > arr[current]) {
            start = current + 1;
        }
        if ( value < arr[current]) {
            end = current - 1;
        }
    }
    return -1;
}
console.log(search(nums, 3))
