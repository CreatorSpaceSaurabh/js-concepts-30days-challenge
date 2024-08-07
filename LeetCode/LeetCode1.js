// ******Question 1 -  Word splitter **********
// let inputArray = ["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"]
// let result = hello, cat;

let finalResult = "";
// function canWordBreak(string, dictionary, result = "",
function canWordBreak(strArr) {
  let result = [];
  let string = strArr[0];
  let dictionary = strArr[1].split(",");
  console.log("string --", string);
  console.log("dictionary --", dictionary);
  if (string === "") {
    return result;
  }

  for (let i in string) {
    const substring = string.slice(0, parseInt(i) + 1);
    console.log("sub string --", substring);
    if (dictionary.includes(substring)) {
      const remainingString = string.slice(parseInt(i) + 1);
      // console.log("remainingString string --", remainingString, dictionary.join(","));
      console.log("Result --", result);
      finalResult = finalResult
        ? finalResult + ", " + substring
        : finalResult + substring;
      console.log("finalResult --", finalResult);
      const wordSegment = canWordBreak([remainingString, dictionary.join(",")]);
      if (wordSegment !== null) {
        return finalResult;
      }
    }
  }

  return null;
}

// let dictionary = ["geeks", "for", "forgeeks"];
// let string = "geeksforgeeks";
// let result = canWordBreak(string, dictionary);
let inputArray = ["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"];
let result = canWordBreak(inputArray);

if (result !== null) {
  // console.log(result.join(" "));
  console.log("result outside --", result);
} else {
  console.log("String cannot be broken.");
}

// Optimized way to solve this problem ==

function checkWord() {
  let inputArray = ["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"];
  let targetWord = inputArray[0];
  let words = inputArray[1].split(",");
  let wordSet = new Set(words);

  let result = null;

  for (let i = 1; i < targetWord.length; i++) {
    let prefix = targetWord.substring(0, i);
    let suffix = targetWord.substring(i);

    if (wordSet.has(prefix) && wordSet.has(suffix)) {
      result = prefix + ", " + suffix;
      break;
    }
  }

  console.log(result);
}
