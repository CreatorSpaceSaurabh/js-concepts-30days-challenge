// ****Day2*****
// Question 2 - What will be the output of this program and should turn this program to expected output

let obj1 = { name: "John" };
let obj2 = obj1;
obj2.name = "Peter";
console.log(`Question output - ${obj1.name}`);

// Output : Peter

// Expected Answer : Avoid object referencing and it should print value "John"

// Solution 1 : Use ES6 destructuring while copying object to new one
let objA = { name: "John" };
let objB = { ...objA };
objB.name = "Peter";
console.log(`Solution 1 - ${objA.name}`);

// Solution 2 : Create copy by using Object.assign method
let objP = { name: "John" };
let objQ = Object.assign({}, objP);
objQ.name = "Peter";
console.log(`Solution 2 - ${objP.name}`);

// Solution 3 : Use JSON parse and stringify method to create copies
let objA1 = { name: "John" };
let objA2 = JSON.parse(JSON.stringify(objA1));
objA2.name = "Peter";
console.log(`Solution 3 - ${objA1.name}`);

// *** Note: This method introduced in Nodejs version 17 ***
// Solution 4 : Use structuredClone method
// let objX = { name: "John" };
// let objY = structuredClone(objX);
// objY.name = "Peter";
// console.log(`Solution 4 - ${objX.name}`);
