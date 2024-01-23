import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NFSLogo from '../../assets/images/NFSLogo.png';
import NFSLogoBorder from '../../assets/images/NFSLogoBoreder.png';
import './style.css';
import { useTranslation } from 'react-i18next';
import IconButton from '../IconButton';
import PT_FLAG from '../../assets/images/pt_flag.png';
import EN_FLAG from '../../assets/images/en_flag.png';

const TopBar = ({ isScrolled }) => {
  const { t, i18n } = useTranslation(); // this variable is used for language switching

  const [selectedLanguage, setSelectedLanguage] = useState("pt"); // we use the state for language switch buttons

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); 
    setSelectedLanguage(lang);
  };

  return (
    <nav className={`top-bar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        {/* Conditional rendering of the logo based on isScrolled */}
        <img src={isScrolled ? NFSLogo : NFSLogoBorder} alt="NFS_LOGO" />
      </div>
      <ul>   
        <li><Link to="/">{t('topbar.start')}</Link></li>
        <li><Link to="/about">{t('topbar.about')}</Link></li>
        <li><Link to="/garage">{t('topbar.garage')}</Link></li>
        <li><Link to="/partners">{t('topbar.partnerships')}</Link></li>
        <li><Link to="/articles">{t('topbar.articles')}</Link></li>
        <li><Link to="/recruitment">{t('topbar.recruitment')}</Link></li>
        <li><Link to="/contacts">{t('topbar.contacts')}</Link></li>
      </ul>
      <div className="language-buttons">
        <IconButton className={`pt-button ${selectedLanguage === 'pt' ? 'selected' : ''}`} onClick={() => changeLanguage('pt')} icon={PT_FLAG} />
        <IconButton className={`en-button ${selectedLanguage === 'en' ? 'selected' : ''}`} onClick={() => changeLanguage('en')} icon={EN_FLAG} />
      </div>
    </nav>
  );
};

export default TopBar;
