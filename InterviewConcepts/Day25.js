// ****Day 25 - JS - Convert Snake Case String to Sentence case****
// input - welcome_coders
// output - Welcome codes

const str = "welcome_coders";

const toSentenceCase = (strng) => {
  let removedUnderscoreStr = strng.replace("_", " ");
  let finalStr =
    removedUnderscoreStr.charAt(0).toUpperCase() +
    removedUnderscoreStr.substring(1);
  return finalStr;
};

console.log("To Sentence Case- ", toSentenceCase(str));
