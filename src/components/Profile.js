import React from 'react'
import './css/Profile.css'
import Navbar from "./navbar";
import user from './img/user.gif';

function Profile({signOut}) {
  return (
    <div>
     <Navbar />
      <div className='profile-container'>

       <h2 className='user-name'>Welcome User!</h2>
    <img className='user-img' src={user} />
    <div>
    <button className='profile-logout' onClick={signOut}>SignOut</button>
    </div>
  </div>
  </div>
  )
}

export default Profile