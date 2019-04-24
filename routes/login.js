const express=require("express")
const router=express.Router();
const pool=require("../pool")
const md5=require("md5")

router.get("/",(req,res)=>{
  var $uname=req.query.uname;
  var $upwd=md5(req.query.upwd);
  var sql="SELECT * FROM user_login_1 WHERE uname=? and upwd=?";
  pool.query(sql,[$uname,$upwd],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:1,msg:"登录成功",info:result});
      }else{
        res.send({code:-1,msg:"用户名或密码有误"});
      }
    })
})

module.exports=router;