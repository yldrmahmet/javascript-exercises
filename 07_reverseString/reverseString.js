const reverseString = function (string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
};

console.log(reverseString("ahmet"));

// a h m e t

// Do not edit below this line
module.exports = reverseString;
