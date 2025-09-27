const getAge = function(x) {
    const death = x.yearOfDeath, birth = x.yearOfBirth;
    const thisYear = new Date().getFullYear();
    return (death ?? thisYear) - birth;
}

const findTheOldest = function(peoples) {
    return peoples.reduce((acc, cur) => {
        const curage = getAge(cur);
        const accage = getAge(acc);
        return curage < accage ? acc : cur;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
