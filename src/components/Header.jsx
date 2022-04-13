import React from 'react'
import logo from '../images/logo.png'
import profile from '../images/profile.png'
import {Link} from "react-router-dom";
import { FaFacebookMessenger ,FaUserAlt} from 'react-icons/fa';

function Header() {
  return (
  <>
<nav className="navbar navbar-light bg-light border-bottom sticky-top">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/feedsPage">
      <img src={logo} alt="" width="100" height="80"/>
    </Link>

    <div className='d-flex'>

      <img className="circle me-3 mt-3" src={profile} alt=""/>
    <p className="me-3 mt-3" >Ansh Mittal </p>
    <FaFacebookMessenger className="me-3 mt-3" />
    <Link to="/friendRequests"> <FaUserAlt className="me-5 mt-3"/> </Link>

    </div>
  </div>
</nav>

  </>
  )
}


export default Header
