import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Logo from '../Assets/logo.png';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const [menu, setMenu] = useState('shop');

    const DropDown = ['Dogs', 'Cats', 'Fish', 'Birds', 'Mammals', 'Reptilia']

    const menuRef = React.useRef();
    const imgRef = React.useRef();

    window.addEventListener('click', (e) => {
        if (e.target !== menuRef.current && e.target !== imgRef.current) 
            setOpen(false);
    })

  return (
    
    <header className='header'>

        <div className='menu'>

            <div className='logo'>
                <Link to='/'><img src={Logo} alt='logo'/></Link>
            </div>

            <div className='menu-items'>
                {/* <ul>
                    <li onClick={() => {setMenu('shop')}}><Link to='/'>Shop{menu === 'shop' ? <hr /> : <></>}</Link></li>
                    <li onClick={() => {setMenu('dogs')}}><Link to='/dogs'>Dogs{menu === 'dogs' ? <hr /> : <></>}</Link></li>
                    <li onClick={() => {setMenu('cats')}}><Link to='/cats'>Cats{menu === 'cats' ? <hr /> : <></>}</Link></li>
                    <li onClick={() => {setMenu('fish')}}><Link to='/fish'>Fish{menu === 'fish' ? <hr /> : <></>}</Link></li>
                    <li onClick={() => {setMenu('birds')}}><Link to='/birds'>Birds{menu === 'birds' ? <hr /> : <></>}</Link></li>
                    <li onClick={() => {setMenu('mammals')}}><Link to='/mammals'>Small Mammals{menu === 'mammals' ? <hr /> : <></>}</Link></li>
                    <li onClick={() => {setMenu('reptilia')}}><Link to='/reptilia'>Reptilia{menu === 'reptilia' ? <hr /> : <></>}</Link></li>

                </ul>  */}

                <ul>
                <li onClick={() => {setMenu('shop')}}><Link to='/'>Shop{menu === 'shop' ? <hr /> : <></>}</Link></li>
                <li className='categories' onClick={() => setOpen(!open)}style={{fontWeight: 600, fontSize: 18, cursor: 'pointer'}} ref={imgRef}>Categories
                { open && <div className='dropdown-menu' ref={menuRef}>
                    <ul>
                    <li onClick={() => {setMenu('dogs')}}><Link to='/dogs'>Dogs{menu === 'dogs' ? <hr /> : <></>}</Link></li>
                    <li onClick={() => {setMenu('cats')}}><Link to='/cats'>Cats{menu === 'cats' ? <hr /> : <></>}</Link></li>
                    <li onClick={() => {setMenu('fish')}}><Link to='/fish'>Fish{menu === 'fish' ? <hr /> : <></>}</Link></li>
                    <li onClick={() => {setMenu('birds')}}><Link to='/birds'>Birds{menu === 'birds' ? <hr /> : <></>}</Link></li>
                    <li onClick={() => {setMenu('mammals')}}><Link to='/mammals'>Mammals{menu === 'mammals' ? <hr /> : <></>}</Link></li>
                    <li onClick={() => {setMenu('reptilia')}}><Link to='/reptilia'>Reptilia{menu === 'reptilia' ? <hr /> : <></>}</Link></li> 
                    {/* {DropDown.map((drop) => {
                        return (
                            <li onClick={() => setOpen(false)} key={drop}>{drop}</li>
                        )
                    })} */}
                    </ul>
                </div> }
                </li>
                <li onClick={() => {setMenu('about')}}><Link to='/about'>About{menu === 'about' ? <hr /> : <></>}</Link></li>
                <li onClick={() => {setMenu('contact')}}><Link to='/contact'>Contact{menu === 'contact' ? <hr /> : <></>}</Link></li>
                </ul>
                   
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