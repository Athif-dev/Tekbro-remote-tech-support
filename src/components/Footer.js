import {React , useEffect} from 'react';
import FooterLogo from './img/footer-logo.png';
import Privacy_Policy from './Privacy';
import './css/Footer.css';

// react router
import {Link} from "react-router-dom";

//font loader import
import WebFont from 'webfontloader';

//fa fa icons import
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
  // font loader method
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Poppins']
          }
        });
       }, []);


  return (
    <div>
<footer class="footer">
  <div className='download-app'>
    <h2 className='download-txt'>Download our app From Play store</h2>
   <a href='https://lnkd.in/ggKk3f57' target='blank'><button className='download-btn'>Download Now</button></a>
  </div>
<div className='pc-footer'>
    <div className='footer-flex'>
<div className='footer-left'>
    <div class="social-icons">
  <a href='https://www.facebook.com/TekBro-100126532797220' target='blank'><FaFacebookSquare size={'30px'} color={'white'} className="icon" /></a>
  <a href='https://www.instagram.com/tekbro_/' target='blank'><FaInstagram size={'30px'} color={'white'} className="icon" /></a>
  <a href='https://twitter.com/TEKBRO_?s=20&t=ulDlHGd-ghzJnpiwH9OvqA' target='blank'><FaTwitter size={'30px'} color={'white'} className="icon" /></a>
  <a href='https://www.linkedin.com/company/tekbro/' target='blank'><FaLinkedin size={'30px'} color={'white'} className="icon"/></a>
</div>

<h4>A branch of <a href="https://www.mousepoint.co.in/" target="blank"><img src={FooterLogo} alt=""/></a></h4>
</div>
<div className='footer-navcontainer'>
    <h3><Link className='link' to="/">Home |</Link></h3>
    <h3><Link className='link' to="Services">services |</Link></h3>
    <h3><Link className='link' to="About">About |</Link></h3>
    <h3><Link className='link' to="Contact">Contact</Link></h3>
    </div>
<div className='footer-right'>
  <p>Support No: 8940835276</p>
  <p>Email: support@tekbro.in</p>
  <p>Address: #100, Mousepoint Pvt. Ltd., Woodcock road, Ooty - 643001</p>

</div>
</div>
<div className='footer-subpages'>
<p ><Link className='subpages-link' to="/Privacy">Privacy Policy</Link></p>
<p><Link className='subpages-link' to="/Refund">Refund Policy </Link></p>
<p><Link className='subpages-link' to="/Terms">Terms & Conditions </Link></p>
<p>All rights reserved.</p>

</div>
</div>



<div className='mobile-footer'>
<div className='footer-navcontainer'>
    <h3><Link className='link' to="/">Home |</Link></h3>
    <h3><Link className='link' to="Services">services |</Link></h3>
    <h3><Link className='link' to="About">About |</Link></h3>
    <h3><Link className='link' to="Contact">Contact</Link></h3>
    </div>
<div className='footer-flex'>
<div className='footer-left'>
    <div class="social-icons">
  <a href='https://www.facebook.com/TekBro-100126532797220' target='blank'><FaFacebookSquare size={'30px'} color={'white'} className="icon" /></a>
  <a href='https://www.instagram.com/tekbro_/' target='blank'><FaInstagram size={'30px'} color={'white'} className="icon" /></a>
  <a href='https://twitter.com/TEKBRO_?s=20&t=ulDlHGd-ghzJnpiwH9OvqA' target='blank'><FaTwitter size={'30px'} color={'white'} className="icon" /></a>
  <a href='https://www.linkedin.com/company/tekbro/' target='blank'><FaLinkedin size={'30px'} color={'white'} className="icon"/></a>
</div>

<h4>A branch of <a href="https://www.mousepoint.co.in/" target="blank"><img src={FooterLogo} alt=""/></a></h4>
</div>

<div className='footer-right'>
  <p>Support No: 8940835276</p>
  <p>Email: support@tekbro.in</p>
  <p>Address: #100, Mousepoint Pvt. Ltd., Woodcock road, Ooty - 643001</p>

</div>
</div>
<div className='footer-subpages'>
<p ><Link className='subpages-link' to="/Privacy">Privacy Policy</Link></p>
<p><Link className='subpages-link' to="/Refund">Refund Policy </Link></p>
<p><Link className='subpages-link' to="/Terms">Terms & Conditions </Link></p>
<p>All rights reserved.</p>
</div>
</div>

</footer>
    </div>
  )
}

export default Footer;