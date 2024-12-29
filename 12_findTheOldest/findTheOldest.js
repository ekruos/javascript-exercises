const findTheOldest = function(arr) {
    for (const item of arr) {
        if (!("yearOfDeath" in item)) {
            item.yearOfDeath = 2024;
        }
    }
    let oldest = arr[0];
    let oldestAge = arr[0].yearOfDeath - arr[0].yearOfBirth;

    for (const person of arr) {
        if (person.yearOfDeath - person.yearOfBirth > oldestAge) {
            oldest = person;
            oldestAge = person.yearOfDeath - person.yearOfBirth;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
