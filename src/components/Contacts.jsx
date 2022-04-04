import React from 'react'
import profile from "../images/profile.png";
import { FaSearch } from "react-icons/fa";

function Contacts() {
  return (
    <div className='border activity py-4 '>
         <div className="px-4">
             <div className="d-flex">
        <h4> Contacts </h4>
<FaSearch className='searchIcon'/>
             </div>
        <hr />

        <div className="d-flex">
        <img className="circle me-3" src={profile} alt="" />
          
          <p>Ankit Bisht</p>
        </div>

        <div className="d-flex">
        <img className="circle me-3" src={profile} alt="" />
          
          <p>Ankit Bisht</p>
        </div>

        <div className="d-flex">
        <img className="circle me-3" src={profile} alt="" />
          
          <p>Ankit Bisht</p>
        </div>
        <div className="d-flex">
        <img className="circle me-3" src={profile} alt="" />
          
          <p>Ankit Bisht</p>
        </div>
        <div className="d-flex">
        <img className="circle me-3" src={profile} alt="" />
          
          <p>Ankit Bisht</p>
        </div>
      </div>

     </div>
  )
}

export default Contacts