// ****Day 29 - JS - Add new element to array at 2nd position using different approach ****

let arr = [2, 5, 6, 8, 9];

// Solution 1 - use direct index replace
arr[1] = 3;
console.log("Solution 1 - ", arr);
// Output - [ 2, 3, 6, 8, 9 ]  - it will update existing array

// Solution 2 - Using splice method
arr.splice(1, 1, 4);
console.log("Solution 2 - ", arr);
// Output - [ 2, 3, 5, 6, 8, 9 ] - it will update existing array

// Solution 3 - Using with method (introduced in 2023)
const arr2 = arr.with(1, 7);
console.log("Solution 2 - ", arr2);
