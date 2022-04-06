import React from 'react'
import profile from "../images/profile.png";
import { FaSearch } from "react-icons/fa";

function Contacts() {
  return (
    <div className='py-4 activity border'>





    <div className="d-flex px-3">

    <h4 className="flex-1"> Contacts </h4>

    <div className="input-group rounded flex-2 px-2">
      <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"/>
      <span class="input-group-text border-0" id="search-addon">
        <i class="fas fa-search"></i>
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
  )
}

export default Contacts
