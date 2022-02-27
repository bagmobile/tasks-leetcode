const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(123)
    }, 1000)
}).then((value)=>{
    console.log(value)
}, (error)=>{
    console.log(error)
});
console.log(promise)
