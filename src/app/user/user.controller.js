var Controller  = require("../../_base/controller");
var userModel   = require("./user.model");

class UserController extends Controller{
    constructor(){
        super({model: userModel});
    }
}

module.exports = new UserController();