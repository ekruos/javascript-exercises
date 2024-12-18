const convertToCelsius = function(degree) {
  result = (degree - 32) * 5/9;
  return +result.toFixed(1);
};

const convertToFahrenheit = function(degree) {
  result = 9/5 * degree + 32;
  return +result.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
