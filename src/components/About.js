import React from 'react'
import Navbar from './navbar'
import Footer from './Footer'
import './css/About.css'

// Image imports
import AboutImg from './img/about.svg'
import img1 from './img/2.png'
import img2 from './img/3.png'
import img3 from './img/1.png'
import img4 from './img/4.png'
import img5 from './img/5.png'
import WorkflowImg from './img/abt.svg'
import TagLineImg from './img/tagline-img.svg'



function About() {
  return (
    <>
        <Navbar />

        <div class="container">
        <div class="row">
            <div class="col-2">
                <img src={AboutImg} alt=""/>
            </div>
            <div class="col-2" id="hero-desc">
                <h2>ABOUT US</h2>
                <p class="about">TekBro Services has been a leading provider of remote IT support services and a plethora of other call center services to its global clientele. We have been in this industry for over 2 years now and have the experience of working with clients from different verticals and industries. Leverage the services of our experienced team and our expertise which has enabled us to serve over 488 customers. We assure you a profitable, safe and secure outsourcing experience with us. We also provide other services such as inbound call center services, outbound call center services, telemarketing services, and more.</p>
            </div>
        </div>
    </div>
    <hr />

    <div class="workflow_section">
    <h2>Here is a step-by-step approach we follow to help you get the best value -</h2>
    <div class="flex">
    <div class="steps_container">
    <div class="steps">
        <img src={img1} alt="" />
        <h3>01. Request Analysis
        </h3>
    </div>
    <div class="steps">
        <img src={img2} alt="" />
        <h3>02. Service Suite Download Support
        </h3>
    </div>
    <div class="steps">
        <img src={img3} alt="" />
        <h3>03. Configuring the Software
        </h3>
    </div>
    <div class="steps">
        <img src={img4} alt="" />
        <h3>04. Remote Troubleshooting
        </h3>
    </div>
    <div class="steps">
        <img src={img5} alt="" />
        <h3>05. Client Feedback
        </h3>
    </div>
</div>
<img src={WorkflowImg} alt="" srcset="" />
</div>

</div>

<div class="section">
    <h4>Best Support, Perfect Choice</h4>
    <img src={TagLineImg} alt="" />
</div>
<Footer />
    </>

  )
}

export default About