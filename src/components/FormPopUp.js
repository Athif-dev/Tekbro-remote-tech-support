import React from 'react';
import "./css/FormPopup.css";

function FormPopUp({open, onClose, form}) {
    if(!open) return null

    function home(){
    try{
        


        }catch(err){
            console.log(err);
        }
    }


  return (
    <>
    <div className="overlay-styles" />


    <div className='banner-style'>
    <div className='form'>

        <h1 className='form-popup'>Fill in the details</h1>
        <button className='popup-form-btn' onClick={onClose}>X</button>
        <form id="loginForm" onSubmit={form}>
            <div className='input-field'>
                <label>Name</label>
                <input
                type="text"
                placeholder='Full Name'
                name="name"
                autoComplete="false"
                />
                <label>Email</label>
                <input
                type="email"
                placeholder='Email'
                name="email"
                autoComplete="false"
                />
            </div>
            <button type='submit' id='form-popup-button'>
                Confirm
            </button>
        </form>
    </div>
    </div>
    </>
  )
}

export default FormPopUp