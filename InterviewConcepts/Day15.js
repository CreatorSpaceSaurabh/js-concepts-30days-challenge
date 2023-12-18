// ****Day15 - map, sort, Math.random*****
// Write a function which will shuffle the elements in the array and return new array everytime
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const result1 = shuffle(arr);
// const result2 = shuffle(arr);
// const result3 = shuffle(arr);

// console.log(
//   `Final output - result1 - ${result1}, \n result2 - ${result2}, \n result3 - ${result3}`
// );

// Solution -

const shuffle = (data) => {
  return data
    .map((a) => {
      return { value: a, random: Math.random() };
    })
    .sort((a, b) => {
      return a.random - b.random;
    })
    .map((d) => {
      return d.value;
    });
};

const arr = [1, 2, 3, 4, 5, 6, 7];
const result1 = shuffle(arr);
const result2 = shuffle(arr);
const result3 = shuffle(arr);

console.log(
  `Final output - result1 - ${result1}, \n result2 - ${result2}, \n result3 - ${result3}`
);
