// PartnerPage.js
import React from "react";
import PartnersData from "../../pages/PartnersPage/PartnersList.js"; // Update the path as necessary
import SectionTitle from "../../components/SectionTitle";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./style.css"; // Import your CSS stylesheet
import PageHeader from "../../components/PageHeader/index.js";

// Individual Partner Card Component
// PartnerCard component
// PartnerCard component with dynamic style based on tier
const PartnerCard = ({ title, imageUrl, link, description, tier }) => {
  // Define different sizes for each tier
  const sizes = {
    BIG: { width: "clamp(200px, 35vw, 400px)", height: "auto"  },
    Gold: { width: "clamp(200px, 35vw, 400px)", height: "auto" },
    Silver: { width: "clamp(140px, 25vw, 300px)", height: "auto" },
    Bronze: { width: "clamp(90px, 20vw, 200px)", height: "auto" },
    Partners: { width: "clamp(90px, 20vw, 180px)", height: "auto" },
  };

  // Get the size for the current partner's tier
  const size = sizes[tier] || { width: "100px", height: "100px" }; // Default size if tier is not recognized

  return (
    <div
      className="partner-card"
      style={{ width: size.width, height: size.height }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={imageUrl}
          alt={title}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </a>
    </div>
  );
};

//color for sponsros section titles
const categoryMap = {
  INSTITUTIONAL: "#19a3ff",
  GOLD: "#FDCD87",
  SILVER: "#c0c0c0",
  BRONZE: "#CD7F32",
  PARTNERS: "#FDCD87",
};

// Main Partners Component
const Partners = ({ partners = PartnersData }) => {
  const { t } = useTranslation();

  return (
    <div className="partners-page">
      <PageHeader
        title={t("partners-page.page-title")}
        subtitle={t("partners-page.page-subtitle")}
        gradientColor={"#19a3ff"}
      />
      <div className="partner-list-container">
        {Object.keys(partners).map((category) => {
          const tierBIGPartners = partners[category].filter((partner) => partner.tier === "BIG");
          const otherPartners = partners[category].filter((partner) => partner.tier !== "BIG");

          return (
            <div key={category} className="partner-category">
              <div className="section-title-wrapper">
                <SectionTitle
                  text={`${t(`partners-page.${category}`).toUpperCase()}`}
                  fontSize={"2.6em"}
                  altName={"partners-level"}
                  textColor={"#1d1d1d"}
                  dividersColor={categoryMap[category.toUpperCase()]}
                />
                <div className="partner-tier">
                  <div className="partner-row tier-big">
                    {tierBIGPartners.map((partner) => (
                      <PartnerCard
                        key={partner.title}
                        title={partner.title}
                        imageUrl={partner.imageUrl}
                        link={partner.link}
                        description={partner.description}
                        tier={partner.tier}
                      />
                    ))}
                  </div>
                  <div className="partner-row others">
                    {otherPartners.map((partner) => (
                      <PartnerCard
                        key={partner.title}
                        title={partner.title}
                        imageUrl={partner.imageUrl}
                        link={partner.link}
                        description={partner.description}
                        tier={partner.tier}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
