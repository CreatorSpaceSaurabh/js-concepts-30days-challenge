// ****Day12 - JS Prototype, __proto__, shadowing*****
// Question - What will be the output of this program

const x = {};
x.__proto__.v1 = 20;
console.log(x.v1, x);
Object.prototype.v1 = ++x.v1;
console.log(x.v1, x);
console.log(x.v1 + Object.keys(x).length);

// Output -
// 20 {}
// 21 { v1: 21 }
// 22

// Answer based on 3 concepts -
// Concept explained - __proto__ (used for create link in object, in which we can assign values)
const animal = {
  name: "Tiger",
};

let bird = {};

bird.__proto__ = animal;
console.log(bird.name);
// after we can assign value to bird object - Conecpt of Shadowing
bird = {
  name: "Peacock",
};
console.log(bird.name);

// Output -
// Tiger
// Peacock
