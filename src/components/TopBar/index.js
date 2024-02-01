import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NFSLogo from '../../assets/images/NFSLogo.png';
import NFSLogoBorder from '../../assets/images/NFSLogoBoreder.png';
import './style.css';
import { useTranslation } from 'react-i18next';
import IconButton from '../IconButton';
import PT_FLAG from '../../assets/images/pt_flag.png';
import EN_FLAG from '../../assets/images/en_flag.png';



const TopBar = ({ isScrolled }) => {
  const location = useLocation();
  const { t, i18n } = useTranslation(); // this variable is used for language switching

  const [selectedLanguage, setSelectedLanguage] = useState("pt"); // we use the state for language switch buttons
  const isHomePage = location.pathname === '/';

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
  };

  return (
    <nav className={`top-bar ${isScrolled ? 'scrolled' : ''} ${isHomePage ? 'home' : ''}`}>
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
