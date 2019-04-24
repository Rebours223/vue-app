const express=require("express")
const router=express.Router();
const pool=require("../pool")

router.get("/",(req,res)=>{
  var $uid=req.query.uid;
  var sql="SELECT * FROM user_info WHERE uid=?";
  pool.query(sql,[$uid],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:1,data:result});
      }else{
        res.send({code:-1,msg:"用户名或密码有误"});
      }
    })
})

module.exports=router;