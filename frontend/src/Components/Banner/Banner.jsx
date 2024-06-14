import React from 'react';
import './Banner.css';
import bannaer1 from '../Assets/banner1.png';

const Banner = () => {
  return (
    <div className='banner'>
        <div className='banner-container'>
            <div className='banner-left'>
                <img src={bannaer1} alt='' />
            </div>

            <div className='banner-right'>
                <h1>Get 20% off on your first order.</h1>
                <p>Sign In for our website and get 20% off on your first order.</p>
                <a href='/login'><button className='signup'>Sign In</button></a>
            </div>
        </div>

    </div>
  )
}

export default Banner;