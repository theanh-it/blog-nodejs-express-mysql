var route = require("express").Router();
var controller = require("./post.controller");
var middleware = require("./post.middleware");

route.get("/", controller.index);
route.get("/:id", controller.show);
route.post("/", middleware.create, controller.create);
route.post("/:id", controller.edit);
route.delete("/:id", controller.delete);

module.exports = route;