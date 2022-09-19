var Model = require("../../_base/model");

class UserModel extends Model{
    constructor(){
        super({table: "user"});
    }
}

module.exports = new UserModel();