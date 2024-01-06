// *****Method Overloading JS******
// create parent class with property(variable) and the methods
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
