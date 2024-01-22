// PartnerPage.js
import React from 'react';
import NFSLogo from '../..//assets/images/NFSLogo.png';
import GalpLogo from '../../assets/images/Galp.png';

import './Partners.css'; // Import your CSS stylesheet


// Individual Partner Card Component
const PartnerCard = ({ title, imageUrl, link, description }) => {
  return (
    <div className="garage-item" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="overlay">
        <h2>{title}</h2>
        <p>{description}</p>
     
      </div>
    </div>
  );
};


const dummyPartnerData = {
  'Partners': [
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
  return (
    <div className="partners-section">
      <h2>Partners</h2>
      <p>Working together to lead the charge</p>
      <div className="partner-categories">
        {Object.keys(partners).map((category) => (
          <div key={category} className="partner-category">
            <h3>{category}</h3>
            <div className="partner-grid">
              {partners[category].map((partner) => (
                <PartnerCard
                  key={partner.title}
                  title={partner.title}
                  imageUrl={partner.imageUrl}
                  link={partner.link} // Make sure each partner has a 'link' property in your data
                  description={partner.description} // Assuming you have a description for each partner
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
