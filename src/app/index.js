var route = require("express").Router();

route.use("/user", require("./user/user.route"));
route.use("/post", require("./post/post.route"));

module.exports = route;