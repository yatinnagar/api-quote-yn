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
router.post('/',async (req,res)=>{
    const post=new Post({
        quoteText:req.body.quoteText,
        personName:req.body.personName,
        wikiUrl:req.body.wikiUrl,
        book:{
            bookName:req.body.book.bookName,
            bookUrl:req.body.book.bookUrl
        },
        personImg:req.body.personImg

    })
  try{ const savedPost=await post.save()
    res.json(savedPost)}
    catch(err){
        res.json({message:err});
    }
})
module.exports=router;