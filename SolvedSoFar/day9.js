// Input - ["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"]
// Output should be - hello, cat;

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
