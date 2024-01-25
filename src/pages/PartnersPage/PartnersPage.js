// PartnerPage.js
import React from 'react';
import NFSLogo from '../../assets/images/NFSLogo.png';
import GalpLogo from '../../assets/images/Galp.png';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import './Partners.css'; // Import your CSS stylesheet


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




const dummyPartnerData = {

  "Gold": [
    {
      title: 'BYBIT',
      imageUrl: '/path/to/bybit-logo.png' // Replace with actual path to image
    },
    {
      title: 'TAG Heuer',
      imageUrl: '/path/to/tagheuer-logo.png' // Replace with actual path to image
    },
    // ... other team partners

    {
      title: 'Galp',
      imageUrl: GalpLogo // Replace with actual path to image
    },

    // ... other technical partners
  ],
  "Prata": [
    {
      title: 'BYBIT',
      imageUrl: '/path/to/bybit-logo.png' // Replace with actual path to image
    },
    {
      title: 'TAG Heuer',
      imageUrl: '/path/to/tagheuer-logo.png' // Replace with actual path to image
    },
    // ... other team partners

    {
      title: 'Galp',
      imageUrl: GalpLogo // Replace with actual path to image
    },

    // ... other technical partners
  ],
  "Bronze": [
    {
      title: 'BYBIT',
      imageUrl: '/path/to/bybit-logo.png' // Replace with actual path to image
    },
    {
      title: 'TAG Heuer',
      imageUrl: '/path/to/tagheuer-logo.png' // Replace with actual path to image
    },
    // ... other team partners

    {
      title: 'Galp',
      imageUrl: GalpLogo // Replace with actual path to image
    },
    // ... other technical partners
  ],
  // ... other categories
};



// Main Partners Component
const Partners = ({ partners = dummyPartnerData }) => {
  const { t } = useTranslation();

  return (
    <div className='partner-page'>
      <div className='page-title-container'>
        <div className='title'>{t('partners-page.page-title')}</div>
        <div className='subtitle'>{t('partners-page.page-subtitle')}</div>
      </div>

      {/* Wrap the partner-cards div in a container with fixed height */}
      <div className="partner-list-container">
        <div className="partner-cards">
          {Object.keys(partners).map((category) => (
            <div key={category} className="partner-row">
              {/* Add a title element for each category */}
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
    </div>
  );
};

export default Partners;
