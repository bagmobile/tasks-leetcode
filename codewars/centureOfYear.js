function century(year) {
    const add = parseInt(year.toString().substr(4));
    year = add ? year+1 : year;
    if (year <= 100) return 1;
    if (year <1000) return Math.floor(year / 100)+1
    if (year % 100 === 0) {
        return parseInt(year.toString().slice(0,2))
    } else {
        return parseInt(year.toString().slice(0,2)) + 1
    }
}

console.log(century(533560))
