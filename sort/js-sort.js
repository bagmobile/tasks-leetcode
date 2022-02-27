const arr = [1, 4, 5, -2, 7, 3, 80, 9];
arr.sort()
console.log(arr);
console.log(arr.sort((a, b) => a - b))

const fruits = ['яблоко', 'арбузы', 'бананы', 'Вишня'];
console.log(fruits.sort());

const map = fruits
    .map((fruit, index) => ({index, value: fruit.toLowerCase()}))
    .sort((a, b) => {
        /*if (a.value > b.value) {
            return 1;
        }*/
        if (a.value < b.value) {
            return -1
        }
        return 0;
    })
    .map(item => fruits[item.index]);
console.log(map);
