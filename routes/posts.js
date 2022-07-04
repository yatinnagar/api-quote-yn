const express=require('express');
const Post =require('../models/Post')
const router=express.Router();
router.get('/',async (req,res)=>{
    try{
        const posts=await Post.find();
        res.json(posts);
    }catch(err)
    {
        res.json({message:err});
    }
});

module.exports=router;
