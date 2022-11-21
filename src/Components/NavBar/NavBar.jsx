import React from 'react';
import './NavBar.css';
import logo from './logo.png';

const NavBar = () => {
    return (
        <nav className='NavBar'>

            <a href="/">
                <img className='logo' src={logo} alt="logo" />
                </a>
            <a href="/contact">Contact</a>
            <a href="#Footer">Redes</a>
        </nav>
    )
}

export default NavBar
