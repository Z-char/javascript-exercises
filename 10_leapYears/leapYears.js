const leapYears = function(...args) {
    if (args.length !== 1 || !Number.isInteger(args[0])) return "ERROR";
    let x = args[0];
    if (x % 4 !== 0) {
        return false;
    }
    if (x % 100 === 0) {
        return ((x % 400) === 0);
    }
    return true;
};

// Do not edit below this line
module.exports = leapYears;
