const sumAll = function (num1, num2) {
  // for
  if (num1 < 0 || num2 < 0) return "ERROR";
  if (parseInt(num1) !== num1 || parseInt(num2) !== num2) return "ERROR";
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
