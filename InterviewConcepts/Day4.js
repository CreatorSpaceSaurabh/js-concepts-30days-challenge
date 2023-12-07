// ****Day4*****
// Question  - Execute the function without calling its name
function showResult() {
  console.log("Here executing function");
}
const methodCall = "showResult";

//Note: showResult(); //not allowed

// Solution 1 : Wrap functional calling inside square bracket to make call
// eval("methodCall"); // deprecated and not recommanded for use
global[methodCall] = showResult;
global[methodCall]();

// Solution 2 : Assign function to another variable and make call
// const callFunction = this[methodCall];
// // callFunction();
// console.log("global2", callFunction);
