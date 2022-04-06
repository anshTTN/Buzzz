import React from 'react'
import profile from "../images/profile.png";
import { FaSearch } from "react-icons/fa";

function SuggestedContacts() {
  return (
    <div className='py-4 activity border mt-4'>



         <div className="d-flex px-3">

         <h4 className="flex-1">Suggestions</h4>

         <div className="input-group rounded flex-2 px-2">
           <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" size="1"/>
           <span class="input-group-text border-0" id="search-addon">
             <i class="fas fa-search"></i>
           </span>
         </div>

         </div>

        <hr />





        <div className="d-flex px-3">
        <img className="circle me-3" src={profile} alt="" />

          <p>Ankit Bisht</p>
          <p className="addFriendInSuggestion ms-5">+ Friend</p>
        </div>



        <div className="d-flex px-3">
        <img className="circle me-3" src={profile} alt="" />

          <p>Ankit Bisht</p>
          <p className="addFriendInSuggestion ms-5">+ Friend</p>
        </div>



        <div className="d-flex px-3">
        <img className="circle me-3" src={profile} alt="" />

          <p>Ankit Bisht</p>
          <p className="addFriendInSuggestion ms-5">+ Friend</p>
        </div>



        <div className="d-flex px-3">
        <img className="circle me-3" src={profile} alt="" />

          <p>Ankit Bisht</p>
          <p className="addFriendInSuggestion ms-5">+ Friend</p>
        </div>




     </div>
  )
}

export default SuggestedContacts
