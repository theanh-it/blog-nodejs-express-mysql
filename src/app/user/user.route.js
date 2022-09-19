var route = require("express").Router();
var controller = require("./user.controller");
var middleware = require("./user.middleware");

route.get("/", controller.index);
route.get("/:id", controller.show);
route.post("/", middleware.create, controller.create);
route.post("/:id", controller.edit);
route.delete("/:id", controller.delete);

module.exports = route;