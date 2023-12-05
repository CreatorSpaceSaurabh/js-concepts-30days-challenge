// ****Day3*****
// Question 1 - What will be the output of this program and should turn this program to expected output

let data = 100;
console.log(`Quetion - Output Value1 - ${data.toString()}`);
// console.log(`Quetion - Output Value2 - ${100.toString()}`);
// Output : SyntaxError: Invalid or unexpected token at line no. 6

// Expected Answer : Should resolve an error and print Output value 2

// Solution 1 : Wrap value inside parenthesis
let data2 = 200;
console.log(`Solution1 - Output Value1 - ${data2.toString()}`);
console.log(`Solution1 - Output Value2 - ${(200).toString()}`);

// Solution 2 : Use wrapping of value inside parenthesis
let data3 = 300;
console.log(`Solution2 - Output Value1 - ${data3.toString()}`);
console.log(`Solution2 - Output Value2 - ${+(300).toString()}`);
// console.log(`Solution2 - Output Value2 - ${300..toString()}`); //alternate solution
