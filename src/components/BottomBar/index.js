import React from 'react';
import NFSLogo from '../../assets/images/NFSLogo.png'
import InstagramLogo from '../../assets/images/instagram_icon.png'
import LinkedIn from '../../assets/images/linkedIn_icon.png'
import './style.css'

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      <div className="left-section">
        {/* Logo */}
        <div className='logo'>
            <img src={NFSLogo} alt="NFS_LOGO" />
        </div>        

        {/* Social Icons and Links */}
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={InstagramLogo} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
      </div>

        {/* Navigation Links */}
        <div className="navigation-links">
          <a href="/about">About</a>
          <a href="/team">Team</a>
          <a href="/partners">Partners</a>
          <a href="/articles">Articles</a>
          <a href="/recruitment">Recruitment</a>
          <a href="/contacts">Contacts</a>
        </div>

      <div className="right-section">
        {/* Newsletter Subscription */}
        <div className="newsletter-subscription">
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
