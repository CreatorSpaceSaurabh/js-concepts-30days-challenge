// ****Day 28 - JS - Inheritance ****
// Program to perform inheritance , child class inherited from parent class and accessing methods of parent class

// Parent/Base class
class Animal {
  constructor(legs) {
    this.legs = legs;
  }
  walk() {
    console.log("Walking on " + this.legs + " legs");
  }
}

// Child/Derived class
class Bird extends Animal {
  constructor(legs) {
    super(legs);
  }
  fly() {
    console.log("Flying all over the sky");
  }
}

let bird = new Bird(4);

bird.walk();
bird.fly();

// Output -
// Walking on 4 legs
// Flying all over the sky
