let arr = [5, 3, 8, 1, 0];

function filterRange(arr, a, b) {
  // added brackets around the expression for better readability
  return arr.filter((item) => a <= item && item <= b);
}

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (matching values)

console.log(arr); // 5,3,8,1,0 (not modified)
