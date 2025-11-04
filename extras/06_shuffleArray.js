let arr = [1, 2, 3, 4, 5];

const shuffle = (arr) => {
  const randomArr = [];
  while (randomArr.length !== 5) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let randomNumber = arr[randomIndex];
    if (!randomArr.includes(randomNumber)) {
      randomArr.push(randomNumber);
    }
  }
  console.log(randomArr);
};

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
