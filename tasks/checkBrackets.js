const checkBrackets = (str) =>
    !str
        .split("")
        .reduce(
            (acc, curr) => {
                if (!acc) {
                    return curr;
                }
                if ("[]{}()".includes(acc.slice(-1)[0] + curr)) {
                    return acc.substring(0, acc.length - 1)
                } else {
                    return acc + curr;
                }
            }
        );

console.log(checkBrackets('{{]]()()}}'))
