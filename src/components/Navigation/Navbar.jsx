import React, { useState, useEffect} from "react";
import logo from "../../assets/logo/chromeye_logo_small_v1.svg";
import hamburger from "../../assets/icons/hamburger.png";
import close from "../../assets/icons/close.png";
import { BASE_URL } from "../../constants/api";
import "./navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [links, setLinks] = useState([]);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Fetch navigation links dynamically
  useEffect(() => {
    const fetchLinks = async () => {
      try{
        const response = await fetch(BASE_URL);
        if(!response.ok){
          throw new Error(`Failed to fetch navigation links! Status: ${response.status}`);
        }
        const data = await response.json();
        const orderLinks = (data.main_menu || []).sort((a, b) => a.order - b.order).filter(item => item.url);
        setLinks(orderLinks);
      } catch(error) {
        console.error("Failed to fetch main menu:", error);
      }
    }
    fetchLinks();
  }, [])

  return (
    <header className="navbar">
      <div className="wrapper">
        <div className="logo">
          <img src={logo} alt="Chromeye Logo" className="logo-img" />
        </div>
        <nav className={`links ${menuOpen ? "hidden" : ""}`}>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                {link.url ? <a href={link.url}>{link.name}</a> : link.name}
              </li>
            ))}
          </ul>
        </nav>
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <img
            src={menuOpen ? close : hamburger}
            alt={menuOpen ? "Close Menu" : "Hamburger Menu"}
          />
        </button>
        <div className={`dropdown ${menuOpen ? "open" : ""}`}>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                {link.url ? <a href={link.url}>{link.name}</a> : link.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};


export default Navbar;
