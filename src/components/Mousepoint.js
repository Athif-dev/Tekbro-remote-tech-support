import {React , useEffect, useRef, useState} from "react";
import Navbar from './navbar';
import 'reactjs-popup/dist/index.css';
import HomeImg from './img/home.png';
import './css/Mousepoint.css';
import PopUp from "./PopUp";
import WebFont from 'webfontloader';
import Footer from "./Footer";
import { Link } from "react-router-dom";


const Mousepoint = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [timedPopUp, setTimedPopUp] = useState(false);
   



  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins']
      }
    });
   }, []);


  return (
    <div className="background">
       <Navbar />
        <PopUp />

         {/* <button onClick={()=> setIsOpen(true)}>Open banner</button>
         <PopUp onClose={()=> setIsOpen(false)}>
            Mousepoint Banner
         </PopUp> */}

    
       <div className="container">
       <div class="content-container">

 
       {/* {timer &&   (
       <p>Redirecting to Mousepoint in 5 seconds!</p>
                     )}
       {timer &&   (
       <button onClick={()=> setTimer(false)}>Stay in Tek-bro</button> 
                     )} */}

<h1>World's Best place for <br /> Remote Support</h1>
<p>Our plans provide world class services for across all devices. <br /> With the suitable subscription connect with our support <br /> executive within minutes and get your device fixed from the <br /> comfort of your home.</p>
   <button><Link className="btn-link" to='./Packages'> Browse Packages</Link></button>
</div>
<div class="img-container">
   <img src={HomeImg} alt="" />  
</div>


<div class="mobile-img-container">
   <img src={HomeImg} alt="" />
</div>

<div class="mobile-content-container">
   <h1>World's Best place for Remote <br /> Support</h1>
   <p>Our plans provide world class services for across all devices. <br /> With the suitable subscription connect with our support <br /> executive within minutes and get your device fixed from the <br /> comfort of your home</p>
      <button><Link className="btn-link" to='./Packages'> Browse Packages</Link> </button>
  </div>
       </div>
       <Footer />
    </div>
  );
  
};

export default Mousepoint;
