import React, { useEffect, useState } from 'react';
import './footer.scss';

// Import assets
import facebookIcon from '../../assets/icons/chromeye_assignment_facebookicon_v1.svg';
import linkedinIcon from '../../assets/icons/chromeye_assignment_linkedinicon_v1.svg';
import twitterIcon from '../../assets/icons/chromeye_assignment_twittericon_v1.svg';

const Footer = () => {
  const [companyData, setCompanyData] = useState(null);
  const [footerMenu, setFooterMenu] = useState([]);

  useEffect(() => {
    fetch('https://s3.eu-west-2.amazonaws.com/chromeye.tasks/data.json')
      .then((response) => response.json())
      .then((data) => {
        setCompanyData(data.company_data);
        setFooterMenu(data.footer_menu.sort((a, b) => a.order - b.order));
      });
  }, []);

  if (!companyData) {
    return <div className="loading">Loading...</div>;
  }

  const primaryMenu = footerMenu.filter((item) =>
    ['Studio', 'Our Work', 'Services', 'Information'].includes(item.name)
  );
  const secondaryMenu = footerMenu.filter(
    (item) => !['Studio', 'Our Work', 'Services', 'Information'].includes(item.name)
  );

  return (
    <footer className="footer">
      <div className="footer-container">
        <section className="footer-about">
          
          <img src={companyData.logo || ''} alt="logo" className="footer-logo" />
          <button className="footer-button">Request a Call</button>
          <ul className="footer-primary-menu">
            {primaryMenu.map((item, index) => (
              <li key={index} className="menu-item">
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
          <p className="footer-intro">{companyData.intro || 'Introduction not available.'}</p>
        </section>

        <nav className="footer-nav">
          <ul className="footer-secondary-menu">
            {secondaryMenu.map((item, index) => (
              <li key={index} className="menu-item">
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <section className="footer-contact">
          
          <div className="footer-socials">
            <h2 className="footer-heading">Follow Us:</h2>
            <ul className="footer-social-links">
              <li>
                <img src={facebookIcon} alt="facebook" />
              </li>
              <li>
                <img src={twitterIcon} alt="twitter" />
              </li>
              <li>
                <img src={linkedinIcon} alt="linkedin" />
              </li>
            </ul>
          </div>
          <h2 className="footer-heading">Contact:</h2>
          <address className="footer-address">
            {companyData.address || 'Address not available.'} <br />
            <a href="">
              Phone: {companyData.phone || 'Phone not available'}
            </a> <br />
            <a href={`mailto:${companyData.email || ''}`} className='email-link'>
              <span>Web: </span>{companyData.email || 'Email not available'}
            </a>
          </address>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
