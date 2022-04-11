const express = require('express');
const router = express.Router();
const friends = require('../controller/friends_controller');
const auth=require('../controller/auth');



router.get("/searchfriends",auth.verifyUsers, friends.searchFriends);

router.post("/addfriend/:email", friends.addFriend);





module.exports = router;
