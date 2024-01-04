// *****Method Overriding JS******
// create parent class with property(variable) and the methods , inherit parent class into child class, create same method and perform overriding by creating reference variable(objects)

class Car {
  speed = 100;
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  startEngine() {
    console.log("Starting engine for ..Car");
  }
}

class MG extends Car {
  // overridden method
  startEngine() {
    console.log("Starting engine for ..MG");
  }

  // new method
  autoDriving() {
    console.log("MG autodriving");
  }
}

// creating reference variables (objects)
const mg = new MG();
mg.startEngine();
console.log("Speed - ", mg.speed);
mg.autoDriving();

const car = new Car();
car.startEngine();
