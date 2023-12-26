// ****Day22 - JS - Convert negative values to positive****

const num = -30;

//  Solution 1 - custom function
const checkNegative = (n) => {
  if (n < 0) return n * -1;
};

console.log("Solution 1 - custom method ", checkNegative(num));

// Solution 2 - Using Math function
console.log("Solution 2 - Math function  ", Math.abs(num));
