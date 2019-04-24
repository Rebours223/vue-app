const express=require("express")
const router=express.Router();
const pool=require("../pool");
router.get("/",(req,res)=>{
  var sql=`select * from index_product order by pid`;
  pool.query(sql,[],(err,result)=>{
  if(err) console.log(err);
  res.send(result);
  });
})
module.exports=router;