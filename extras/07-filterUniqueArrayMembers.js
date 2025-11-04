function unique(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let flag = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        flag++;
      }
    }
    flag === 0 && newArray.push(arr[i]);
  }

  return newArray;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "procan",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
  "procan",
  "procan",
  "Hare",
];

console.log(unique(strings)); // Hare, Krishna, :-O
