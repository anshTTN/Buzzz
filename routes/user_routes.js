const express=require("express")
const router=express()

const userLoginController=require('../controller/user_controller')

router.post("/googleAuth",userLoginController.googleLogin);

router.post("/register",userLoginController.userRegistration);

router.post("/login",userLoginController.userLogin);

module.exports=router;