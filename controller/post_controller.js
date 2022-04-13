const usersData=require("../models/user_model")

exports.createPost=(req,res)=>{
    const {post_text,image_url,email}=req.body;
    usersData.findOne({email:email}).exec((err,user)=>{
        if(user){
            user.posts.push(
                {
                    post_text:post_text,
                    image_url:image_url,
                    created_at:new Date()
                }
            )
            user.save().then(userData=>{
                return res.status(200).json({status:"success",message:"Post created"})
            }).catch(err=>{
                return res.status(200).json({status:"failure",message:"Failed to create a post.Try again...",err:err})
            })
        }
        else{
            return res.status(200).json({status:"failure",message:"Some network error occured.Check your connection and try again..."})
        }
    })
}