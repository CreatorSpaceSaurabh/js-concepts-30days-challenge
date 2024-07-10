// Problem defination - Find 1st non repetivite char from string
let input = "CreatorSpace"; // 'saurabh'
// output = 'C' , output = 's'

const findFirstNonRepetitiveLetter = (str) => {
  let hashMap = {};
  let countArray = [];
  for (let char of str) {
    if (!hashMap[char]) {
      hashMap[char] = 1;
      countArray.push(char);
    } else {
      hashMap[char]++;
    }
  }
  // console.log("countArray ==", countArray)
  // direct way
  // return countArray[0]

  // Indirect way
  for (let char of countArray) {
    if (hashMap[char] === 1) {
      let result = char;
      return result;
    }
  }
  return hashMap;
};

const result = findFirstNonRepetitiveLetter(input);
console.log("Result ==", result);
