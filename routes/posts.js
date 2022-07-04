const express=require('express');
const Post =require('../models/Post')
const router=express.Router();
router.get('/',async (req,res)=>{
    try{
        let charLimit=parseInt(req.query.char_limit);
        if(charLimit){
          
            Post.find({}).where(`this.quoteText.length<=${charLimit}`).limit(1).exec((err,result)=>{
              if(err){
              return res.status(501).json({
              error:"somthing went wrong!"
              })
              } else{
              
                  return res.json(result);
              }
            })
            
        } else {
            
         var random = Math.floor(Math.random() * count)
        
        Post.findOne().skip(random).exec(
          function (err, result) {
           return res.send(result)
          });
        
        }
        
    }catch(err)
    {
        res.json({message:err});
    }
});


module.exports=router;
