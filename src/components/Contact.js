import React from 'react';
import Navbar from './navbar';
import './css/Contact.css';
import Footer  from './Footer';

import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';



function Contact() {
  return (
    <>
    <Navbar />
    
          <h5 className='contact-head'>CONTACT US</h5>
          <hr id="contact-hr"  />

    	  <div className='contact-flex'>
          <div className='contact-info'>
            <h3 className='contact-head-txt'>PHONE </h3>
            <h4 className='contact-subtxt'>+91-8940-835-276</h4>
            {/* <h4 className='contact-subtxt'>+91-8940-TEK-BRO</h4> */}
          </div>

          <div className='contact-info'>
          <h3 className='contact-head-txt'>EMAIL</h3>
          <h4 className='contact-subtxt'>Support@tekbro.in</h4>
          </div>

          <div className='contact-info'>
          <h3 className='contact-head-txt'>ADDRESS</h3>
          <h4 className='contact-subtxt'># 100 Mousepoint INC, Woodcock Road,
            Ooty, 643001.
            The Nilgiris
          </h4>
          </div>
        </div>

<div className="footer-contact">
      <Footer  />
      </div>
    </>
  )
}

export default Contact;