//  ***Note : To run particular Day file, uncomment the require statement and run npm start***
// require("./InterviewConcepts/Day1");
// require("./InterviewConcepts/Day2");
// require("./InterviewConcepts/Day3");
// require("./InterviewConcepts/Day4");
// require("./InterviewConcepts/Day5");
// require("./InterviewConcepts/Day6");
// require("./InterviewConcepts/Day7");
// require("./InterviewConcepts/Day8");
// require("./InterviewConcepts/Day9");
// require("./InterviewConcepts/Day10");
// require("./InterviewConcepts/Day11");
// require("./InterviewConcepts/Day12");
// require("./InterviewConcepts/Day13");
// require("./InterviewConcepts/Day14");
// require("./InterviewConcepts/Day15");
// require("./InterviewConcepts/Day16");
// require("./InterviewConcepts/Day17");
// require("./InterviewConcepts/Day18");
// require("./InterviewConcepts/Day19");
// require("./InterviewConcepts/Day20");
// require("./InterviewConcepts/Day21");
// require("./InterviewConcepts/Day22");
// require("./InterviewConcepts/Day23");
// require("./InterviewConcepts/Day24");
// require("./InterviewConcepts/Day25");
// require("./InterviewConcepts/Day26");
// require("./InterviewConcepts/Day27");
// require("./InterviewConcepts/Day28");
// require("./InterviewConcepts/Day29");
// require("./InterviewConcepts/Day30");
// require("./InterviewConcepts/Day31");
// require("./InterviewConcepts/Day32");

// ****Important concepts******
// require("./ImportantConcepts/MethodOverriding");
// require("./ImportantConcepts/MethodOverloading");
// require("./ImportantConcepts/ArrayMethods");

// ******Leetcode ************
// require("./LeetCode/LeetCode1");
// require("./LeetCode/LeetCode2");
require("./LeetCode/LeetCode3");

// craeting server for returning response for docker file
const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
  res.status(200).json({
    sucess: true,
    data: [
      {
        id: 1,
        name: "Peter",
        age: 20,
      },
      {
        id: 2,
        name: "Bruce Banner",
        age: 25,
      },
      {
        id: 3,
        name: "Tony Shark",
        age: 40,
      },
      {
        id: 4,
        name: "Chris",
        age: 30,
      },
    ],
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
