// 2nd largest element from array =
let inputArray = [1, 2, 6, 18, 11];

const findSecondLargestNum = (arr) => {
  let largest = arr[0];
  let secondLargest = 0;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (i < len) {
      const ele = arr[i + 1];
      if (largest < ele) {
        largest = ele;
        secondLargest = largest;
      } else {
        largest = largest;
        secondLargest = ele;
      }
    }
  }
  // console.log("SecondLargest ==", secondLargest);
  return secondLargest;
};
const result = findSecondLargestNum(inputArray);
console.log("Result ==", result);
