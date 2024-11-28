import React from 'react'
import logo from '../../assets/logo/chromeye_logo_small_v1.svg';
import { Link } from 'react-router-dom';
import "./navbar.scss"

const Navbar = () => {
  return (
    <header>
        <div className='logo'>
            <img src={logo} alt='Chromeye Logo' className='logo-img' />
        </div>
        <nav className='links'>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Blog</li>
                <li>About</li>
                <li>Agency</li>
            </ul>
        </nav>
        <button className='touch'>Get in Touch</button>
    </header>
  )
}

export default Navbar