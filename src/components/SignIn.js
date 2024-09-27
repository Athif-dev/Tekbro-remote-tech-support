import {React, useEffect, useState} from "react";
import './css/Signin.css';
import WebFont from 'webfontloader';
import { FaPhoneSquare } from 'react-icons/fa';
import Navbar from "./navbar";
import Profile from "./Profile";



const SignIn = ({ loginSubmit, otpSubmit, viewOtpForm, user, userStatus,  signOut }) => {
      // font familiy adding method
      const [phoneNum, setPhoneNum] = useState();

      const handleChange = event => {
        setPhoneNum(event.target.value);
    
        console.log('value is:', event.target.value);
      };

     useEffect(() => {
      WebFont.load({
        google: {
          families: ['Poppins']
        }
      });
     }, []);
     console.log(user)

  return (
    <>
    {!user ?(
      
    <div className="form">
      <Navbar user={user} userStatus={userStatus}/>
      
      <h1 className='signin-h1'>Sign in</h1>
      <p className='signin-subtext'>Sign in using your mobile number.</p>
      {!viewOtpForm ? (
        <div>
          <form id="loginForm" onSubmit={loginSubmit}>
            <div className="input-field">
              <label>  <FaPhoneSquare size={'25px'} color={'#2A2D34'} className="icona" />Phone Number</label>
              <input
                type="number"
                placeholder="Phone"
                name="phone"
                autoComplete="false"
                onChange={handleChange}
              />
            </div>
            <button type="submit" id="sign-in-button">
              Sign in
            </button>
          </form>
        </div>
      ) : (


        <div className="form-wrapper" onSubmit={otpSubmit}>


          <form id="otpForm">
            <div className="input-field">
              <label>Phone</label>
              <input 
              type= "number"
              name="phone"
              autoComplete="false"
              value={phoneNum}
              placeholder="Phone"
              />
              <label>Enter OTP</label>
              <input
                type="number"
                placeholder="One time password"
                name="otp_value"
                autoComplete="false"
              />
            </div>
            <button type="submit">
              Verify OTP
            </button>
          </form>
        </div>
      )}
    </div>
    ):(
        <Profile signOut={signOut}/>
      
    )
}
    </>      
  );
};

export default SignIn;
