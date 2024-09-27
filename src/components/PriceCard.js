import React from 'react';
import { useEffect } from 'react';
import displayRazorpay from '../utils/PaymentGateway';
import './css/price_card.css';
import Button from  './Button';

//fa fa icons import
import { AiFillInfoCircle } from 'react-icons/ai';
import { AiOutlineInfoCircle } from 'react-icons/ai';

function PriceCard({packageContents, planName,originalPrice, planPrice, type, validity}){

    const loadScript = (src) => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = src;
          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            resolve(false);
          };
          document.body.appendChild(script);
        });
      };
    
      useEffect(() => {
        loadScript("https://checkout.razorpay.com/v1/checkout.js");
      });

  


    return(
        <div class="boxes_style">
        <div class="boxes">
            <div class="color">
            <h1>{planName}</h1>
            </div>
            <div className='ico'>
               <AiOutlineInfoCircle color='black' className='faicon'  />
               <h6>You can avail unlimited support and repair on your devices for a duration of {validity} </h6>
               </div>

              <div className='ico'>
                <AiFillInfoCircle className='faicon' />
                <h6>One Click packages do not cover any issues related to the hardware</h6>
                </div>

            <p>{packageContents[0]}</p>
            <p>{packageContents[1]}</p>
            <p>{packageContents[2]}</p>
            <p>{packageContents[3]}</p>

            <h2>Rs.{planPrice}</h2>
            <h4>Rs.{originalPrice}</h4>
            {/* <h3>{planPrice}</h3> */}
            <Button planPrice={planPrice}/>
        </div>
        </div>

    )

}


export default PriceCard;