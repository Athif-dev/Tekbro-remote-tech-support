import {React , useEffect, useRef, useState} from "react";
import Navbar from './navbar';
import FormPopUp from "./FormPopUp";
import 'reactjs-popup/dist/index.css';
import HomeImg from './img/home.png';
import './css/Home.css';
import WebFont from 'webfontloader';
import Footer from "./Footer";
import { Link } from "react-router-dom";
import {setDoc, doc, getDoc} from 'firebase/firestore'
import db from "../fb";



const Home = ({user}) => {
   const [formIsOpen, setFormIsOpen] = useState();
   
   console.log(formIsOpen);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins']
      }
    });

   }, []);

   useEffect( async ()=>{
      
      try{
         const userRef = doc(db, "User", user.uid);
         const userSnap = await getDoc(userRef); 
         console.log(userSnap)
         if(userSnap.empty){
            console.log("WORKNGGGG")
            setFormIsOpen(false);
         }else{
            console.log("FAAAALLLSEE")
            setFormIsOpen(true);
         }
      }catch(err){
         console.log(err);
      }
         
   
   },[])




   //CHECK USER DATA
   const  checkUserData = () => {

   }


   //MAP FORM VALUES TO DB
   const form = (e)=>{
      e.preventDefault();
   try{
      //Getting values from Form Pop Up
      let name = e.target.name.value;
      let email = e.target.email.value;

      setDoc(doc(db,"Users",user.uid),{
         Email: email,
         HasFreeTrail: true,
         Name: name,
         Phone: user.phoneNumber,
         uid: user.uid 
      })
      .then(()=>{
         console.log("Document uploaded successfully");
         setFormIsOpen(false);
      })
   }catch(err){
      console.log(err);
   }
   }




  return (
    <div className="background">
       <Navbar />

      {user && (<FormPopUp open={formIsOpen} onClose={() => setFormIsOpen(false)} form={form} />)} 

       

    
       <div className="container">
       <div class="content-container">

 

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
      <button><Link className="btn-link" to='/Packages'> Browse Packages</Link> </button>
  </div>
       </div>
       <Footer />
    </div>
  );
  
};

export default Home;
