// ***Remove duplicates from array***

let array = ["apple", "mango", "apple", "orange", "mango", "mango"];
console.log("Original Array =", array);
// *** method1 - Using filter method ***
const removeDuplicates = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};

console.log("Remove duplicates 1st utility calling", removeDuplicates(array));

// *** method 2 - Using Spread & Set method ***
const removeDuplicates2 = (arr) => {
  return [...new Set(arr)];
};
console.log("Remove duplicates 2nd utility calling", removeDuplicates(array));

// *** method 3 - Using forEach ***
const removeDuplicates3 = (arr) => {
  let unique = [];
  arr.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
};
console.log("Remove duplicates 3rd utility calling", removeDuplicates3(array));

// *** method 4 - IndexOf method ****

const removeDuplicates4 = (arr) => {
  let unique = [];
  for (i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
};
console.log("Remove duplicates 4th utility calling", removeDuplicates4(array));
