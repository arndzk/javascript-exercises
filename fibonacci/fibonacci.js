const fibonacci = function(x) {
    if (x < 0) {
        return `OOPS`;
    } else {
        let fib = [];
        fib[0] = 1;
        fib[1] = 1;
        for (let i = 2; i <= parseInt(x) - 1; i++) {
            fib[i] = fib[i - 2] + fib[i - 1];
        }
        return fib[parseInt(x) - 1];
    }
}

module.exports = fibonacci
