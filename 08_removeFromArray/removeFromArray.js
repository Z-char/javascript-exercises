const removeFromArray = function(arr, ...args) {
    const result = arr.filter(x => !args.includes(x));
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
