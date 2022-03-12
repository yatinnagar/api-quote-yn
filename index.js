const express=require('express');
const app=express();
const mongoose=require('mongoose');
const Post =require('./models/Post');
const bodyParser=require('body-parser');
require('dotenv/config');

app.use(bodyParser.json())


// conect to database
mongoose.connect(process.env.DB_CONNECTION,()=>console.log('connected to DB!'))
// Import routes
const postsRoute=require('./routes/posts')
app.use('/posts',postsRoute);
//Routes
app.get('/',(req,res)=>{
 
    Post.count().exec(function (err, count) {

        // Get a random entry
        var random = Math.floor(Math.random() * count)
      
        // Again query all users but only fetch one offset by our random #
        Post.findOne().skip(random).exec(
          function (err, result) {
            // Tada! random user
            console.log(result) 
            res.send(result)
          })
      })
// Post.findOne().then(posts=>{
//     if(!posts){
//         const error=new Error("No post is there to fetch");
//         error.statusCode=404;
//         throw(error);
//     }
//     return res.status(200).json(posts);
// }).catch(err=>console.log(err));
}
)

// Listening the app 
app.listen(3000);