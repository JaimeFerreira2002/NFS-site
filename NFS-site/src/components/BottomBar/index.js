import React, { useState } from 'react';

import axios from 'axios'; // Import axios for making HTTP requests
import NFSLogo from '../../assets/images/NFSLogo.png';
import InstagramLogo from '../../assets/images/instagram_icon.png';
import LinkedIn from '../../assets/images/linkedIn_icon.png';
import './style.css';
import { useTranslation } from 'react-i18next';


const BottomBar = () => {
  const { t, i18n } = useTranslation(); // this variable is used for language switching
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      // Replace 'YOUR_API_KEY' with your actual API key
      const response = await axios.post('YOUR_API_ENDPOINT', {
        email: email,
        // Add any other required fields by your email service provider
      }, {
        headers: {
          'Content-Type': 'application/json',
          'api-key': 'c8847a0342737ecc8c08bf7746adf579-us21',
        },
      });

      console.log('Subscription successful:', response.data);
      setIsSent(true);
      setEmail(''); // Clear the input field after successful subscription

      setTimeout(() => {
        setIsSent(false); // Hide confirmation message after a few seconds
      }, 3000);
    } catch (error) {
      console.error('Subscription error:', error);
    }
  };


  return (
    <div className="bottom-bar">

      <div className="left-section">
        {/* Social Icons */}

        <div className="social-icons-bb">
          <a className="social-icon-bb" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={InstagramLogo} alt="Instagram" />
          </a>
          <a className="social-icon-bb" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>

      </div>

      {/* Navigation Links */}
      <div className="navigation-links">
        <a href="/about">{t("topbar.about")}</a>
        <a href="/partners">{t("topbar.partnerships")}</a>
        {/* <a href="/articles">{t("topbar.about")}</a> */}
        {/* <a href="/recruitment">{t("topbar.about")}</a> */}
        <a href="/garage">{t("topbar.garage")}</a>
        <a href="/contacts">{t("topbar.contacts")}</a>
      </div>

      <div className="right-section">

      {/* NFS Logo */}
      {/* <div className="logo-bb">
          <a href="/">
            <img src={NFSLogo} alt="NFS_LOGO" />
          </a>
      </div> */}


        {/* Newsletter Subscription */}
        {/* <div className="form-newsletter">
          {isSent ? (
            <div className="confirmation-message">Sent!</div>
          ) : (
            <>
              <input
                type="text"
                placeholder={t("topbar.email-newsletter")}
                value={email}
                onChange={handleInputChange}
              />
              <button onClick={handleSubmit}>{t("topbar.subscribe")}</button>
            </>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default BottomBar;
