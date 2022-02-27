const generateParenthesis = function (n) {

    const backtracking = (left, right, ans) => {

        if (!left && !right)
            res.push(ans);
        if (left)
            backtracking(left - 1, right + 1, ans + "(");
        if (right)
            backtracking(left, right - 1, ans + ")");

    };

    const res = [];
    backtracking(n, 0, "");
    return res;
};

const generateParenthesis1 = function (n) {
    let ans = [];
    if (n === 0)
        ans.push("");
    else
        for (let c = 0; c < n; ++c)
            for (let left of generateParenthesis(c))
                for (let right of generateParenthesis(n - 1 - c))
                    ans.push("(" + left + ")" + right);
    return ans;
};

console.log(generateParenthesis(2));
