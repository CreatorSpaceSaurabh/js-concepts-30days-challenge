// ****Day5*****
// Question  - Stop execution of following program - SetInterval
let count = 0;

// setInterval(() => {
//   console.log("interval running", count++);
// }, 1000);

// solution - To stop interval, need to store interval inside variable id(interval id), then have to perform check (stop condition) and clear that interval by id

let intervalId = setInterval(() => {
  console.log("interval running", count++);
  if (count > 5) {
    clearInterval(intervalId);
  }
}, 1000);
