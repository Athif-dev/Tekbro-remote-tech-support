import React from 'react'
import'./css/payment_success.css'
import DoneImg from './img/payment-success.gif'




function Payment_success() {

    return  (
        <div className='payment-section'>
            <img className='done-img' src={DoneImg} />
            <h2 className='payment-heading'>Payment successful !</h2>
        </div>
      ) 
}

export default Payment_success;