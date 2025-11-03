const removeFromArray = function (array, ...num) {
  return array.filter((val) => !num.includes(val));
};

console.log(removeFromArray([1, 2, 3, 4], 3));
console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
