
const arr = [0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1]

const getMaxSequence = (a, v = 1) => {
    let counter = 0;
    let maxCounter = 0;
    for (let i = 0; i < a.length; i += 1) {
        if (a[i] === v) {
            counter++;
            if (counter > maxCounter) {
                maxCounter = counter;
            }
        } else {
            counter = 0
        }
    }
    return maxCounter;
}

console.log(getMaxSequence(arr));
