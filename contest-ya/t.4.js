const count = 3;
const start = '(';
const end = ')';

const test = (cur, open, close, n) => {
    if (cur.length === 2 * n) {
        if (open === close) {
            console.log(cur);
        }
        return
    }
    test(cur + start, open + 1, close, n);
    if (close < open) {
        test(cur + end, open, close + 1, n)
    }
}

test('', 0, 0, 3);
