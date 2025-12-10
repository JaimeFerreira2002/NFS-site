// PartnerPage.js
import React, { useEffect, useState } from 'react';
import PartnersData from "../../pages/PartnersPage/PartnersList.js";
import { useTranslation } from "react-i18next";
import "./style.css";
import PageHeader from "../../components/PageHeader/index.js";
import SplashScreen from '../../components/SplashScreen/index.js'; 
import loadImages from '../../HelperFunctions.js'

const Partners = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imagesURLs = [];

    for (const tier in PartnersData.fenixevo) {
      PartnersData.fenixevo[tier].forEach(partner => {
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
      title: t("partners-page.perk-reports-title") || "Regular Updates",
      description: t("partners-page.perk-reports-desc") || "Receive progress reports, technical insights, and exclusive behind-the-scenes content"
    },
    {
      title: t("partners-page.perk-education-title") || "Educational Impact",
      description: t("partners-page.perk-education-desc") || "Support the next generation of engineers while enhancing your corporate social responsibility"
    }
  ];

  // Placeholder images - replace with actual car/garage images
  const carImages = [
    "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2Fgaleria%2Ffenix3.jpg?alt=media&token=877adc35-2178-4c26-a755-f27c0ec874cd", 
    "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2FFotos%20FSPT%2FDSC07602.JPG?alt=media&token=414e080b-fd0a-497e-af2b-999b50c233b5",
    "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2FFotos%20FSPT%2FDSC07686.JPG?alt=media&token=0f431637-cc20-430c-a6af-43ac2c7b1c35",
    "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2FFotos%20FSPT%2FDSC07746.JPG?alt=media&token=f9ee4f94-f0af-446d-b929-bc6fee483322",
    "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2FFotos%20FSPT%2FDSC07762.JPG?alt=media&token=5132bc8e-84bd-40e3-ad61-90084ee374f8",
    "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2FFotos%20FSPT%2FDay1-42.jpg?alt=media&token=711852f4-b883-48b3-bf3c-b1c5d3606021",
    "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2FFotos%20FSPT%2FDay1-65.jpg?alt=media&token=340a1b04-c1da-43de-8316-005c7c3d77ab",
    "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2FFotos%20FSPT%2FDay1-81.jpg?alt=media&token=fc8912ec-2106-4142-8995-65d3f217189d",
    "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2Fgaleria%2Ffenix1.jpg?alt=media&token=286ed59a-f5a6-43c0-858d-d7dbcbf2189a",
    "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2Fgaleria%2Ffenix2.jpg?alt=media&token=31e035f2-69bf-48fc-b490-1748ecc159b2",
    "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2Fgaleria%2Ffenix4.jpg?alt=media&token=b585f6d2-8124-4cdf-9081-27411725a28a", 
    "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2Fgaleria%2Ffenix5.jpg?alt=media&token=cd785639-bf4b-4d38-8d2d-29bd78e32ee6", 
    "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2Fgaleria%2Ffenix6.jpg?alt=media&token=87d9a2a3-005c-4128-a034-879bab96e453", 
    "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2Fgaleria%2Ffenix7.jpg?alt=media&token=8cfb8101-ceef-43f6-94d3-540114658f3c",
 
  ];

  return (
    <div className="partners-page">
      <SplashScreen isVisible={isLoading}/>
      <PageHeader
        title={t("partners-page.page-title")}
        subtitle={t("partners-page.page-subtitle")}
        gradientColor={"#19a3ff"}
      />
      
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
            <p>{t("partners-page.interested-desc") || "Get in touch with us to discuss partnership opportunities"}</p>
            <a href="mailto:joao.lourenco1000@gmail.com" className="cta-button">
              {t("partners-page.contact-button") || "Contact Us"}
            </a>
          </div>
        </div>

        {/* Column 2 & 3: Car and Garage Images */}
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
    </div>
  );
};

export default Partners;