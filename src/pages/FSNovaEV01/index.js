import React, { useRef, useState } from "react";
import "../FSFenixEvoPage/style.css";
import { useTranslation } from "react-i18next";
import SpecsSection from "../../components/SpecsSection";
import Gallery from "../../components/Gallery";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TeamListData from "../../components/team_members_list.js";
import PageHeader from "../../components/PageHeader/index.js";
import PartnersData from "../../pages/PartnersPage/PartnersList.js";
import MemberCard from "../../components/MemberCard";
import ImageGallery from "./components/CompetitionsRow/index.js";


//photos - Add your EV01 photos here
const photos = [
  "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FNovaEV01%2Fev2.jpg?alt=media&token=ac615e1e-7ba4-41c9-a40d-cce739120fbd",
  "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FNovaEV01%2Fev3.jpg?alt=media&token=9a53e98c-8fce-4f1f-bb47-ad938c3f69b5",
  "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FNovaEV01%2Fev4.jpg?alt=media&token=539e2615-a77c-4eb0-8879-0a2d28469420",
  "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FNovaEV01%2Fev5.jpg?alt=media&token=11de9c49-d236-47c4-925b-efe18a1d8947",
  "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FNovaEV01%2Fev6.jpg?alt=media&token=457a7355-f9fa-4e2a-ac02-d0a89b34f4bb",
  "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FNovaEV01%2Fev7.jpg?alt=media&token=14192e7e-c040-4d0b-b15b-9a8d9332e435",
  // Add more EV01 photos
];

const NOVAEV01Page = () => {
  const { t } = useTranslation();
  const ref = useRef();
  const [openAccordion, setOpenAccordion] = useState(null);
  const [openTeamAccordion, setOpenTeamAccordion] = useState(null);

  ///////////////ANIMATIONS///////////////////////////

  //controllers//
  const specsAndModelController = useAnimation();
  const [specsAndModelRef, specsAndModelInView] = useInView({ threshold: 0.1 });

  const teamController = useAnimation();
  const [teamRef, teamInView] = useInView({ threshold: 0.03 });

  //////EFFECTS////////

  //specs and model
  React.useEffect(() => {
    if (specsAndModelInView) {
      specsAndModelController.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
      });
    } else {
      specsAndModelController.start({
        opacity: 0,
        x: -100,
        transition: { duration: 0.5 },
      });
    }
  }, [specsAndModelController, specsAndModelInView]);

  //team
  React.useEffect(() => {
    if (teamInView) {
      teamController.start({ opacity: 1, x: 0 });
    } else {
      teamController.start({ opacity: 0 });
    }
  }, [teamController, teamInView]);

  //used for the specs section translations
  const generalKeys = [
    "weight",
    "wheel-base",
    "width",
    "height",
    "height-cg",
    "length",
    "top-speed",
  ];
  
  const powertrainKeys = ["motor", "power", "battery", "voltage"];
  const steeringSuspensionKeys = ["type", "tyres", "breaking"];
  const chassisKeys = ["structure", "weight-dist"];
  const aeroKeys = ["bodywork"];

  const toggleAccordion = (category) => {
    setOpenAccordion(openAccordion === category ? null : category);
  };

  const toggleTeamAccordion = (index) => {
    setOpenTeamAccordion(openTeamAccordion === index ? null : index);
  };

  // Access EV01-specific sponsors
  const ev01Partners = PartnersData.ev01 || {};
  const goldSponsors = ev01Partners.gold || [];

  return (
    <div className="fenixevo">
      <PageHeader
        title={t("novaev01-page.page-title")}
        subtitle={t("novaev01-page.page-subtitle")}
        gradientColor="#1966ff"
        height={"2.5%"}
      />

      <h2 className="gold-sponsors-title">
          {t("novaev01-page.with-help-from") || "Com o apoio de"}
      </h2>

      {/* GOLD SPONSORS SECTION */}
      <div className="gold-sponsors-section">
        <div className="gold-sponsors-grid">
          {goldSponsors.map((sponsor) => (
            <a
              key={sponsor.title}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-sponsor-card"
            >
              <img src={sponsor.imageUrl} alt={sponsor.title} />
            </a>
          ))}
        </div>
      </div>

      <img
        src="https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FNovaEV01%2Fev1.jpg?alt=media&token=74ae2ddd-46de-4263-8d31-9b7e24d11de1"
        alt="NOVA EV01"
      />
      
      <div className="fenixevo-background-image-container">
        <div className="fenixevo-background-image-gradient-overlay" />
      </div>

      <div className="fenixevo-model_and_specs-container">
        <div className="fenixevo-section-title">
          {t("novaev01-page.specs-title")}
        </div>

        <div className="fenixevo-specs-and-model">
          <div ref={specsAndModelRef}>
            <motion.div
              className="fenixevo-specs&model-animation"
              animate={specsAndModelController}
              initial={{ opacity: 0, x: 100 }}
            >
              <div className="fenixevo-specs">
                <SpecsSection
                  title="general"
                  dataKeys={generalKeys}
                  t={t}
                  car="novaev01"
                />
                <SpecsSection
                  title="powertrain"
                  dataKeys={powertrainKeys}
                  t={t}
                  car="novaev01"
                />
                <SpecsSection
                  title="steering&suspension"
                  dataKeys={steeringSuspensionKeys}
                  t={t}
                  car="novaev01"
                />
                <SpecsSection
                  title="chassis"
                  dataKeys={chassisKeys}
                  t={t}
                  car="novaev01"
                />
                <SpecsSection
                  title="aero"
                  dataKeys={aeroKeys}
                  t={t}
                  car="novaev01"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* COMPETITIONS SECTION */}
      <div className="competitions-section-container">
        <div className="fenixevo-section-title">
          {t("fsfenixevo-page.competitions.title")}
        </div>

        <div className="competitions-subtitle">
          {t("fsfenixevo-page.competitions.subtitle")}
        </div>

        <div className="competitions-images-row-container">
          <ImageGallery />
        </div>
      </div>

      {/* COMPETITIONS RESULTS */}
      <div className="competition-results-container">
        <div className="competition-results-column">
          <h3>FSPT Results</h3>
          <h5>Static Events</h5>
          <ul>
            <li>Design: P1</li>
            <li>Cost: P3</li>
            <li>Business Plan: 1st Place</li>
          </ul>
          <h5>Other:</h5>
          <ul>
            <li>Special Awards: Best social media presence</li>
          </ul>
        </div>
      </div>

      {/* GALLERY */}
      <div className="fenixevo-gallery-container">
        <div className="fenixevo-section-title">
          {t(`novaev01-page.gallery`)}
        </div>
      </div>

      <Gallery images={photos} />

      {/* SPONSORS ACCORDION */}
      <div className="sponsors-accordion-section">
        <div className="fenixevo-section-title">
          {t("novaev01-page.sponsors-title") || "Patrocinadores"}
        </div>

        <div className="accordion-container">
          {Object.keys(ev01Partners).map((category) => {
            const isOpen = openAccordion === category;
            const categorySponsors = ev01Partners[category];
            
            // Skip if no sponsors in this category
            if (!categorySponsors || categorySponsors.length === 0) return null;
            
            return (
              <div key={category} className="accordion-item">
                <button
                  className={`accordion-header ${isOpen ? 'active' : ''}`}
                  onClick={() => toggleAccordion(category)}
                >
                  <span>{t(`partners-page.${category}`).toUpperCase()}</span>
                  <span className="accordion-icon">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div 
                  className={`accordion-content ${isOpen ? 'open' : ''}`}
                  style={{
                    maxHeight: isOpen ? '5000px' : '0',
                    padding: isOpen ? '30px' : '0'
                  }}
                >
                  <div className="sponsors-grid">
                    {categorySponsors.map((sponsor) => (
                      <a
                        key={sponsor.title}
                        href={sponsor.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sponsor-logo-card"
                      >
                        <img src={sponsor.imageUrl} alt={sponsor.title} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* TEAM SECTION */}
      <div className="fenixevo-team-container">
        <div className="fenixevo-section-title">
          {t(`novaev01-page.team-title`)}
        </div>

        <div className="team-number-container">
          <div className="team-number-row">
            <div className="numbers members">
              <div className="numbers-digits members">45</div>
              <div className="numbers-title members">
                {t(`novaev01-page.team-container.members`)}
              </div>
            </div>

            <div className="numbers degrees">
              <div className="numbers-digits degrees">15</div>
              <div className="numbers-title medegreesmbers">
                {t(`novaev01-page.team-container.degrees`)}
              </div>
            </div>

            <div className="numbers universities">
              <div className="numbers-digits universities">3</div>
              <div className="numbers-title universities">
                {t(`novaev01-page.team-container.universities`)}
              </div>
            </div>
          </div>
        </div>

        {/* TEAM ACCORDION */}
        <div className="team-accordion-container">
          {TeamListData.map((department, index) => {
            const isOpen = openTeamAccordion === index;
            return (
              <div key={index} className="team-accordion-item">
                <button
                  className={`team-accordion-header ${isOpen ? 'active' : ''}`}
                  onClick={() => toggleTeamAccordion(index)}
                >
                  <span className="team-department-title">
                    {t(`novaev01-page.teams-names.${department.title}`)}
                  </span>
                  <span className="accordion-icon">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div 
                  className={`team-accordion-content ${isOpen ? 'open' : ''}`}
                  style={{
                    maxHeight: isOpen ? '5000px' : '0',
                    padding: isOpen ? '30px' : '0'
                  }}
                >
                  <div className="fenix-team-members">
                    {department.members.map((member, memberIndex) => (
                      <MemberCard key={memberIndex} {...member} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NOVAEV01Page;