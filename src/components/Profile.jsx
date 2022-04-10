import React from 'react'
import Header from './Header';
import coverPic from '../images/profileCoverImg.jpg';
import profilePic from '../images/profilePic.jpeg';


const Profile= () => {
  return (
    <>
    <Header />
    <div className="row  d-flex justify-content-center">
    <div className='col-md-8'>
        <div className='profileCover'>
        <img className='profileCoverImg'  src={coverPic} alt="" />
        <img className='profileUserImg' src={profilePic} alt="" />

        </div>


    <div className='row d-flex justify-content-center profileInfo'>

            <h1 className='searchedUserName'><center> Ankita Pandey </center></h1>
            <h3 className='bio'><center>Mean Trainee at To The New</center></h3>

    </div>

    <div class="row">
        <div class="col"><button type="button" class="btn btn-primary">add friend</button></div>
        <div class="col"><button type="button" class="btn btn-primary">message</button></div>
        <div class="col"><button type="button" class="btn btn-primary">more</button></div>
  </div>


    </div>


    </div>


    </>
  )
}

export default Profile;
