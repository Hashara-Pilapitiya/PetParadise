import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Logo from '../Assets/logo.png';

const Navbar = () => {

    const [menu, setMenu] = useState('shop');

  return (
    
    <header className='header'>

        <div className='menu'>

            <div className='logo'>
                <Link to='/'><img src={Logo} alt='logo'/></Link>
            </div>

            <div className='menu-items'>
                <ul>
                    <li onClick={() => {setMenu('shop')}}><Link to='/'>Shop{menu === 'shop' ? <hr /> : <></>}</Link></li>
                    <li onClick={() => {setMenu('dogs')}}><Link to='/dogs'>Dogs{menu === 'dogs' ? <hr /> : <></>}</Link></li>
                    <li onClick={() => {setMenu('cats')}}><Link to='/cats'>Cats{menu === 'cats' ? <hr /> : <></>}</Link></li>
                    <li onClick={() => {setMenu('fish')}}><Link to='/fish'>Fish{menu === 'fish' ? <hr /> : <></>}</Link></li>
                    <li onClick={() => {setMenu('birds')}}><Link to='/birds'>Birds{menu === 'birds' ? <hr /> : <></>}</Link></li>
                    <li onClick={() => {setMenu('mammals')}}><Link to='/mammals'>Small Mammals{menu === 'mammals' ? <hr /> : <></>}</Link></li>
                    <li onClick={() => {setMenu('reptilia')}}><Link to='/reptilia'>Reptilia{menu === 'reptilia' ? <hr /> : <></>}</Link></li>

                </ul> 

                {/* <ul>
                <li onClick={() => {setMenu('shop')}}><Link to='/'>Shop{menu === 'shop' ? <hr /> : <></>}</Link></li>
                <li onClick={() => {setMenu('categories')}}><Link to='/categories'>Categories{menu === 'categories' ? <hr /> : <></>}</Link>
                <div className='dropdown-menu'>
                    <ul>
                    <li onClick={() => {setMenu('dogs')}}><Link to='/dogs'>Dogs{menu === 'dogs' ? <hr /> : <></>}</Link></li>
                    <li onClick={() => {setMenu('cats')}}><Link to='/cats'>Cats{menu === 'cats' ? <hr /> : <></>}</Link></li>
                    <li onClick={() => {setMenu('fish')}}><Link to='/fish'>Fish{menu === 'fish' ? <hr /> : <></>}</Link></li>
                    <li onClick={() => {setMenu('birds')}}><Link to='/birds'>Birds{menu === 'birds' ? <hr /> : <></>}</Link></li>
                    <li onClick={() => {setMenu('mammals')}}><Link to='/mammals'>Small Mammals{menu === 'mammals' ? <hr /> : <></>}</Link></li>
                    <li onClick={() => {setMenu('reptilia')}}><Link to='/reptilia'>Reptilia{menu === 'reptilia' ? <hr /> : <></>}</Link></li>
                    </ul>
                </div>
                </li>
                <li onClick={() => {setMenu('about')}}><Link to='/about'>About{menu === 'about' ? <hr /> : <></>}</Link></li>
                <li onClick={() => {setMenu('contact')}}><Link to='/contact'>Contact{menu === 'contact' ? <hr /> : <></>}</Link></li>
                </ul> */}
                   
            </div>

            <div className='login-cart'>
                <Link to='/login'><button>Login</button></Link>
                <span>0</span>
                <Link to='/cart'><FaShoppingCart className='cart-icon' /></Link>


            </div>
                
        </div>
    </header>

  )
}

export default Navbar;