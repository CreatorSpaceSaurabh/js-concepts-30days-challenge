// ****Day19 - JS Unique array element*****
const arr = [1, 2, 3, 3, 2, 4, 5, 6];

// Solution1 - Using custom method
const findUniqueArray = (data) => {
  let uniqueArray = [];
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (uniqueArray.indexOf(element) === -1) {
      uniqueArray.push(element);
    }
  }
  return uniqueArray;
};
console.log("\n UniqueArr1 - ", findUniqueArray(arr));

// Solution 2 - Using set method
const uniqueArr2 = [...new Set(arr)];
console.log("\n UniqueArr2 - ", uniqueArr2);
