import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NFSLogo from '../../assets/images/NFSLogo.png';
import './style.css';
import { useTranslation } from 'react-i18next';
import IconButton from '../IconButton';
import PT_FLAG from '../../assets/images/pt_flag.png';
import EN_FLAG from '../../assets/images/en_flag.png';

const MobileDrawer = ({ isOpen, toggleDrawer }) => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // Retrieve the language preference from localStorage or default to 'pt'
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || "pt");

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
    localStorage.setItem('language', lang); // Save the user's language preference in localStorage
    window.location.reload(); // Reload the page to apply the language change
  };

  return (
    <>
      <div className={`drawer ${isOpen ? 'open' : ''}`}>
        <button className="close-drawer" onClick={toggleDrawer}>
          X
        </button>
        <nav className="drawer-nav">
          <ul onClick={toggleDrawer}>
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/">{t('topbar.start')}</Link>
            </li>
            <li className={location.pathname === '/about' ? 'active' : ''}>
              <Link to="/about">{t('topbar.about')}</Link>
            </li>
            <li className={location.pathname === '/garage' ? 'active' : ''}>
              <Link to="/garage">{t('topbar.garage')}</Link>
            </li>
            <li className={location.pathname === '/partners' ? 'active' : ''}>
              <Link to="/partners">{t('topbar.partnerships')}</Link>
            </li>
            <li className={location.pathname === '/contacts' ? 'active' : ''}>
              <Link to="/contacts">{t('topbar.contacts')}</Link>
            </li>
          </ul>
        </nav>
        <div className='drawerEnd'>
          <div className="language-buttons-drawer">
            <IconButton className={`pt-button ${selectedLanguage === 'pt' ? 'selected' : ''}`} onClick={() => changeLanguage('pt')} icon={PT_FLAG} />
            <IconButton className={`en-button ${selectedLanguage === 'en' ? 'selected' : ''}`} onClick={() => changeLanguage('en')} icon={EN_FLAG} />
          </div>
          <div className="logo-drawer" onClick={toggleDrawer}>
            <Link to="/">
              <img src={NFSLogo} alt="NFS_LOGO" />
            </Link>
          </div>
        </div>
      </div>
      {isOpen && <div className="drawer-overlay" onClick={toggleDrawer}></div>}
    </>
  );
};

export default MobileDrawer;
