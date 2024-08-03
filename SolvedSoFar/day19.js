// Write a program to create string prototype method for removing duplicates from string

String.prototype.removeDuplicate = function () {
  let strArr = this.split(" ");
  let strSet = [...new Set(strArr)].join(" ");
  return strSet;
};

let str = "I am not gonna live forever, but I wanna live while I am alive";
str = str.removeDuplicate();
console.log("Result ==", str);
