import React from 'react';
import './NewsLetter.css';

const NewsLatter = () => {
  return (
    <div className='sign-up'>
        <div class="newstext">
            <h4>Express Your Emotions with Exquisite Pets - Shop Now!!</h4>
            <p>Get E-mail updates about our latest shop and <span>Special offers.</span></p>
        </div>

        <div class="form">
            <input type="text" placeholder="Enter Your Email..." />
            <button class="btn">
                <a href="/login">Sign Up</a>
            </button>
        </div>
    </div>
  )
}

export default NewsLatter;