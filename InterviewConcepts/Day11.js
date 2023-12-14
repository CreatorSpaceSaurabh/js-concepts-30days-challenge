// ****Day11 - Object method chaining*****
// Question - What will be the output of this program and should turn this program to expected output

let obj1 = {
  result: 0,
  add: function (n1, n2) {
    return (this.result = n1 + n2);
  },
  multiply: function (num) {
    return (this.result = num * this.result);
  },
  subtract: function (num) {
    return (this.result = this.result - num);
  },
};
obj1.add(2, 3); //5
obj1.multiply(3); //15
obj1.subtract(2); //13
console.log(`Output - ${obj1.result}`);

// Output - 13

// Expected Answer : Improve program in such way that instead of seperate calling obj1 method, should call all the object methods in chaining and output the result
// like this - obj1.add(2,3).multiply(3).subtract(2)

// Solution - Using object method chaining
let obj2 = {
  result: 0,
  add: function (n1, n2) {
    this.result = n1 + n2;
    return this;
  },
  multiply: function (num) {
    this.result = num * this.result;
    return this;
  },
  subtract: function (num) {
    this.result = this.result - num;
    return this;
  },
};

obj2.add(2, 3).multiply(3).subtract(2);
console.log(`Output - ${obj2.result}`);
