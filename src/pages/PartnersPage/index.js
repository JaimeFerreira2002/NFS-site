// PartnerPage.js
import React from 'react';
import PartnersData from '../../pages/PartnersPage/PartnersList.js'; // Update the path as necessary
import SectionTitle from '../../components/SectionTitle';

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import './style.css'; // Import your CSS stylesheet


// Individual Partner Card Component
// PartnerCard component
const PartnerCard = ({ title, imageUrl, link, description }) => {
  return (
    <div className="partner-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title} />
      </a>
    </div>
  );
};



// Main Partners Component
const Partners = ({ partners = PartnersData }) => {
  const { t } = useTranslation();

  return (
    <div className='partners-page'>
      <div className='page-title-container'>
        <div className='subtitle-partners'>{t('partners-page.page-subtitle')}</div>
      </div>

      <div className="partner-list-container">
        {Object.keys(partners).map((category) => (
          <div key={category} className="partner-category">
            <div className="section-title-wrapper">
              <SectionTitle text={category} fontSize={"30px"} altName={"technical-specifications"} />
            </div>
            <div className="partner-row">
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
          </div>
        ))}
      </div>

      {/* Add Bottom Bar Component Here */}
      {/* <BottomBar /> */}
    </div>
  );
};

export default Partners;
