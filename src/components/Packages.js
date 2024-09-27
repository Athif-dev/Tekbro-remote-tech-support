import React, { useEffect, useState } from 'react';
import './css/Packages.css';
import Navbar from './navbar';
import Footer from './Footer';
import displayRazorpay from '../utils/PaymentGateway';

import firebase from "firebase/app";


//images import
import BannerImg from './img/package-banner.svg';
import RegularPckImg from './img/regular-pck-img.svg';
import StudentPckImg from './img/student-pack.svg';
import FamPckImg from './img/fam-pack.svg';
import PriceCard from './PriceCard';



//firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBGMS3T0lE4uSW1nRAQbliZTIFEaw_bjQM",
    authDomain: "tekbro-3846d.firebaseapp.com",
    projectId: "tekbro-3846d",
    storageBucket: "tekbro-3846d.appspot.com",
    messagingSenderId: "121683870133",
    appId: "1:121683870133:web:0711ac1405b5b602be19fc",
    measurementId: "G-DDTXVNZE7J"
  };

  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();



//getting data from firebase
function Packages() {

    const [familyPlan, setFamilyPlan] = useState([]);
    
    useEffect(()=>{
        db.collection('Plans').where('planType', '==', 'Family').onSnapshot(snapshot => {
            setFamilyPlan(snapshot.docs.map(doc => doc.data()))
        })
    },[])

    const [studentPlan, setStudentPlan] = useState([]);
    
    useEffect(()=>{
        db.collection('Plans').where('planType', '==', 'Student').onSnapshot(snapshot => {
            setStudentPlan(snapshot.docs.map(doc => doc.data()))
        })
    },[])

    const [regularPlan, setRegularPlan] = useState([]);
    
    useEffect(()=>{
        db.collection('Plans').where('planType', '==', 'Regular').onSnapshot(snapshot => {
            setRegularPlan(snapshot.docs.map(doc => doc.data()))
        })
    },[])



  return (
      
    <div>
        <div className='nav'>
        <Navbar />
        {/* <Prices /> */}
        </div>
         <div class="head">
         <h1 id="package-title">OUR PACKAGES</h1>
         <p id="package-desc">No more viruses, no more blue <br /> screens, no more lagging. We provide <br /> you with extensive plans with amazing <br /> services. 
        </p>
        <a href="#package"><button id="package-btn">View Packages</button></a>
     </div>
    <div class="head">
         <img id="package-img" src={BannerImg} alt="" />
    </div>
   
    {/* <!-- mobile header --> */}
    <div class="mobile_head">
    <img src={BannerImg} alt="" />
    <h1>OUR PACKAGES</h1>
    <p>No more viruses, no more blue  screens, no more lagging. We provide  you with extensive plans with amazing services. 
   </p>
</div>
    {/* <!-- mobile header end --> */}

    <hr className='head-hr' />

        {/* REGULAR */}
    <div class="packages" id="package">
    <div  class="r_packages">
        <div className='r-flex'> 
        <div  class="regular_packages_head">
        <h1 className='regular-h1' id="regular-h1">Regular Packages</h1>
        <p className='regular-p' id="regular-p"> No Contracts, No surprise fees</p>
        <hr className='regular-hr' id="regular-hr" />
    </div>
        <img className='regular-img'  id="regular-img" src={RegularPckImg} alt="" />
        </div>
    <div className='pack-container'>
        {regularPlan.map(({packageContents, planName, planPrice, planType, validity}) => (

            <PriceCard 
                packageContents = {packageContents}
                planName = {planName}
                planPrice = {planPrice}
                planType = {planType}
                validity = {validity}
                />
    ))}
    </div>
    </div>

            {/* STUDENT */}           
            <div className="s-packages">
            <div className='s-flex'>
        <div className="student_packages_head">
        <h2 className="student-h1" id="student-h1">Student Packages</h2>
        <p classname="student-p" id="student-p">No Contracts, No surprise fees</p>
        <hr classname="student-hr" id="student-hr" />
        </div>
        
        <img className='student-img' id="student-img" src={StudentPckImg} alt="" srcset="" />
        </div>

        <div className='pack-container'>
            {studentPlan.map(({packageContents, planName, planPrice, planType, validity}) => (
                    
        
                    <PriceCard 
                        packageContents = {packageContents}
                        planName = {planName}
                        planPrice = {planPrice}
                        planType = {planType}
                        validity = {validity}    
                        />
            ))}
        </div>
        </div> 

    {/* FAMILY  */}
     <div class="f-packages">
        <div className='f-flex'>
        <div className="family_packages_head">
            <h2 className='family-h1' id="family-h1">Family Packages</h2>
            <p className='family-p' id="family-p">No Contracts, No surprise fees</p>
            <hr className='family-hr' id="family-hr" />
        </div>

            <img className='family-img' id="family-img" src={FamPckImg} alt="" srcset="" />
            </div>

            <div className='pack-container'>
             {familyPlan.map(({packageContents, planName, planPrice, planType, validity}) => (

            <PriceCard 
                packageContents = {packageContents}
                planName = {planName}
                planPrice = {planPrice}
                planType = {planType}
                validity = {validity}
                />
    ))}
    </div>
        </div>
           

            
            
         {/* <div className='Footer'>
        <Footer />
        </div> */}

    </div>
    </div> 
  )
}

export default Packages