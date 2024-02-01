import React, { useState } from 'react';
import NFSLogo from '../../assets/images/NFSLogo.png';
import InstagramLogo from '../../assets/images/instagram_icon.png';
import LinkedIn from '../../assets/images/linkedIn_icon.png';
import './style.css';

const BottomBar = () => {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false); // State for showing the confirmation message

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    setEmail(''); // Clear the input field
    setIsSent(true); // Show confirmation message

    // Hide the confirmation message after 3 seconds
    setTimeout(() => {
      setIsSent(false);
    }, 3000);

    // Add your form submission logic here (e.g., API call)
  };

  return (
    <div className="bottom-bar">
      <div className="logo-bb">
        <img src={NFSLogo} alt="NFS Logo" />
      </div>
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
        <a href="/about">About</a>
        <a href="/team">Team</a>
        <a href="/partners">Partners</a>
        <a href="/articles">Articles</a>
        <a href="/recruitment">Recruitment</a>
        <a href="/contacts">Contacts</a>
      </div>

      <div className="right-section">
        {/* Newsletter Subscription */}
        <div className="form-newsletter">
          {isSent ? (
            <div className="confirmation-message">Sent!</div>
          ) : (
            <>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleInputChange}
              />
              <button onClick={handleSubmit}>Subscribe</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
