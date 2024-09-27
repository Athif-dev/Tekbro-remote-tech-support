import {React, useState} from 'react'
import './css/Button.css'
import displayRazorpay from '../utils/PaymentGateway';


function Button({planPrice}) {



  return (
    <div>
      <div className='packages_button'>
         <button className='button' onClick={() => displayRazorpay(planPrice)}>Buy Now</button>
         </div>
    </div>
  )
}

export default Button;