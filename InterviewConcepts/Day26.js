// ****Day 26 - JS - ARRAY problems****

// #Question1 - Get the last element of an array using 2 differnet approach
const arr = ["C", "R", "E", "A", "T", "O", "R"];

// Solution 1 - using length
console.log("Q1 - Solution 1 - ", arr[arr.length - 1]);

// Solution 2 - using at method
console.log("Q1 - Solution 2 - ", arr.at(-1));

// #Question2 - Check if the value T exists in an array or not
const isExist = arr.some((x) => x === "T");
console.log("Q2 - Solution 1 - ", isExist);
