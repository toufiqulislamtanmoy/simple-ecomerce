import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <nav className='navbar'>
            <div className="brand-logo">
                <img src={logo} alt="" />
            </div>
            <div className="nav-menu">
                <ul>
                    <li><a href="order">Order</a></li>
                    <li><a href="oreder-review">Order Review</a></li>
                    <li><a href="inventory">Inventory</a></li>
                    <li><a href="login">Login</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;