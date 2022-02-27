let proto = {
    year: 2020
}
const o = Object.create(proto);
//proto = {year: 2021}

// console.log(o.__proto__)
// //o.prototype.year = 2034
//
// console.log(o.__proto__ === proto);
// console.log(o.year)
function Cat(){

}
Cat.prototype= {w:12};
console.log(Cat.prototype, Cat.__proto__)
const cat = new Cat();
console.log(Cat.prototype, cat.__proto__)
