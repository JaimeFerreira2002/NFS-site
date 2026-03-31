// PartnerPage.js
import React, { useEffect, useState } from 'react';
import PartnersData from "./PartnersList.js";
import { useTranslation } from "react-i18next";
import "./style.css";
import PageHeader from "../../components/PageHeader/index.js";
import loadImages from '../../HelperFunctions.js'

const Partners = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imagesURLs = [];

    // Load gallery images
    carImages.forEach(url => imagesURLs.push(url));

    // Load partner logos
    for (const tier in PartnersData.allPartners) {
      PartnersData.allPartners[tier].forEach(partner => {
        imagesURLs.push(partner.imageUrl);
      });
    }
  
    loadImages(imagesURLs, () => {
      setIsLoading(false);
    });
  }, []);

  // Partnership perks/benefits
  const partnershipPerks = [
    {
      title: t("partners-page.perk-visibility-title") || "Brand Visibility",
      description: t("partners-page.perk-visibility-desc") || "Your logo prominently displayed on our car and in the garage during competitions and events"
    },
    {
      title: t("partners-page.perk-exposure-title") || "Media Exposure",
      description: t("partners-page.perk-exposure-desc") || "Featured in our social media, website, and press releases reaching thousands of engineering enthusiasts"
    },
    {
      title: t("partners-page.perk-network-title") || "Networking",
      description: t("partners-page.perk-network-desc") || "Direct connection with talented engineering students and access to recruitment opportunities"
    },
    {
      title: t("partners-page.perk-innovation-title") || "Innovation Partnership",
      description: t("partners-page.perk-innovation-desc") || "Collaborate on cutting-edge automotive technology and sustainable mobility solutions"
    },
    {
      title: t("partners-page.perk-education-title") || "Educational Impact",
      description: t("partners-page.perk-education-desc") || "Support the next generation of engineers while enhancing your corporate social responsibility"
    }
  ];

  // Limited to 6 images for gallery
  const carImages = [
    "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2Fgaleria%2Ffenix3.jpg?alt=media&token=877adc35-2178-4c26-a755-f27c0ec874cd", 
    "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2Fgaleria%2Ffenix8.JPG?alt=media&token=ac0f6680-3ef4-484d-beaf-2a435da52d24",
    "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2FFotos%20FSPT%2FDSC07602.JPG?alt=media&token=414e080b-fd0a-497e-af2b-999b50c233b5",
    "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2FFotos%20FSPT%2FDSC07686.JPG?alt=media&token=0f431637-cc20-430c-a6af-43ac2c7b1c35",
    "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2FFotos%20FSPT%2FDay1-42.jpg?alt=media&token=711852f4-b883-48b3-bf3c-b1c5d3606021",
    "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2Fgaleria%2Ffenix2.jpg?alt=media&token=31e035f2-69bf-48fc-b490-1748ecc159b2",
  ];

  const tierTitles = {
    institutional: t("partners-page.tier-institutional") || "Institutional Partners",
    gold: t("partners-page.tier-gold") || "Gold Partners",
    silver: t("partners-page.tier-silver") || "Silver Partners",
    bronze: t("partners-page.tier-bronze") || "Bronze Partners",
    software: t("partners-page.tier-software") || "Software Partners",
    partner: t("partners-page.tier-partner") || "Partner"
  };

  return (
    <div className="partners-page">
      <PageHeader
        title={t("partners-page.page-title")}
        subtitle={t("partners-page.page-subtitle")}
        gradientColor={"#19a3ff"}
      />
      
      {/* Top Grid: Benefits and Gallery */}
      <div className="partners-grid-container">
        {/* Column 1: Partnership Perks */}
        <div className="partners-column perks-column">
          <h2 className="column-title">{t("partners-page.perks-title") || "Why Partner With Us?"}</h2>
          <div className="perks-list">
            {partnershipPerks.map((perk, index) => (
              <div key={index} className="perk-item">
                <div className="perk-content">
                  <h3 className="perk-title">{perk.title}</h3>
                  <p className="perk-description">{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cta-section">
            <h3>{t("partners-page.interested-title") || "Interested in partnering?"}</h3>
            <a href="mailto:formulastudent@ae.fct.unl.pt" className="cta-button">
              {t("partners-page.contact-button") || "Contact Us"}
            </a>
          </div>
        </div>

        {/* Column 2: Car and Garage Images (6 photos) */}
        <div className="partners-column images-column">
          <div className="images-grid">
            {carImages.map((image, index) => (
              <div key={index} className="image-item">
                <img 
                  src={image} 
                  alt={`Car or garage with sponsor logos ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners List Section */}
      <div className="partners-list-section">
        <h2 className="partners-main-title">{t("partners-page.our-partners") || "Our Partners"}</h2>
        
        {Object.entries(PartnersData.allPartners).map(([tier, partners]) => (
          <div key={tier} className="tier-section">
            <h3 className="tier-title">{tierTitles[tier]}</h3>
            <div className={`partners-tier-grid ${tier}`}>
              {partners.map((partner, index) => (
                <a 
                  key={index} 
                  href={partner.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="partner-logo-card"
                >
                  <img 
                    src={partner.imageUrl} 
                    alt={partner.title}
                    title={partner.title}
                  />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;