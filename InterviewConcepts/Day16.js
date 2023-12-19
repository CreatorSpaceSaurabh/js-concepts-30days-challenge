// ****Day16 - Custom method for type checking*****
// Write a function that will check addition of 2 number arguments, if other type of argument has passed , then have to Throw the error
// Acceptance criteria -
// i) Make sure only the numbers are passed in add function
// ii) Throw error if any other data type has passed

const add = (n1, n2) => {
  return n1 + n2;
};

console.log(add("a", 30));
console.log(add(30, 30));

// Solution -

const checkType = (...args) => {
  for (const x of args) {
    if (typeof x !== "number") {
      throw new Error("Invalid type of argument");
    }
  }
};

const add2 = (n1, n2) => {
  checkType(n1, n2);
  return n1 + n2;
};

console.log(add2("b", 30));
console.log(add2(30, 30));
