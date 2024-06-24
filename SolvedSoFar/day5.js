// Flatten input array , without using inbuilt methods
let arr = [1, 2, [3, 4], [5, [6, 7]]];

let resultArray = [];
function flatArray(inputArray) {
  inputArray?.map((a) => {
    if (Array.isArray(a)) {
      flatArray(a);
    } else {
      resultArray.push(a);
      return a;
    }
  });
}

let finalResult = flatArray(arr);
console.log("Final result ==", resultArray);
