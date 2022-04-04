import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import profile from "../images/profile.png";
import backgroundImg from "../images/background.png";
import { FaRegImages } from "react-icons/fa";
import Post from "./Post";
import Activity from "./Activity";
import Contacts from "./Contacts";
import SuggestedContacts from "./SuggestedContacts";

function FeedsPage() {
  return (
    <div>
      <Header />
      <div className="bgColor">

      
      <div className="container ">
        <div className="row">

          {/* ********************1st col************** */}
          <div className="col-3 mt-5 ">
            <div className="px-0 border profileContainer">
              <div className="">
                <img className="backgroundImg " src={backgroundImg} alt="" />
              </div>
              <img className="profileImg" src={profile} alt="" />
              <p className="profileName">Ansh Mittal</p>
              <p className="profileStatus">Newly Recruit at TTN</p>
              <div className="row">
                <div className="col">
                  <p className="profileViewsNo">234</p>
                  <p className="profileViewsText">Profile Views</p>
                  <div className="line"></div>
                </div>
                <div className="col">
                  <p className="profileViewsNo">10</p>
                  <p className="profileViewsText">Post</p>
                </div>
              </div>
            </div>
{/* Activity */}

<Activity/>
          </div>



{/* ***************************2nd Col***************** */}
          <div className="col-5  mt-5 col2Size">
            <div className="border searchBar">
            <div className="row">
              <a className="col-2 ms-3" href="#">
                <img className="circle me-3 mt-3" src={profile} alt="" />
              </a>
              <div className="search col-8 border">
                <input
                  className="searchInput"
                  type="text"
                  placeholder="Start a post..."
                />
              </div>
              <div className="col-2 d-flex">
                <div className="imageIcon">
                  <FaRegImages />
                </div>
                <div className="imageText">Photo/Video</div>
              </div>
            </div>
            </div>

{/* *************************POSTS************************************************ */}
           <Post/>
           <Post/>

      
          </div>
{/* *******************************3rd Col******************************************* */}
<div className="col-3 mt-5 ">
           <Contacts/>
           <SuggestedContacts/>
          </div>

        </div>
      </div>
      </div>
    </div>
  );
}

export default FeedsPage;
