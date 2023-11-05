import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="1">Order</a>
                <a href="2">Order review</a>
                <a href="3">Manage Inventory</a>
                <a href="4">LogIn</a>
            </div>
        </nav>
    );
};

export default Header;