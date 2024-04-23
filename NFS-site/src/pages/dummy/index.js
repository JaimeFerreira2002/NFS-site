import React from 'react';
import PartnersData from '../../pages/PartnersPage/PartnersList.js';
import SectionTitle from '../../components/SectionTitle';

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import './style.css'; // Make sure the path points to the updated CSS file

const PartnerCard = ({ title, imageUrl, link, description }) => {
  return (
    <div className="dummy-partner-item">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title} />
      </a>
    </div>
  );
};

const Dummy = ({ partners = PartnersData }) => {
  const { t } = useTranslation();

  return (
    <div className='dummy-partners-page'>
      <div className='dummy-page-title-container'>
        <div className='dummy-title'>{t('partners-page.page-title')}</div>
        <div className='dummy-subtitle'>{t('partners-page.page-subtitle')}</div>
      </div>

      <div className="dummy-partner-list-container">
        {Object.keys(partners).map((category) => (
          <div key={category} className="dummy-partner-category">
            <div className="dummy-section-title-wrapper">
              <SectionTitle text={category} fontSize={"30px"} altName={"technical-specifications"} />
            </div>
            <div className="dummy-partner-row">
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
    </div>
  );
};

export default Dummy;
