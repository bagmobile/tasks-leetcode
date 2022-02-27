'use strict'
const obj = {
    a: 33,
    b: function () {
        setTimeout(function () {
                console.log(this.a)
        }, 1000)
    }
}
obj.b()
/*for (var i=0; i < 10; i++){
    function w(a){
        setTimeout(() => console.log(a), a*1000);
    }
    w(i)
}*/

/*for (var i=0; i < 10; i++){
        setTimeout(((q) => () =>console.log(q))(i), i*1000);

}*/
/*for (var i=0; i < 10; i++){
    (function (a) {
        setTimeout(() => console.log(a), a*1000)
    })(i)

}*/
/*for (var i = 0; i < 10; i++) {

    setTimeout(function (i) {
        console.log(i)
    }.bind(null, i), i * 1000)
}*/
