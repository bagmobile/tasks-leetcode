const inc = (function(){
    let counter=0;
    return function(){
        return ++counter;
    }
})();

function inc1(){
    if (!this.counter){
        this.counter = 0;
    }
    return ++this.counter;
}

console.log(inc1());
console.log(inc1());
