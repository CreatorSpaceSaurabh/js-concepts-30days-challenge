// ****Day 31 - JS - Different approaches to run IIFE***

// Solution 1 -

// (function () {
//   console.log("Here's executing of 1st solution");
// }());

// Solution 2 -
(function () {
  console.log("Here's executing of 2nd solution");
})();

// Solution 3 -
!(function () {
  console.log("Here's executing of 3rd solution");
})();

// Solution 4 -
+(function () {
  console.log("Here's executing of 4th solution");
})();
