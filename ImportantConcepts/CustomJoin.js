// *******Custom joins using prototype**********

Array.prototype.customJoin = function (seperator = ",") {
  let result = "";
  for (let i = 0; i < this.length; i++) {
    result += this[i];
    if (i !== this.length - 1) {
      result += seperator;
    }
  }
  return result;
};

const myArr = ["creator", "space", "india"];
const joinedArr = myArr.customJoin(" | ");
console.log("Join using custom join => ", joinedArr);
