import React from 'react';
import './css/Navbar.css';
import Logo from './img/logo.png';

// react router
import {Link} from "react-router-dom";

function navbar({user}) {
  return (
    <>
    <div className='navbar'>
        <img src={Logo} alt="" onClick={''} />

            <div class="navbar__container">
            <li class="nav-li"><Link className='nav-links' to="/">Home</Link></li>
            <li class="nav-li"><Link className='nav-links' to="Services"> Services</Link></li>
            <li class="nav-li"><Link className='nav-links' to="Packages"> Packages </Link></li>
            <li class="nav-li"><Link className='nav-links' to="about">About US</Link></li>
            <li class="nav-li"><Link className='nav-links' to="Contact">Contact US</Link></li>
            <li class="nav-li"><Link className='nav-links' to="Active_packages">Active</Link></li>
            <li class="nav-li"><Link className='nav-links' to="Signin">SignIn</Link></li>
            </div>
    </div>

{/* Mobile navbar hamburger   */}
<div id="menuToggle">

    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    
    <ul id="menu">
      <li><Link to="/">Home</Link></li>
      <li><Link to="Services"> Services</Link></li>
     <li><Link to="Packages"> Packages </Link></li>
      <li><Link to="about">About</Link></li>
     <li><Link to="Contact">Contact</Link></li>
     <li><Link to="Active_packages">Active</Link></li>
    </ul>
  </div>
 {/* Mobile navbar hamburger end */}
</>
  )
}

export default navbar