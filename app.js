require("./Index/index");

// creating server for returning response for docker file
const express = require("express");
const app = express();
const helmet = require("helmet");
const constantEnums = require("./constantEnums");
// enabling the Helmet middleware
app.use(helmet());
// enabling rate limiter (global scope)
const rateLimitMiddleware = require("./ImportantConcepts/RateLimiter");
app.use(rateLimitMiddleware);

app.use("/api/getData", (req, res, next) => {
  res.status(200).json({
    sucess: true,
    data: constantEnums.data,
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
