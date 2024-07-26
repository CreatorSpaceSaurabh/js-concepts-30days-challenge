// Program to find highest consecutive difference sequence in an input array

let inputArray = [1, 2, 3, 11, 12, 13, 14, 115, 116, 117, 118, 119];
//Max of sequences -  3 4 5
// output = 5

const findHighestConsecutiveSequence = (arr) => {
  if (arr.length && arr.length > 2) {
    let num = arr[0];
    let count = 1;
    let differenceArr = [];
    for (let i = 1; i < arr.length; i++) {
      let nextNum = arr[i];
      let diff = nextNum - num;

      if (diff == 1) {
        count++;
        if (i == arr.length - 1) {
          differenceArr.push(count);
        }
      } else {
        differenceArr.push(count);
        count = 1;
      }
      num = nextNum;
    }

    return Math.max(...differenceArr);
  } else {
    return 0;
  }
};

const result = findHighestConsecutiveSequence(inputArray);
console.log("Maximum sequence ==", result);
