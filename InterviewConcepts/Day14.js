// ****Day14 - Set*****
// Question - What will be the output of this program

const obj = {};
const set1 = new Set();
const set2 = new Set();
set1.add(obj);
set1.add(obj);

set2.add({});
set2.add({});

console.log(set1.size);
console.log(set2.size);

// Output -
// 1
// 2

// Explaination - at line 7&8 we are adding obj 2 times which points to same object reference, so where as at line 10 & 11, we are adding
// blank objects which points to differnt objects and reference to in console it prints value 1 and 2 respectively
