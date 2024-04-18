// ***Remove duplicates from array***

let array = ["apple", "mango", "apple", "orange", "mango", "mango"];

// method1
const removeDuplicates = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};

console.log("Remove duplicates utility calling", removeDuplicates(array));
