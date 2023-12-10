// ****Day7*****
// Question  - Returns the inner aray element into an single array
const questionArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// Expected Answer : [1,2,3,4,5,6]

// Solution - Make the use of aray flat method
// array.flat(depth) where depth is optional
const flatArray = questionArray.flat();
console.log(flatArray);
