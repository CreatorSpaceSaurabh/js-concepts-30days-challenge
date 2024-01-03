// ****Day 30 - JS - Switch case ***

// Function that will perform arithmatic operation based on different type of operation values

const performOperation = (key, data) => {
  let result;
  switch (key) {
    case "add":
      result = data.op1 + data.op2;
      break;

    case "sub":
      result = data.op1 - data.op2;
      break;

    case "mul":
      result = data.op1 * data.op2;
      break;

    case "div":
      result = data.op1 / data.op2;
      break;

    case "mod":
      result = data.op1 % data.op2;
      break;

    default:
      result = "Invalid operation";
      break;
  }
  return result;
};

const operands = { op1: 40, op2: 30 };
console.log("Addition - ", performOperation("add", operands));
console.log("Subtraction - ", performOperation("sub", operands));
console.log("Multiplication - ", performOperation("mul", operands));
console.log("Division - ", performOperation("div", operands));
console.log("Modulus - ", performOperation("mod", operands));
