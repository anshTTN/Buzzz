import React from 'react'
import profile from "../images/profile.png";
import { FaSearch } from "react-icons/fa";
import {useRef, useContext} from "react";
import UsersContext from "../context/UsersContext.jsx";
import UserResults from "./UserResults.jsx";

function Contacts() {

  const {searchUser} = useContext(UsersContext);

 const input = useRef(null);
 const onButtonClick = () => {
 const name = input.current.value;
 searchUser(name);
  }






  return (
    <>
    <div className='py-4 activity border'>




      <div className="d-flex px-3">

       <h4 className="flex-1"> Contacts </h4>

       <div className="input-group rounded flex-2 px-2">
         <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" ref={input}/>
         <span className="input-group-text border-0" id="search-addon">
         <button className="btn btn-primary btn-sm" onClick={onButtonClick}>  <i className="fas fa-search"></i> </button>
         </span>
       </div>

       </div>




<hr />



<div className="d-flex px-3">
<img className="circle me-3" src={profile} alt="" />

  <p>Ankit Bisht</p>
</div>




<div className="d-flex px-3">
<img className="circle me-3" src={profile} alt="" />

  <p>Ankit Bisht</p>
</div>





<div className="d-flex px-3">
<img className="circle me-3" src={profile} alt="" />

  <p>Ankit Bisht</p>
</div>







     </div>
    {/* <UserResults /> */}
   </>
  )
}

export default Contacts
