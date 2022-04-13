import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import adminProfilePic from "../images/profile.png";
import adminCoverPic from "../images/background.png";
import { FaRegImages } from "react-icons/fa";
import Post from "./Post";
import Contacts from "./Contacts";
import SuggestedContacts from "./SuggestedContacts";

function FeedsPage() {
  return (
    <div className = 'bgColor'>
      <>
      <Header />
       <div className='row FeedContent' >

           {/*---------------------Left Part ------------------------*/}

           <div className='col-xl-3 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
           <div className="col align-self-center">
                <div className='container adminProfile' style={{backgroundColor : "white"}}>
                    <div className="row  d-flex justify-content-center">

                            <img className='adminCoverPic'  src={adminCoverPic} alt="" />
                            <img className='adminProfilePic' src={adminProfilePic} alt="" />
                            <p className="profileName">Ansh Mittal</p>
                            <p className="profileStatus">Newly Recruit at TTN</p>
                            <div className="row">
                                <div className="col">
                                    <p className="profileViewsNo">234</p>
                                    <p className="profileViewsText">Profile Views</p>

                                </div>
                                <div className="col">
                                    <p className="profileViewsNo">10</p>
                                    <p className="profileViewsText">Post</p>
                                </div>
                            </div>

                    </div>
                </div>

                <div className='col align-self-center'>
                    <div className='container activityCon'>
                        <div className="d-flex flex-column bd-highlight mb-3">
                            <div className="p-2 bd-highlight">
                                <h4> Recent </h4>
                                <div className='d-flex'>
                                    <i className="fa-solid fa-hashtag"></i>
                                    <p>#javascript</p>


                                </div>
                                <div className='d-flex'>
                                    <i className="fa-solid fa-calendar"></i>
                                    <p>Mobile conference 2021</p>


                                </div>
                                <div className='d-flex'>
                                    <i className="fa-solid fa-user-group"></i>
                                    <p>Freelance Developers</p>


                                </div>



                            </div>
                            <hr />
                            <div className="p-2 bd-highlight">
                                <h4> Groups </h4>
                                <div className='d-flex'>
                                    <i className="fa-solid fa-hashtag"></i>
                                    <p>#javascript</p>


                                </div>
                                <div className='d-flex'>
                                    <i className="fa-solid fa-calendar"></i>
                                    <p>Mobile conference 2021</p>


                                </div>
                                <div className='d-flex'>
                                    <i className="fa-solid fa-user-group"></i>
                                    <p>Freelance Developers</p>


                                </div>



                            </div>
                            <hr />

                            <div className="p-2 bd-highlight">
                                <h4> Subscriptions </h4>
                                <div className='d-flex'>
                                    <i className="fa-solid fa-hashtag"></i>
                                    <p>#javascript</p>


                                </div>
                                <div className='d-flex'>
                                    <i className="fa-solid fa-calendar"></i>
                                    <p>Mobile conference 2021</p>


                                </div>
                                <div className='d-flex'>
                                    <i className="fa-solid fa-user-group"></i>
                                    <p>Freelance Developers</p>


                                </div>



                            </div>



                        </div>

                    </div>

                </div>
            </div>
           </div>

           {/*----------------------------Post - middle - Part ----------------------->*/}


           <div className='col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 post-body '>
           <div className="col align-self-center" >
               <div className="border searchBar searchContainer">
                   <div className="row">
                        <a className="col-2 ms-3" href="#">
                            <img className="circle me-3 mt-3" src={adminProfilePic} alt="" />
                        </a>

              <div className="search col-8 border">
                <input
                  className="searchInput"
                  type="text"
                  placeholder="Start a post..."
                />
              </div>
              <div className="col d-flex">
                <div className="imageIcon">
                  <FaRegImages />
                </div>
                <div className="imageText">Photo/Video</div>
              </div>

            </div>
            </div>
            <Post />
            <Post />
            </div>
           </div>


           <div className='col-xl-3 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
           <div className="Rightcontainer">
               <div className = 'row   justify-content-center' >
                    <Contacts />
                </div>
                <div className='row   justify-content-center'>
                    <SuggestedContacts />

                </div>

            </div>
           </div>


       </div>
      </>
    </div>
  );
}

export default FeedsPage;
