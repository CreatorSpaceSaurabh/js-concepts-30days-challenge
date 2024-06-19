// 2nd largest element from array =
var arr = [1, 2, 6, 18, 11];

const findSecondLargestNum = (arr) => {
  let largest = arr[0];
  let secondLargest;
  const len = arr.length;
  for (let i = 0; i < arr.length; i++) {
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
  console.log("SecondLargest ==", secondLargest);
  return secondLargest;
};
findSecondLargestNum(arr);
