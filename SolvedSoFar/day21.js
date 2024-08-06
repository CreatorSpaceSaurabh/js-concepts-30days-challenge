// Write a program to
// -remove duplicate
// -find sum excluding max value using different approach

let arr = [1, 2, 2, 3, 1, 5];
let uniqueArr = [...new Set(arr)];

// Approach 1 - Using sort method
let sortArr = uniqueArr.sort((a, b) => b - a);
sortArr.splice(0, 1);
let result = sortArr.reduce((a, b) => a + b, 0);
console.log("Result 1 ==", result);

// Approach 2 - Without using sort and splice method
let maxVal = Math.max(...uniqueArr);
let result2 = 0;

uniqueArr.forEach((item) => {
  if (item != maxVal) result2 += item;
});
console.log("Result 2 ==", result);
// Approach 3 - without using inbuilt method

let largest = arr[0];
let result3 = arr[0];
for (let i = 1; i < uniqueArr.length; i++) {
  let num = uniqueArr[i];
  if (num > largest) {
    largest = num;
  }
  result3 += num;

  if (i == uniqueArr.length - 1) {
    result3 -= largest;
  }
}

console.log("Result 3 ==", result3);
