const repeatString = function() {
    if (arguments[1] < 0) {
        return "ERROR";
    }
    let result = "";
    let repeat = arguments[0];
    for (let i = arguments[1]; i > 0; --i) {
        result += repeat;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
