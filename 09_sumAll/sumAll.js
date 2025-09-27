const sumAll = function(...args) {
    if (args.length === 2 && Number.isInteger(args[0]) && Number.isInteger(args[1])) {
        let [l, r] = args;
        if (l > r) {
            [l, r] = [r, l];
        }
        if (l < 0) {
            return "ERROR";
        }
        return (l + r) * (r - l + 1) / 2;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
