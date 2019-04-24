const express=require("express")
const router=express.Router();
const pool=require("../pool")
router.get("/",(req,res)=>{
  var pid=req.query.pid;
  var output={
    pic:[],
    product:{}
  }
  //var output={product:[],pic:[]}
  if(pid!==undefined){
    if(pid==null){
      pid=1;
    }
    var sql=`select * from product_pic where pid=?`;
    pool.query(sql,[pid],(err,result)=>{
      if (err) throw err;
      output.pic=result;
      })
    var sql=`select * from product where pid=?`;
    pool.query(sql,[pid],(err,result)=>{
      if (err) throw err;
      output.product=result;
      res.send(output);
    })
  }
  }
)
module.exports=router;