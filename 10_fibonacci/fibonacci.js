const fibonacci = function(number) {
    if (typeof number == "string") {
        number = +number;
    }
    if (number < 0) {
        return "OOPS";
    }
    let fibo = [];
    fibo[0] = 0;
    fibo[1] = 1;
    fibo[2] = 1;
    for (i = 3; i <= number; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo[number];

};

// Do not edit below this line
module.exports = fibonacci;
