const ex = (v, sum) =>console.log(v+sum);
const fx = ex.bind(null, 10)
ex(12,7);
fx(7) //17 resource
