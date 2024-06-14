import React from 'react';
import './Hero.css';
import HeroImage from '../Assets/hero.png';

const Hero = () => {
  return (
    < div className='hero'>

        <div className='main'>

        <div className='main_left'>
            <div className='main_left_title'>
                <h1>Welcome to Your Pet's Perfect Paradise!</h1>
            </div>
            <div className='main_left_content'>
                <p>Discover a wide range of pets, supplies, and expert care tips at PetParadise. We're dedicated to helping you keep your pets happy and healthy with top-quality products and friendly service.</p>
            </div>
        </div>

        <div className='main_right'>
            <img src={HeroImage} alt='Hero' />
        </div>

        </div>

    </div>
  )
}

export default Hero;