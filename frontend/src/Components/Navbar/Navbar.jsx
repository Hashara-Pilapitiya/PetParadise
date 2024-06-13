import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { IoIosCloseCircle } from 'react-icons/io';
import Logo from '../Assets/logo.png';

const Navbar = () => {
  return (
    
    <header className='header'>

        <div className='menu'>

            <div className='logo'>
                <Link to='/'><img src={Logo} alt='logo'/></Link>
            </div>

            <div className='menu-items'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/animals'>Animals</Link></li>
                    <li><Link to='/login'>Login & Register</Link></li>
                    <li>
                        <span className='close'><IoIosCloseCircle /></span>
                    </li>
                </ul>
            </div>

            <div className='cart'>
                <span>0</span>
                <Link to='/cart'><FaShoppingCart className='cart-icon' /></Link>
            </div>
                
        </div>
    </header>

  )
}

export default Navbar;