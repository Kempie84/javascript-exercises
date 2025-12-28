const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((acc, current) => acc + current, 0);
};

const multiply = function(array) {
	return array.reduce((acc, current) => acc * current);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(number) {

  if (number === 0) {
    return 1;
  };

  let arr = [];
	while (number > 0) {
    arr.push(number);
    number --;
  };

  return arr.reduce((acc, curr) => acc * curr);
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
