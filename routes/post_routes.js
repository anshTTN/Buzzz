const express=require("express")
const router=express();
const postController=require('../controller/post_controller');


router.post("/createPost", postController.createPost);

module.exports=router;