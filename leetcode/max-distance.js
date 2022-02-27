const seats = [1, 0, 0, 0, 1, 0, 1];
const seats1 = [0, 1];
const seats2 = [0, 0, 0, 0, 0, 1];
const seats3 = [1, 0, 0, 0, 0, 0];
const seats4 = [1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0];
const seats5 = [1, 0, 1];


const maxDistToClosest = function (seats) {
    let max = 0;
    let counter = 0;
    const l = seats.indexOf(1);
    const r = seats.lastIndexOf(1) + 1;
    max = Math.max(l, seats.length - r);
    for (let i = l; i < r; i++) {
        if (seats[i] === 0) {
            counter++;
        } else {
            max = Math.max(Math.ceil(counter / 2), max);
            counter = 0;
        }
    }
    return max
};

console.log(maxDistToClosest(seats));
console.log(maxDistToClosest(seats1));
console.log(maxDistToClosest(seats2));
console.log(maxDistToClosest(seats3));
console.log(maxDistToClosest(seats4));
console.log(maxDistToClosest(seats5));
