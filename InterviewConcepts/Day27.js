// ****Day 27 - JS - Check palindrome or not****

const str = "nitin";

// solution
const originalStrArr = str.split("");
const reverseStr = str.split("").reverse().join();
console.log("Compare both strings ()-", originalStrArr == reverseStr);
