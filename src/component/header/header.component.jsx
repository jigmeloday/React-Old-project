import React from 'react'
import './header.style.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from "../../assest/4.3 crown.svg.svg";

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='./'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='./'>Home</Link>
            <Link className='option' to='./shop'>Shop</Link>
            <Link className='option' to='./contact'>Contact</Link>
            <Link className='option' to='signUp'>Sign Up</Link>
        </div>
    </div>
);

export default Header;
