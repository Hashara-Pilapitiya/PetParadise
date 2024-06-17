import React from 'react';
import './Navbar.css';
import Logo from '../../Assets/logo.png';
import { Link } from 'react-router-dom';
import Profile from '../../Assets/profile.png';

const Navbar = () => {
  return (

    <div className='header'>

        <div className='menu'>

            <div className='logo'>
                <Link to='/'><img className='logo-name' src={Logo} alt='logo'/></Link>
                <img className='profile-name' src={Profile} alt=''/>
            </div>

            
            
            
            </div>

        </div>

  )
}

export default Navbar;
