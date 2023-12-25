// ****Day21 - JS - Printing Alphabets A-Z using ASCII characters****

// Solution - Using for Each loop and string - fromCharCode method
const arr = [...new Array(26)];

let start = 65;

arr.forEach((ele, index) => {
  let charFromCode = String.fromCharCode(start++);
  console.log("Printing Character -", charFromCode);
});
