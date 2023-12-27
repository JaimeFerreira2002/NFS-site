import React from 'react';
import { Link } from 'react-router-dom';
import NFSLogo from '../../assets/images/NFSLogo.png'
import './TopBar.css';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

//if we dont have parameters, we use const??
const TopBar = () => {

const { t } = useTranslation(); //this t variable is used for language switching

  return (
    <nav className="top-bar">
      <div className="logo">
        <img src={NFSLogo} alt="NFS" />
      </div>
      <ul>   
        <li><Link to="/">{t('topbar.start')}</Link></li>
        <li><Link to="/about">{t('topbar.about')}</Link></li>
        <li><Link to="/team">{t('topbar.team')}</Link></li>
        <li><Link to="/partners">{t('topbar.partnerships')}</Link></li>
        <li><Link to="/articles">{t('topbar.articles')}</Link></li>
        <li><Link to="/recruitment">{t('topbar.recruitment')}</Link></li>
        <li><Link to="/contacts">{t('topbar.contacts')}</Link></li>
      </ul>
      <div className="language-swicther">
      <LanguageSwitcher/>
      </div>
    </nav>
  );
}

export default TopBar;