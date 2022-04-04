import React from 'react'
import profile from "../images/profile.png";
import { FaSearch } from "react-icons/fa";

function SuggestedContacts() {
  return (
    <div className='border activity py-4 mt-4'>
         <div className="px-4">
             <div className="d-flex">
        <h4> Suggestions </h4>
<FaSearch className='searchIcon1'/>
             </div>
        <hr />

        <div className="d-flex">
        <img className="circle me-3" src={profile} alt="" />
          
          <p>Ankit Bisht</p>
          <p className="addFriendInSuggestion ms-5">+ Friend</p>
        </div>

        <div className="d-flex">
        <img className="circle me-3" src={profile} alt="" />
          
          <p>Ankit Bisht</p>
          <p className="addFriendInSuggestion ms-5">+ Friend</p>
        </div>

        <div className="d-flex">
        <img className="circle me-3" src={profile} alt="" />
          
          <p>Ankit Bisht</p>
          <p className="addFriendInSuggestion ms-5">+ Friend</p>
        </div>
        <div className="d-flex">
        <img className="circle me-3" src={profile} alt="" />
          
          <p>Ankit Bisht</p>
          <p className="addFriendInSuggestion ms-5">+ Friend</p>
        </div>
        <div className="d-flex">
        <img className="circle me-3" src={profile} alt="" />
          
          <p>Ankit Bisht</p>
          <p className="addFriendInSuggestion ms-5">+ Friend</p>
        </div>
      </div>

     </div>
  )
}

export default SuggestedContacts