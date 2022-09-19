var route = require("express").Router();
var controller = require("./post.controller");

route.get("/", controller.index);
route.get("/:id", controller.show);
route.post("/", controller.create);
route.post("/:id", controller.edit);
route.delete("/:id", controller.delete);

module.exports = route;