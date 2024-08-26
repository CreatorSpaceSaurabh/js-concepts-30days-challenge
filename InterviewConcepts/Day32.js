// ****Day 32 - JS - Function execution using Arguments***

// Question - Write a function sum - which perform the sum of any number of arguments

// const sum = (n1, n2) => {
//   return n1 + n2;
// };

// Solution 1 - Using spread parameters
const sum = (...nums) => {
  return nums.reduce((a, n) => {
    return a + n;
  }, 0);
};

console.log("Approach1 Dataset 1 - ", sum(2, 3));
console.log("Approach1 Dataset 2 - ", sum(2, 3, 4));
console.log("Approach1 Dataset 3 - ", sum(1, 2, 3, 4));
// console.log("Approach1 Dataset 4 - ", sum(10, 2, 30, 4));
console.log("Approach1 Dataset 5 - ", sum(1, 20, -3, 4, 5, -2));

// Solution 2 - Using spread arguments
// const sum2 = () => {
//   console.log("Arguments - ", arguments.length);
//   return [...arguments].reduce((a, n) => {
//     return a + n;
//   }, 0);
// };

// console.log("Approach2 Dataset 1 - ", sum2(2, 3));
// console.log("Approach2 Dataset 2 - ", sum2(2, 3, 4));
// console.log("Approach2 Dataset 3 - ", sum2(1, 2, 3, 4));
// console.log("Approach2 Dataset 4 - ", sum2(10, 2, 30, 4));
// console.log("Approach2 Dataset 5 - ", sum2(1, 20, -3, 4, 5, -2));
