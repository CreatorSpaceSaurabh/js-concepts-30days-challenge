// ****Day6*****
// Question  - Split the given string into an array of individual values
let stringValue = "eat,sleep;code:repeat";
const arrayOfString = stringValue.split(",");
console.log("Output -", arrayOfString);

// Output - [ 'eat', 'sleep;code:repeat' ]

// Expected Answer : Array should contain seperated elements like - ['eat','sleep','code','repeat']

// Solution - Make the use of regex patterm with split method
const splittedArray = stringValue.split(/[,;:]/);
console.log("Solution Output -", splittedArray);
