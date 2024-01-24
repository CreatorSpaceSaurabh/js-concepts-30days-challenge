// ******Question 3 -  Find longest in words **********
// Have tge function longestWord(sen), take the sen parmeter being passed and return the longest word in the string.
// If there are two or more words that are the same length, return the first word from the string with that length.
// Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example: "Hello world123 567"

// Input : "fun&!! time"
// Output : time

// Input : "I love dog"
// Output : love

function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";
  let maxLength = 0;
  for (let i = 0; i < words.length; i++) {
    const word = words[i].replace(/[.,\#!%^&\*;"{}=\-_'~()]/g, "");
    if (word.length > maxLength) {
      longestWord = word;
      maxLength = word.length;
    }
  }
  return longestWord;
}

// const sentence = "fun&!! time";
// const sentence = "I love dogs";
const sentence =
  "This is a sample sentence with some long words like elephant and hippo.";
const longestWord = findLongestWord(sentence);
console.log("Longestword --", longestWord);
