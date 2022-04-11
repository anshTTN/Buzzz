const express=require("express")
const router=express()
const _ = require('lodash');
const userLoginController=require('../controller/user_controller');
const auth=require('../controller/auth');
const userFriendsController = require('../controller/friends_controller');



router.get("/searchusers/:name", userFriendsController.searchUsers);

router.post("/getUser",auth.verifyUsers, userLoginController.getUser);

router.post("/googleAuth",userLoginController.googleLogin);

router.post("/register",userLoginController.userRegistration);

router.post("/login",userLoginController.userLogin);

router.post("/verifyEmail",userLoginController.verifyEmail);

router.post("/forgotPassword",userLoginController.changePassword);

module.exports=router;
