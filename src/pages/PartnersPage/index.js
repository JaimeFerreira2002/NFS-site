  // PartnerPage.js
  import React from 'react';
  import PartnersData from '../../pages/PartnersPage/PartnersList.js'; // Update the path as necessary


  import { useTranslation } from "react-i18next";
  import { Link } from "react-router-dom";
  import './style.css'; // Import your CSS stylesheet


  // Individual Partner Card Component
  const PartnerCard = ({ title, imageUrl, link, description }) => {
    return (
      <div className="partner-card" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="overlay">
          <h2>{title}</h2>
          <p>{description}</p>

        </div>
      </div>
    );
  };


  // Main Partners Component
  const Partners = ({ partners = PartnersData }) => {
    const { t } = useTranslation();
  
    return (
      <div className='partners-page'>
        <div className='page-title-container'>
          <div className='title'>{t('partners-page.page-title')}</div>
          <div className='subtitle'>{t('partners-page.page-subtitle')}</div>
        </div>
  
        <div className="partner-list-container">
          <div className="partner-cards">
            {Object.keys(partners).map((category) => (
              <div key={category} className="partner-row">
                <h3>{category}</h3>
                {partners[category].map((partner) => (
                  <PartnerCard
                    key={partner.title}
                    title={partner.title}
                    imageUrl={partner.imageUrl}
                    link={partner.link}
                    description={partner.description}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        
        {/* Add Bottom Bar Component Here */}
        {/* <BottomBar /> */}
      </div>
    );
  };

  export default Partners;
