const roundToOneDecimal = function(number) {
  let result = 0;
  result = Math.round(number * 10) / 10;
  return result;
};

const convertToCelsius = function(degreesF) {
  let degreesC = (degreesF - 32) * (5 / 9);
  return roundToOneDecimal(degreesC);
};

const convertToFahrenheit = function(degreesC) {
  let degreesF = degreesC * (9 / 5) + 32;
  return roundToOneDecimal(degreesF);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
