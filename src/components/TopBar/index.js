import React, { useState } from 'react';
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


const TopBar = ({ isScrolled, toggleDrawer }) => { // Accept toggleDrawer as a prop
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState("pt");
  const isHomePage = location.pathname === '/';

  // State to control the drawer's open/close state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);




  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
  };



  return (
    <nav className={`top-bar ${isScrolled ? 'scrolled' : ''} ${isHomePage ? 'home' : ''}`}>
      <button onClick={() => toggleDrawer()} className='drawerButton'>
        <FontAwesomeIcon icon={faBars} />
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

      </ul>

      <div className="language-buttons">
        <IconButton className={`pt-button ${selectedLanguage === 'pt' ? 'selected' : ''}`} onClick={() => changeLanguage('pt')} icon={PT_FLAG} />
        <IconButton className={`en-button ${selectedLanguage === 'en' ? 'selected' : ''}`} onClick={() => changeLanguage('en')} icon={EN_FLAG} />
      </div>
    </nav>
  );
};

export default TopBar;
