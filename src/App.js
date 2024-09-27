import React, { useEffect, useState } from "react";
import "./App.css";

import {signOut, RecaptchaVerifier, signInWithPhoneNumber, onAuthStateChanged} from "firebase/auth";




// react router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


//components
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import About from './components/About';
import Contact from './components/Contact';
import Packages from "./components/Packages";
import Services from "./components/Services";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Refund_Policy from "./components/Refund_Policy";
import Payment_success from "./components/Payment_success";
import Mousepoint from "./components/Mousepoint";
import Active_packages from "./components/Active_packages";

import { auth } from "./fb";




const App = () => {

  //FIREBASE AUTHENTICATION
  const [viewOtpForm, setViewOtpForm] = useState(false);
  const [user, setUser] = useState(false);




  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(

      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
          this.onSignInSubmit();
        },
        defaultCountry: "IN",
      }, auth
    );
  }, []);


  //SETTING USER TO TRUE AFTER AUTH CHANGE
  onAuthStateChanged(auth,(user) => {
    if (user) {
      setUser(user);
    }
  });


  //LOGIN SUBMIT TO SEND OTP
  const loginSubmit = (e) => {
    e.preventDefault();

    let phone_number = "+91" + e.target.phone.value;
    const appVerifier = window.recaptchaVerifier;

    
      signInWithPhoneNumber(auth,phone_number, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        //phone_number='';
        console.log("otp sent");
        setViewOtpForm(true);
        window.confirmationResult = confirmationResult;
        // ...  
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        alert(error.message);
      });
  };


  //OTP CONFIRMATION
  const otpSubmit = (e) => {
    e.preventDefault();

    let otp_number = e.target.otp_value.value;

    window.confirmationResult
      .confirm(otp_number)
      .then((confirmationResult) => {
        console.log(confirmationResult);
        console.log("success");
        window.open("/", "_self");
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        alert(error.message);
      });
  };


  


  //SIGN OUT BUTTON
  const SignOut = () => {
    
      signOut(auth)
      .then(() => {
        window.open("/signin", "_self");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };





  return (
    <Router>
      
      <div id="recaptcha-container"></div>
      <Switch>

        <Route path="/Signin" exact component={SignIn} >
          <SignIn
            loginSubmit={loginSubmit}
            otpSubmit={otpSubmit}
            viewOtpForm={viewOtpForm}
            signOut={SignOut}
            user={user}
          />
          </Route>
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />
        <Route path='/Packages'component={Packages} />
        <Route path='/Services' component={Services} />
        <Route path='/Signin' component={SignIn} />
        <Route path='/Mousepoint' component={Mousepoint} />
        <Route path='/Payment_success' component={Payment_success} />
        <Route path='/Privacy' component={Privacy} />
        <Route exact  path='/Terms' component={Terms} />
        <Route path='/Refund' component={Refund_Policy} />
        <Route path='/Active_packages' component={Active_packages}>
          <Active_packages 
          user={user}
          />
          
          </Route> 
        <Route path='/' component={Home}>
          
          <Home user={user}/>
        </Route>


      </Switch>
    </Router>
  );
};



export default App;
