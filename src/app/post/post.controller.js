var Controller  = require("../../_base/controller");
var postModel   = require("./post.model");

class PostController extends Controller{
    constructor(){
        super({model: postModel});
    }
}

module.exports = new PostController();