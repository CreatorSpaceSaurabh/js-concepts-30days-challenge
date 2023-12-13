// ****Day 10*****
// Question  - Write a JS program to perform multiplication using higher order function
function multiply(arg1) {
  return function (arg2) {
    console.log(`Here printing arg1 - ${arg1} & arg2- ${arg2}`);
    return arg1 * arg2;
  };
}
let getMultiplication = multiply(4);
console.log(getMultiplication(3));

// Solution 2 - Call using IFFE
console.log(multiply(2)(6));
