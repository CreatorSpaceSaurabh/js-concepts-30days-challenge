// Find out missing number from range 1 to 10
let numbers = [1, 2, 3, 4, 5, 6, 8, 9, 10];

const findMissing = (arr) => {
  let end = Math.max(...arr);
  console.log("end ==", end);
  let missing;
  for (let i = 0; i < end; i++) {
    const ele = arr[i];
    if (!arr.includes(i)) {
      missing = i;
    }
  }
  return missing;
};

const result = findMissing(numbers);
console.log("Result ==", result);
