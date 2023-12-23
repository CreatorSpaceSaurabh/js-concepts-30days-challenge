// ****Day19 - JS Unique array element*****
const arr = [1, 2, 3, 3, 2, 4, 5, 6];

// Solution 2 - Using set method
const uniqueArr2 = [...new Set(arr)];
console.log("\n UniqueArr2 - ", uniqueArr2);
