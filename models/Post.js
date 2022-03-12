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
     wikiUrl:{
        type:String
        
     } ,
    book:{
        bookName:{
            type:String
            
         },
        bookUrl:{
            type:String
            
         }
      
       
    } ,
    personImg:{
       type:String
       
    } 
});
module.exports=mongoose.model('posts',PostSchema)