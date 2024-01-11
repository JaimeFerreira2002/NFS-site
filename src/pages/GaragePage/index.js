import React from 'react';
import './style.css';
import Car_Render from "../../assets/images/car_render_bridge.jpg";
import NFS_Logo from "../../assets/images/NFSLogo.png";
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';



const GaragePage = () => {

const { t } = useTranslation();

  return (
    <div className='garage-page'>
        <div className='page-title-container'>
        <div className='title'>{t('garage-page.page-title')}</div>
        <div className='subtitle'>{t('garage-page.page-subtitle')}</div> 
        </div>
      <div className="cards-container">
        <div className="garage-item" id="garage-item1" style={{
            backgroundImage: `url(${Car_Render})`,
            }}>
            <div className="overlay">
            <h2>FS FENIX</h2>
            <p>{t('garage-page.fenix-description')}</p>

            <Link to="/garage/fsfenix"><button>{t('garage-page.button-text')}</button></Link>
            
            </div>
        </div>
        <div className="garage-item" id="garage-item2" style={{
            backgroundImage: `url(${NFS_Logo})`,
            }}>
            <div className="overlay">
            <h2>TBH</h2>
            <p>{t('topbar.start')}</p>
            <button>{t('topbar.start')}</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default GaragePage;