let arr = [5, 3, 8, 1];

function filterRangeInPlace(array, lower, higher) {
  arr = array.filter((item) => item >= lower && item <= higher);
}

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log(arr); // [3, 1]
