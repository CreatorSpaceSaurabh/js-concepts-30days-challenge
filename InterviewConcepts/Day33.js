console.log(a);
var a = 2;

// Interview concepts
foo();
var foo = function () {
  var a = 2;
  console.log(a);
};

// Interview concepts
var value = 10;

let add = function (num) {
  return this.value + num;
};
let funcInvoObj = {
  value: 20,
  addFun: function () {
    console.log(add(4));
  },
};
funcInvoObj.addFun();

// Interview concepts
alert(null || 2 || undefined);

// Interview concepts
alert(1 && null && 2);
