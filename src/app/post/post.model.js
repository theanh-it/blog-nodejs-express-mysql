var Model = require("../../_base/model");

class UserModel extends Model{
    constructor(){
        super({table: "post"});
    }
}

module.exports = new UserModel();