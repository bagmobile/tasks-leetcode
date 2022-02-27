let classNames = [
    'header', 'menu', 'menu-item', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'link', 'link', 'link'
];

const orderUniqNames = (arr) => {

    return [...Object.entries(arr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {}))]
        .sort((a, b) => b[1] - a[1])
        .map(([item]) => item);

}
console.log(orderUniqNames(classNames))

