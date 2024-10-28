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
import { auth } from '../../firebase'; // Import auth from Firebase

const TopBar = ({ isScrolled, toggleDrawer }) => { 
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || 'pt');
  const isHomePage = location.pathname === '/';

  // State to control the drawer's open/close state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // State to store logged-in user's email
  const [userEmail, setUserEmail] = useState(null);

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    toggleDrawer();
  };

  useEffect(() => {
    // Listen to Firebase authentication changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email); // Set the user's email if they are logged in
      } else {
        setUserEmail(null); // Set to null if no user is logged in
      }
    });

    return () => unsubscribe(); // Cleanup the listener on component unmount
  }, []);

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
    localStorage.setItem('language', lang);
    window.location.reload();
  };

  const shouldHamburgerMove = isDrawerOpen;

  // Function to log out the user
  const handleLogout = () => {
    auth.signOut().then(() => {
      setUserEmail(null); // Reset user email after logout
      console.log("User signed out");
    }).catch((error) => {
      console.error("Error signing out", error);
    });
  };

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
        <li className={location.pathname === '/contacts' ? 'active' : ''}>
          <Link to="/contacts">{t('topbar.contacts')}</Link>
        </li>
        <li className={location.pathname === '/news' ? 'active' : ''}>
          <Link to="/news">{t('topbar.artigos')}</Link>
        </li>
      </ul>

      <div className="language-buttons">
        <IconButton className={`pt-button ${selectedLanguage === 'pt' ? 'selected' : ''}`} onClick={() => changeLanguage('pt')} icon={PT_FLAG} />
        <IconButton className={`en-button ${selectedLanguage === 'en' ? 'selected' : ''}`} onClick={() => changeLanguage('en')} icon={EN_FLAG} />
      </div>

      {/* Display user's email if logged in, along with the logout button */}
      {userEmail && (
        <div className="user-info">
          <span>{userEmail}</span>
          <button onClick={handleLogout} className="logout-button" >
            {"Logout"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default TopBar;