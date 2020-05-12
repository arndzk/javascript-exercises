const sumAll = function(start, end) {
    let sum = 0;

    if(typeof start != "number" || typeof end != "number") {
        return "ERROR";
    }
    if(start < 0 || end < 0) {
        return "ERROR";
    }
    if(start > end) {
        let temp = end;
        end = start;
        start = temp;
    }

    for(let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
}

module.exports = sumAll
