import React from 'react';
import './Footer.css'
import { assets } from '../../assets/assets';

function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
        <h1 className='logo'>BigBite<span style={{color:"white", fontSize:"35px"}}>.</span></h1>
            <p>Lorem ipsum angila methusa gorolo plamo do you wnar hamer khasni kesar pito pilao.</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt=''/>
                <img src={assets.twitter_icon} alt=''/>
                <img src={assets.linkedin_icon} alt=''/>
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>BigBite</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91892384779823</li>
                <li>bigbite.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>Copyright-2024 @ bigbite.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer