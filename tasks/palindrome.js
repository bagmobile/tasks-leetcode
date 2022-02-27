const a = 'abcc1ccba';

const compareWithReverse = (a,b) => {
 const reverseB = [...b].reduce((acc, item) => {acc.unshift(item); return acc;}, []);
 return a.toString() === reverseB.toString();
}

const isPalindrome = (s) => {

    let mid = Math.floor(s.length / 2);
    let add = 0;
    if (s.length % 2){
        add +=1;
    }
    const first = [...s].slice(0, mid);
    const last = [...s].slice(mid +add);

    return compareWithReverse(first, last);
}

const isPalindrome1 = (s) => {

  return s === [...s].reduce((acc, item) => {acc.unshift(item); return acc}, []).join('');
}
console.log(isPalindrome(a));
console.log(isPalindrome1(a));
console.log(isPalindrome1('dfs'));
