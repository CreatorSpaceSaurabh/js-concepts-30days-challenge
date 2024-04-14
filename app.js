require("./Index/index");

// ****Multi tenant****
require("./MultiTenant/connection");

// creating server for returning response for docker file
const express = require("express");
const app = express();
const helmet = require("helmet");
// enabling the Helmet middleware
app.use(helmet());
app.use("/api/getData", (req, res, next) => {
  res.status(200).json({
    sucess: true,
    data: [
      {
        id: 1,
        name: "Peter parker",
        age: 20,
      },
      {
        id: 2,
        name: "Bruce Banner",
        age: 25,
      },
      {
        id: 3,
        name: "Tony Stark",
        age: 45,
      },
      {
        id: 4,
        name: "Chris hemsworth",
        age: 50,
      },
    ],
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
