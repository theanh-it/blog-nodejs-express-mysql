require('dotenv').config();
const os = require("os");
process.env.UV_THREADPOOL_SIZE = os.cpus().length;
global.DB = require("./databases/mysql");

const port = process.env.PORT || 3000;
const express   = require("express");
const app       = express();
const fileUpload= require("express-fileupload");

app.use(fileUpload());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(require("./cors"));
app.use("/", require("./app"));

app.listen(port, ()=>{
    console.log("server runing with: http://localhost:"+port);
});