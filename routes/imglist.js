const express=require("express")
const router=express.Router();

router.get("/",(req,res)=>{
  var rows=[
    {pid:1,img_url:"http://127.0.0.1:3100/img/index/carousel1.jpg"},
    {pid:2,img_url:"http://127.0.0.1:3100/img/index/carousel2.jpg"},
    {pid:3,img_url:"http://127.0.0.1:3100/img/index/carousel3.jpg"}
  ];
  res.send({code:1,data:rows})
})

module.exports=router;