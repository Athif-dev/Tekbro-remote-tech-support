import React from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import './css/Services.css';

// image imports
import BannerImg from './img/services/banner-img.svg';
import  WebsiteImg from './img/services/website.png';
import  SupportImg from './img/services/support.png';
import  InternetImg from './img/services/internet.png';
import  MedChkImg from './img/services/medical-checkup.png';
import  CleanupImg from './img/services/clean-up.png';
import  ShieldImg from './img/services/shield.png';
import  TeachingImg from './img/services/teaching.png';
import  SecureImg from './img/services/secure.png';




function Services() {
  return (
    <div>
      <div className='nav'>
      <Navbar />
      </div>

<div class="styling">
    <div class="header">
    <img id="head-img" src={BannerImg} alt="" />
    <h1 id="head-h1">Our Services</h1>
    <p id="head-p">With  TekBro  services , our experts <br /> are here to assist and resolve your <br /> issues 24x7. <br /> TekBro services allow you <br /> troubleshooting right from the <br /> comfort of your home</p>
</div>
</div>

<div class="styling_2">

         {/* <!-- first column --> */}
    <div class="services">
   <div class="box-container">
       <img src={WebsiteImg} alt="" />
       <h1>Virus <br /> Removal</h1>
   </div>
   <div class="box-container">
    <img src={SupportImg} alt="" />
    <h1>Remote <br /> troubleshooting</h1>
   </div>
   <div class="box-container">
    <img src={InternetImg} alt="" />
    <h1>Fix Internet<br />  Issue</h1>
   </div>
    </div>

     {/* <!-- second column --> */}
    <div class="services-2">
        <div class="box-container">
            <img src={MedChkImg} alt="" />
            <h1>Regular <br /> Check-up</h1>
        </div>
        <div class="box-container">
         <img src={CleanupImg} alt="" />
         <h1>Monthly <br /> Junk Cleaning</h1>
        </div>
        <div class="box-container">
         <img src={ShieldImg} alt="" />
         <h1>System<br />  Security</h1>
        </div>
         </div>

              {/* <!-- third column --> */}
         <div class="services-3">
            <div class="box-container">
                <img src={TeachingImg} alt="" />
                <h1>Educating Customers</h1>
            </div>
            <div class="box-container">
             <img src={SecureImg} alt="" />
             <h1>Recovering <br /> Hacked Phone</h1>
            </div>
             </div>

    
</div>

{/* <!-- services tiles for mobile --> */}

<div class="styling_2_mobile">

    {/* <!-- first column --> */}
<div class="services">
<div class="box-container">
  <img src={WebsiteImg} alt="" />
  <h1>Virus <br /> Removal</h1>
</div>
<div class="box-container">
<img src={SupportImg} alt="" />
<h1>Remote <br /> troubleshooting</h1>
</div>

</div>

{/* <!-- second column --> */}
<div class="services-2">
    <div class="box-container">
        <img src={InternetImg} alt="" />
        <h1>Fix Internet<br />  Issue</h1>
        </div>
   <div class="box-container">
       <img src={MedChkImg} alt="" />
       <h1>Regular <br /> Check-up</h1>
   </div>

    </div>

         {/* <!-- third column --> */}
    <div class="services-3">
        <div class="box-container">
            <img src={CleanupImg} alt="" />
            <h1>Monthly <br /> Junk Cleaning</h1>
           </div>
           <div class="box-container">
            <img src={ShieldImg} alt="" />
            <h1>System<br />  Security</h1>
           </div>
        </div>
        
         {/* <!-- fourth column --> */}
    <div class="services-3">
        <div class="box-container">
            <img src={TeachingImg} alt="" />
            <h1>Educating Customers</h1>
        </div>
        <div class="box-container">
         <img src={SecureImg} alt="" />
         <h1>Recovering <br /> Hacked Phone</h1>
        </div>
         </div>

</div>
<div className='footer-styling'>
<Footer />
</div>
</div>
  )
}

export default Services