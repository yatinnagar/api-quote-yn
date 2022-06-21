const mongoose=require('mongoose');
const PostSchema=mongoose.Schema({
    quoteText:{
        type:String,
        required:true
     } ,
     personName:{
        type:String,
        required:true
     },
    topics:{
        type:String
    },
     wikiUrl:{
        type:String
        
     } ,
    personImgUrl:{
       type:String
       
    } 
});
module.exports=mongoose.model('posts',PostSchema)
