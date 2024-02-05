// ******Infinite currying in Javascript********
// normal currying
function mul(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}

const simpleCurrResult = mul(2)(3)(4);
console.log("Simple currying result--", simpleCurrResult);

// Advance concept - Infinte currying
function multiply(x) {
  return function (y) {
    if (y) {
      return multiply(x * y);
    } else {
      return x;
    }
  };
}

const infiniteCurrResult = multiply(2)(3)(4)(5); //till infinite level
console.log("Infinite currying result--", infiniteCurrResult());
