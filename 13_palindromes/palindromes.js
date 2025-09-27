const palindromes = function (s) {
    if (typeof s !== "string") return "ERROR";
    const valid = s.toLowerCase().replace(/[^a-z0-9]+/g, "");
    let i = 0, j = valid.length - 1;
    while (i < j) {
        if (valid[i] !== valid[j]) return false;
        i++, j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
