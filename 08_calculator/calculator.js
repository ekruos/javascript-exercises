const add = function(...args) {
	let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	if (arr.length === 0) {
    return 0;
  } else {
    result = 0;
    for (const item of arr) {
      result += item;
    }
    return result;
  }
};

const multiply = function(args) {
  let product = 1;
  for (let item of args) {
    product *= item;
  } 
  return product;
};

const power = function(a,b) {
	return a  ** b;
};

const factorial = function(number) {
	if (number === 0) {
    return 1;
  } else {
    result = 1;
    for (i = 1; i <= number; i++) {
      result *= i;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
