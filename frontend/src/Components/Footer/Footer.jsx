import React from 'react';
import './Footer.css';
import Logo from '../Assets/logo.png';
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { IoIosCash } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='sb_footer section_padding'> 
        <div className='sb_footer-links'>

          <div className='sb_footer-links-div'>
            <img src={Logo} alt='logo' />

            <div className='sb_footer-social'>
              <h4>Coming Soon On</h4>
              <div className='sb_footer-social-icons'>

                <a href='/'><FaFacebook /></a>

                <a href='/'><FaFacebookMessenger /></a>

                <a href='/'><FaTwitter /></a>

                <a href='/'><FaInstagramSquare /></a>

                <a href='/'><FaYoutube /></a>

              </div>
            </div>
          </div>

          <div className='sb_footer-links-div'>
            <h4>Quick Links</h4>
            <div className='links'>
              <a href='/'><p>Shop</p></a>
              <a href='/'><p>About</p></a>
              <a href='/'><p>Contact</p></a>
            </div>
          </div>

          <div className='sb_footer-links-div'>
            <h4>Payment Methods</h4>
            <div className='sb_footer-payment'>
              <span><FaPaypal /></span>
              <span><FaCcMastercard /></span>
              <span><IoIosCash /></span>
            </div>
          </div>

          <div className='sb_footer-links-div'>

            <h4>Find Us</h4>

            <div className='sb_footer-address'>
              <span><FaMapMarkerAlt /></span>
              <p>No 97, Kandy Road, Colombo.</p>
            </div>

            <div className='sb_footer-address'>
              <span><MdAttachEmail /></span>
              <p>petparadise@gmail.com</p>
            </div>

            <div className='sb_footer-address'>
              <span><IoCallSharp /></span>
              <p>(+94) 11 345 789</p>
            </div>

          </div>

        </div>

        <hr />

        <div className='sb_footer-bellow'>

          <div className='sb_footer-copyright'>
            <p>@{new Date().getFullYear()} PetParadaise. All right reserved.</p>
          </div>

          <div className='sb_footer-terms'>
            <a href='/'>Terms & Conditions</a>
            <a href='/'>Privacy Policy</a>
            <a href='/'>Security</a>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Footer;