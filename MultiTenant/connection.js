// ****Creating tenants pool utility for creating connections for MongoDB****

const mongoose = require("mongoose");
const tenant = {
  tenant1: {
    host: "mongodb://127.0.0.1:27017/Tenant1DB",
    user: "Tenant1DB",
    pass: "pass@123",
  },
  tenant2: {
    host: "mongodb://127.0.0.1:27017/Tenant2DB",
    user: "Tenant2DB",
    pass: "pass@123",
  },
};
let tenantDBDetails = {};

mongoose.Promise = global.Promise;

function createConnection(name) {
  var options = {
    // user: tenant[name].user,
    // pass: tenant[name].pass,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  db = mongoose.createConnection(tenant[name].host, options);
  db.on("error", console.error.bind(console, "connection failed"));
  db.once("open", function () {
    console.log("Database connected successfully!", name);
  });
  return db;
}

Object.keys(tenant).forEach(function (key) {
  tenantDBDetails[key] = createConnection(key);
});

module.exports = tenantDBDetails;
