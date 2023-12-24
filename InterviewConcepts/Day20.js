// ****Day20 - JS Inserting elements in an Array using different approach****
const arr = ["a", "b", "c"];

// Insert d at 0th position
// Output should look like ["d", "a", "b", "c"]

// Solution 1 - Using unshift method
const resultArr1 = arr.unshift("d");
console.log("Solution 1 -", arr);

const getToPreviousArr = arr.splice(0, 1);
console.log("Original Array -", arr);

// Solution 2 - Using splice method
const resultArr2 = arr.splice(0, 0, "d");
console.log("Solution 2 -", arr);

const getToPreviousArr2 = arr.splice(0, 1);
console.log("Original Array -", arr);

// Solution 3 - Using destructuring method
const resultArr3 = ["d", ...arr];
console.log("Solution 3 -", resultArr3);
