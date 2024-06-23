//Infinite currying in JS -
//add(1)(2)(3)…(n)()

function add(n) {
  return function (val) {
    if (val) {
      console.log(n, "---val--", val);
      return add(n + val);
    }
    return n;
  };
}

console.log(add(1)(2)(3)(4)(5)());
