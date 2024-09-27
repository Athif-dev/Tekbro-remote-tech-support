import {React, useState, useEffect} from 'react';
import Popup from "reactjs-popup";
import { Oval, FallingLines } from  'react-loader-spinner';
import MPImg from "./img/mp-banner.jpg";
import './css/PopUp.css'





const PopUp = ({  children, onClose }) => {
   
   const [timer, setTimer] = useState(true);
   const [timerId, setTimerId] = useState();
   const [count, setCount] = useState(5)

   
   // font familiy adding method
   useEffect(()=>{


      if(timer){
         //timer should start
         let id = setTimeout(()=>{
            window.location.href = "https://www.mousepoint.co.in/"; 
         }, 5000);
         setTimerId(id);
      }else if(!timer && timerId){
         //timer is started but is interrupted by user
         clearTimeout(timerId);
         window.location.href = "https://tekbro.in/"
      }
      return () => {
         //clean up
         if(timerId){
            clearTimeout(timerId);
         }
      }

   }, [timer]);//listen to changes on timer state

   useEffect(()=>{
      if(count == 5){
         let cid = setInterval(()=>{
            setCount(count => count - 1);
            if(count == 0){
               clearInterval(cid);
            }
         }, 1000)
      }

   },[count])

   console.log(timer);


//   if(!open) return null

  return(
      
    <>


      <div className="overlay-styles" />

    {timer && (
      

    <div className="banner-styles">
         <img className='mp-img' src={MPImg} />
         

    <div className='popup-flex' >
        <h2 className='redirect-text'>Taking you to Mousepoint!</h2>


        <div className='loading-icon'>
         <div className='count-tag'>
        <p>{count}s...</p>
        </div>
        <div className='icon'>
        <FallingLines
    color="white"
    width="100"
    visible={true}
    ariaLabel='falling-lines-loading'
    />
    </div>
    </div>
    </div>

        <button className='stay-button' onClick={()=> setTimer(false)}>STAY IN TEK-BRO</button>
    </div>

    )}
    
    </>
  )
  

}

export default PopUp