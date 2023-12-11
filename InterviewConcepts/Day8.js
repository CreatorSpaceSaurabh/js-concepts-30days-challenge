// ****Day8*****
// Question  - Write a JS program to print expected output

let str = "32400121200";
// expected output - 00003241212

// Solution - Firstly segregate zero and non zero string, then performs concatenation

let strLen = str.length; //11
let strZeros = "";
let nonZeroStr = "";
for (let i = 0; i < strLen; i++) {
  let char = str.charAt(i);
  if (parseInt(char) == 0) {
    strZeros = strZeros + char;
  }
}
nonZeroStr = str.replace(/0/g, "");
let finalStr = strZeros + nonZeroStr;
console.log("Output strZeros & nonZeroStr =", strZeros, nonZeroStr);
console.log("Final output string =", finalStr);
