const iWantToGet = (amount) => {
    const availableNotes = [100, 50, 20, 10];
    let sum = 0;
    let count = 0;
    let result=[];
    if (amount <= 0){
        return result;
    }
    for (let i = 0; i < availableNotes.length; i++) {
        const temp = Math.trunc((amount - sum) / availableNotes[i]);
        result = [...result, ...Array(temp).fill(availableNotes[i])]
        sum += temp * availableNotes[i];
        count += temp;
    }
    return result
}
console.log(iWantToGet(270));
