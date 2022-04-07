import React from 'react'
import Header from './Header';
import UserImage from '../images/user.jpg';
import {useEffect, useContext} from 'react';
import FriendsContext from '../context/FriendsContext.jsx';


const FriendList = () => {

const {friends, searchFriends, loading} = useContext(FriendsContext);

useEffect(()=>{
  searchFriends();
}, []);

if(loading){
  return(
    <h1> loading.. </h1>
  )
}else{


  return (
    <div>
        <Header />
        <div className="row py-4 px-4 searched-users">

{friends.map((friend) => (
  <div className="card col-md-4 col-sm-6 col-xs-12">
      <img className="card-img-top" src={UserImage} alt="Card image cap" />
      <div className="card-body">
          <h5 className="card-title">{friend.name}</h5>
          <p>{friend.bio}</p>
          <div className=' buttonsforusers'>
              <div className="row">
                  <div className="col-md-6 col-sm-12 col-xs-12 messagediv"><center><a href="#" className="btn btn-primary">Message</a></center></div>
                  <div className="col-md-6 col-sm-12 col-xs-12 removediv"><center><a href="#" className="btn btn-primary">Remove</a></center></div>
              </div>
          </div>
      </div>
  </div>
))}



         </div>

    </div>
  )



}



}

export default FriendList;