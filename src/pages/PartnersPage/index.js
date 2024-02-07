// PartnerPage.js
import React from 'react';
import PartnersData from '../../pages/PartnersPage/PartnersList.js'; // Update the path as necessary
import SectionTitle from '../../components/SectionTitle';

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import './style.css'; // Import your CSS stylesheet
import PageHeader from '../../components/PageHeader/index.js';


// Individual Partner Card Component
// PartnerCard component
// PartnerCard component with dynamic style based on tier
const PartnerCard = ({ title, imageUrl, link, description, tier }) => {
  // Define different sizes for each tier
  const sizes = {
    Gold: { width: 'clamp(170px, 20vw, 350px)', height: 'auto' }, // Example size for Gold
    Silver: { width: 'clamp(130px, 20vw, 250px)', height: 'auto' }, // Example size for Silver
    Bronze: { width: 'clamp(90px, 20vw, 200px)', height: 'auto' } // Example size for Bronze
  };

  // Get the size for the current partner's tier
  const size = sizes[tier] || { width: '100px', height: '100px' }; // Default size if tier is not recognized

  return (
    <div className="partner-card" style={{ width: size.width, height: size.height }}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title} style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </a>
    </div>
  );
};



// Main Partners Component
const Partners = ({ partners = PartnersData }) => {
  const { t } = useTranslation();

  return (
    <div className='partners-page'>
    
      <PageHeader title={t("partners-page.page-title")} subtitle={t("partners-page.page-subtitle")}/>

      <div className="partner-list-container">
        {Object.keys(partners).map((category) => (
          <div key={category} className="partner-category">
            <div className="section-title-wrapper">
              <SectionTitle text={category} fontSize={"30px"} altName={"technical-specifications"} />
            </div>
            <div className="partner-row">
              {partners[category].map((partner) => (
                // Inside the Partners component
                <PartnerCard
                  key={partner.title}
                  title={partner.title}
                  imageUrl={partner.imageUrl}
                  link={partner.link}
                  description={partner.description}
                  tier={partner.tier} // Pass the tier prop to the PartnerCard
                />

              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Partners;
