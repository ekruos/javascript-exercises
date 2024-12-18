const sumAll = function(first, second) {
    if (typeof first !== "number" || typeof second !== "number") {
        return "ERROR";
    }
    if (Math.floor(first) !== first || Math.floor(second) !== second) {
        return "ERROR";
    }
    if (first < 0 || second < 0) {
        return "ERROR";
    }

    if (first <= second) {
        small = first;
        big = second;
    } else {
        small = second;
        big = first;
    }

    let sum = 0;
    for (let i = small; i <= big; i++) {
        sum += i;
    }
    return sum;
    


};

// Do not edit below this line
module.exports = sumAll;
