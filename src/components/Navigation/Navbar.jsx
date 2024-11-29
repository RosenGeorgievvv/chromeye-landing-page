import React, { useState } from "react";
import logo from "../../assets/logo/chromeye_logo_small_v1.svg";
import hamburger from "../../assets/icons/hamburger.png";
import close from "../../assets/icons/close.png";
import "./navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Chromeye Logo" className="logo-img" />
      </div>
      <nav className={`links ${menuOpen ? "hidden" : ""}`}>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Blog</li>
          <li>About</li>
          <li>Agency</li>
        </ul>
      </nav>
      <button className="touch">Get in Touch</button>
      <button className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <img src={menuOpen ? close : hamburger} alt={menuOpen ? "Close Menu" : "Hamburger Menu"} />
      </button>
      <div className={`dropdown ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Blog</li>
          <li>About</li>
          <li>Agency</li>
        </ul>
        <button className="touch">Get in Touch</button>
      </div>
    </header>
  );
};

export default Navbar;
