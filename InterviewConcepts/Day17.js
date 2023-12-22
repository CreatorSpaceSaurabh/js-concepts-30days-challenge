// ****Day16 - JS Array with in operator *****
const arr = [1, 2, 3, 4, 5];

// Identidy what will be the output of following consoles
console.log(1 in arr);
console.log(3 in arr);
console.log(5 in arr);

// Output -
// true
// true
// false

// Explaination - in operator checks for whether that key present in object or not
// Here in above example it gives an output as true, true and false because
// arrays stores values in object format, where indexes works as keys inside array
// that's why gives false for value 5

console.log(Object.keys(arr));
