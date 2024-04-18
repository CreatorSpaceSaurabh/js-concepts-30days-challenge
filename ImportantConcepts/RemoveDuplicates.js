// ***Remove duplicates from array***

let array = ["apple", "mango", "apple", "orange", "mango", "mango"];
console.log("Original Array =", array);
// method1
const removeDuplicates = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};

console.log("Remove duplicates 1st utility calling", removeDuplicates(array));

// method 2
const removeDuplicates2 = (arr) => {
  return [...new Set(arr)];
};
console.log("Remove duplicates 2nd utility calling", removeDuplicates(array));
