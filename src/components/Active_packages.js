import React from 'react'
import Navbar from './navbar';
import './css/Active_packages.css';
import { Link } from 'react-router-dom';

function Active_packages({user}) {
  return (
    <>
    <Navbar />
    {user ?(
    <div className='active-header'>
    <h2 className='header-txt'>ACTIVE PLANS</h2>
    <hr id="active-hr" />
    <div className='active-boxes'>
      <div className='boxes-head'>
    <h2 className='box-head-text'>One time fix</h2>
    </div>
    <h4 className='box-txt'>Package includes:</h4>
    <p className='box-li'>1 Device</p>
    <p className='box-li'>8am - 8pm Support</p>
    <p className='box-li'>Mobile/Tablet - Android & IOS</p>
    <p className='box-li'>PC/Laptop - Windows & MAC</p>
    </div>
    </div>
    ):(
      <div>
      <h1>Login First to access this page</h1>
      <Link className='nav-links' to="Signin">SignIn</Link>
      </div>
    )
}
    </>
  )
}

export default Active_packages;