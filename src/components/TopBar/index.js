import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NFSLogo from '../../assets/images/NFSLogo.png';
import './style.css';
import { useTranslation } from 'react-i18next';
import IconButton from '../IconButton';
import PT_FLAG from '../../assets/images/pt_flag.png';
import EN_FLAG from '../../assets/images/en_flag.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MobileDrawer from '../../components/MobileDrawer';
import HamburgerButton from '../../components/HamburgerIcon';


const TopBar = ({ isScrolled, toggleDrawer }) => { // Accept toggleDrawer as a prop
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || 'pt');
  const isHomePage = location.pathname === '/';

  // State to control the drawer's open/close state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Toggle function adjusted for this component
  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    toggleDrawer(); // Assuming this prop function does additional tasks
  };


  useEffect(() => {
    // Change the application's language to the saved or default language when the component mounts
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);

  const changeLanguage = (lang) => {
    // Change the language in i18next
    i18n.changeLanguage(lang);
    // Update the selectedLanguage state
    setSelectedLanguage(lang);
    // Save the user's language preference in localStorage
    localStorage.setItem('language', lang);
    // Optionally, reload the page if needed. Note that reloading the page might not be the best user experience.
    window.location.reload();
  };

  // Determine if the hamburger should move based on the drawer's state and possibly the viewport width
  const shouldHamburgerMove = isDrawerOpen; // Add additional conditions for viewport width if needed

  return (
    <nav className={`top-bar ${isScrolled ? 'scrolled' : ''} ${isHomePage ? 'home' : ''}`}>
      <button onClick={() => toggleDrawer()} className='drawerButton'>
        <HamburgerButton
          isDrawerOpen={isDrawerOpen}
          toggleDrawer={handleToggleDrawer}
          className={`${isDrawerOpen ? 'hamburger-move' : ''}`}
        />
      </button>
      <div className="logo">
        <Link to="/">
          <img src={NFSLogo} alt="NFS_LOGO" />
        </Link>
      </div>
      <ul>
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
        {/* <li className={location.pathname === '/articles' ? 'active' : ''}>
          <Link to="/articles">{t('topbar.articles')}</Link>
        </li> */}
        {/* <li className={location.pathname === '/recruitment' ? 'active' : ''}>
          <Link to="/recruitment">{t('topbar.recruitment')}</Link>
        </li> */}
        <li className={location.pathname === '/contacts' ? 'active' : ''}>
          <Link to="/contacts">{t('topbar.contacts')}</Link>
        </li>
        <li className={location.pathname === '/recruitment' ? 'active' : ''}>
          <Link to="/recruitment">{t('topbar.recruitment')}</Link>
        </li>

      </ul>

      <div className="language-buttons">
        <IconButton className={`pt-button ${selectedLanguage === 'pt' ? 'selected' : ''}`} onClick={() => changeLanguage('pt')} icon={PT_FLAG} />
        <IconButton className={`en-button ${selectedLanguage === 'en' ? 'selected' : ''}`} onClick={() => changeLanguage('en')} icon={EN_FLAG} />
      </div>
    </nav>
  );
};

export default TopBar;
