// program to write find number of vowels in the word
let sentence = "Welcome to the digital playground";
// output - 11
const vowels = ["a", "e", "i", "o", "u"];

const vowelCounter = (str) => {
  try {
    if (!str.length) {
      return 0;
    }
    let count = 0;
    str
      .toLowerCase()
      .split("")
      .forEach((ele) => {
        if (vowels.includes(ele)) {
          count++;
        }
      });
    return count;
  } catch (error) {
    return error.message;
  }
};

let finalResult = vowelCounter(sentence);
console.log("Vowels count in String : ", finalResult);
