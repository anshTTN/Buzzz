import React from 'react'
import logo from '../images/logo.png'
import profile from '../images/profile.png'
import { FaFacebookMessenger ,FaUserAlt} from 'react-icons/fa';

function Header() {    
  return (
  <>
<nav className="navbar navbar-light bg-light border-bottom sticky-top">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">
      <img src={logo} alt="" width="100" height="80"/>
    </a>
    
    <div className='d-flex'>
    
      <img className="circle me-3 mt-3" src={profile} alt=""/>  
    <p className="me-3 mt-3" >Ansh Mittal </p>
    <FaFacebookMessenger className="me-3 mt-3" />
    <FaUserAlt className="me-5 mt-3"/>
    
    </div>
  </div>
</nav>

  </>
  )
}


export default Header