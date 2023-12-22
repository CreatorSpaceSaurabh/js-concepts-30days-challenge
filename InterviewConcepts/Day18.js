// ****Day18 - JS Merging array *****
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Merge 2 arrays
// Two ways to merge it
const merged1 = arr1.concat(arr2);
const merged2 = [...arr1, ...arr2];
console.log("Merged1 - ", merged1);
console.log("Merged2 - ", merged2);
