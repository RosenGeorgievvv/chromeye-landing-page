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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/agency">Agency</Link></li>
            </ul>
        </nav>
        <button className='touch'>Get in Touch</button>
    </header>
  )
}

export default Navbar