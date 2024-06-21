// Searching Challenge
// Have the function SearchingChallenge (str) take the str parameter being passed and return 1 #ofBrackets if the brackets are correctly matched and each one is accounted for. Otherwise return 0.
// For example: if str is "(Hi everyone, [CreatorSpace] this side)" then the output should be 1 3 because all the brackets are matched and there are 3 pairs of brackets, but if str is "((hello [world])" the the output should be 0 because the brackets do not correctly match up. Only "C. ). T. and T" will be used as brackets. If str contains no brackets return 1.

function MultipleBrackets(str) {
  let squL = 0;
  let squR = 0;
  let curvL = 0;
  let curvR = 0;
  let len = str.length;
  for (let i = 0; i < len; i++) {
    if (str[i] === "(") {
      curvL++;
    }
    if (str[i] === ")") {
      curvR++;
    }
    if (str[i] === "[") {
      squL++;
    }
    if (str[i] === "]") {
      squR++;
    }
  }
  if (curvL === 0 && curvR === 0 && squL === 0 && squR === 0) {
    return 1;
  } else if (curvL === curvR && squL === squR) {
    return 1 + " " + (curvL + squL);
  } else return 0;
}

const result = MultipleBrackets("(Hi everyone, [CreatorSpace] this side)");
console.log("Result ==", result);
