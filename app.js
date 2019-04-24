//使用express构建web服务器 --11:25
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors'); 
/*引入路由模块*/
const Index=require("./routes/index")
const Details=require("./routes/details")
const Login=require("./routes/login")
const Imglist=require("./routes/imglist")
const User=require("./routes/user")

var server = express();
server.listen(3100);
server.use(cors({
  //注意,localhost和127.0.0.1完全不同,小心前端vue框架的实际地址
  origin:['http://127.0.0.1:5500','http://localhost:5500'],
  origin:['http://127.0.0.1:8080','http://localhost:8080'],
  credentials:true
}))
//使用body-parser中间件
server.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
server.use(express.static('public'));
/*使用路由器来管理路由*/
server.use("/index",Index);
server.use("/details",Details);
server.use("/login",Login);
server.use("/imglist",Imglist);
server.use("/user",User);
