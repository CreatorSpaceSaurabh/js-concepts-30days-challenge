// Find duplicate ids, add values and return result object
let arr1 = [
  { id: 1, value: 1 },
  { id: 2, value: 2 },
  { id: 3, value: 3 },
  { id: 1, value: 4 },
  { id: 2, value: 6 },
];

function combineAndSumValues(arr) {
  let result = {};

  arr.forEach((item) => {
    if (result[item.id]) {
      result[item.id].value += item.value;
    } else {
      result[item.id] = { id: item.id, value: item.value };
    }
  });

  return Object.values(result);
}

let result = combineAndSumValues(arr1);
console.log("Result ==", result);
