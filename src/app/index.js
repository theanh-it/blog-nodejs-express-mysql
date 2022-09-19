var route = require("express").Router();

route.use("/user", require("./user/user.route"));

module.exports = route;