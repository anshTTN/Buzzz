const User = require('../models/user_model.js');
const _ = require('lodash');



/********** Search all friends ********************************/


exports.searchFriends = function findFriends(req, res){
    const email=req.user.email;
    console.log(email);
User.find(function(err, found){
    if(found.length == 0){
         return res.status(200).json({status:"failure", users: []});
    }else{
    return res.status(200).json({status:"success", users: found});
    }
  });
}


/******************* Search all users *************************/

exports.searchUsers = function findUser(req, res){
  var name = req.params.name;
  name = _.lowerCase(name);
  console.log(name);
User.find({first_name: name}, function(err, found){
    if(found.length == 0){
     return res.status(200).json({status:"failure", users: []});
    }else{
      return res.status(200).json({status:"success", users: found});
    }
  });
}




/***************************** Add Friend *********************/

exports.addFriend = function findUser(req, res){
  const email = req.params.email;
User.find({email: email}, function(err, found){
    if(found){
      found[0].requests.push("Admin@tothenew.com");
    found[0].save();
     return res.status(200).json({status:"success", users: found});
    }else{
       return res.status(200).json({status:"failure", users: []});
    }
  });
}
