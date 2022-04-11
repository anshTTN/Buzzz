const express=require("express")
const router=express()

const userLoginController=require('../controller/user_controller')

router.post("/googleAuth",userLoginController.googleLogin);

router.post("/register",userLoginController.userRegistration);

router.post("/login",userLoginController.userLogin);

router.post("/verifyEmail",userLoginController.verifyEmail);

router.post("/forgotPassword",userLoginController.changePassword);

module.exports=router;