//  Program to fetch following output - Find max of occurance

let stringInput = "aabbaabbccddee";
// a4 b4 c2 d2 e1
// output : 4

const findMaxOfOccurances = (str) => {
  if (!str.length) return 0;

  let hashMap = {};
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (hashMap[element]) {
      hashMap[element] += 1;
    } else {
      hashMap[element] = 1;
    }
  }
  let sortedValueArr = Object.values(hashMap).sort((a, b) => b - a);
  // console.log("sortedValueArr ==", sortedValueArr)
  return sortedValueArr[0];
};

let result = findMaxOfOccurances(stringInput);
console.log("Final result ==", result);
