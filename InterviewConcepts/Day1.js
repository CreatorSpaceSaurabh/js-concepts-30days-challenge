// ****Day1*****
// Question 1 - What will be the output of this program and should turn this program to expected output
for (var index = 0; index < 10; index++) {
  setTimeout(() => {
    console.log(`Question - ${index}`);
  }, 0);
  // index++;
}
// Output : 10 10 10 10 10 10 10 10 10 10

// Expected Answer : Print all individual elements from 1 -10

// Solution 1 : Make variable declaration to let, it will make scope of varibale to "blocked scope"
// console.log(`\n Start of Answer 1`);
for (let index = 0; index < 10; index++) {
  setTimeout(() => {
    console.log(`Answer 1 - ${index + 1}`);
  }, 0);
}

// Solution 2 : Make use of JS IIFE inside each iteration of loop
// console.log(`\n Start of Answer 2`);
for (var i = 0; i < 10; i++) {
  (function (ele) {
    setTimeout(() => {
      let x = ele;
      console.log(`Answer 2 - ${x}`);
    }, 0);
  })(i);
}
