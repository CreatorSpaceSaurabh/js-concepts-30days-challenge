// *****Repeat string using - Array & string method JS******

// Repeat given string N times input string
// Input : "JS1_"
// Repeat count : 5
// Output : "JS1_JS1_JS1_JS1_JS1_"

// Solution 1 - Array fill method
const result1 = Array(5).fill("JS1_").join("");
console.log("Solution 1 -", result1);

// Solution 2 - string repeat method
const result2 = "JS_".repeat(5);
console.log("Solution 2 -", result2);
