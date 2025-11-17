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

//photos
const photos = [
  "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2FFotos%20FSPT%2FDSC07602.JPG?alt=media&token=414e080b-fd0a-497e-af2b-999b50c233b5",
  "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2FFotos%20FSPT%2FDSC07686.JPG?alt=media&token=0f431637-cc20-430c-a6af-43ac2c7b1c35",
  "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2FFotos%20FSPT%2FDSC07746.JPG?alt=media&token=f9ee4f94-f0af-446d-b929-bc6fee483322",
  "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2FFotos%20FSPT%2FDSC07762.JPG?alt=media&token=5132bc8e-84bd-40e3-ad61-90084ee374f8",
  "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2FFotos%20FSPT%2FDay1-33.jpg?alt=media&token=7807af54-3d81-44b4-9189-fd6b107a82f9",
  "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2FFotos%20FSPT%2FDay1-42.jpg?alt=media&token=711852f4-b883-48b3-bf3c-b1c5d3606021",
  "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2FFotos%20FSPT%2FDay1-65.jpg?alt=media&token=340a1b04-c1da-43de-8316-005c7c3d77ab",
  "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2FFotos%20FSPT%2FDay1-81.jpg?alt=media&token=fc8912ec-2106-4142-8995-65d3f217189d",
  "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2FFotos%20FSPT%2FDay1-86.jpg?alt=media&token=7305932f-2507-4f1d-b2a7-12649275d656",
  "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2FFotos%20FSPT%2FIMG-20240924-WA0035.jpg?alt=media&token=4f4df9ab-aacd-4385-80e9-9abbb7fd2cda",
  "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2FFotos%20FSPT%2FIMG-20240924-WA0036.jpg?alt=media&token=9a945329-d091-41f7-a68f-4259d36cd395",
  "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2FFotos%20FSPT%2FIMG-20240924-WA0038.jpg?alt=media&token=f9320ed2-814c-418c-9bf7-234ca7d6aaaa",
];

const colorGradient = {
  backgroundImage: "linear-gradient(to right, #286196, #70a0ff)",
};

const FenixEvoPage = () => {
  const { t } = useTranslation();
  const ref = useRef();
  const [openAccordion, setOpenAccordion] = useState(null);

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
  const powertrainKeys = ["engine", "power", "max-rpm", "gear-box"];
  const steeringSuspensionKeys = ["type", "tyres", "breaking"];
  const chassisKeys = ["structure", "weight-dist"];
  const aeroKeys = ["bodywork"];

  const toggleAccordion = (category) => {
    setOpenAccordion(openAccordion === category ? null : category);
  };

  const goldSponsors = PartnersData.gold || [];

  return (
    <div className="fenixevo">
      <PageHeader
        title={t("fsfenixevo-page.page-title")}
        subtitle={t("fsfenixevo-page.page-subtitle")}
        gradientColor="#1966ff"
        height={"2.5%"}
      />
      
      {/* GOLD SPONSORS SECTION */}
      <div className="gold-sponsors-section">
        <h2 className="gold-sponsors-title">
          {t("fsfenixevo-page.with-help-from") || "Com o apoio de"}
        </h2>
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
        src="https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2Fcarro_fspt.jpg?alt=media&token=c254dd19-2cd4-400c-9694-0b700ddab32d"
        alt="Fenix Evo"
      />
      <div className="fenixevo-background-image-container">
        <div className="fenixevo-background-image-gradient-overlay" />
      </div>

      <div className="fenixevo-model_and_specs-container">
        <div className="fenixevo-section-title">
          {t("fsfenixevo-page.specs-title")}
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
                  car="fenixevo"
                />
                <SpecsSection
                  title="powertrain"
                  dataKeys={powertrainKeys}
                  t={t}
                  car="fenixevo"
                />
                <SpecsSection
                  title="steering&suspension"
                  dataKeys={steeringSuspensionKeys}
                  t={t}
                  car="fenixevo"
                />
                <SpecsSection
                  title="chassis"
                  dataKeys={chassisKeys}
                  t={t}
                  car="fenixevo"
                />
                <SpecsSection
                  title="aero"
                  dataKeys={aeroKeys}
                  t={t}
                  car="fenixevo"
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
            <li>Design: P2</li>
            <li>Cost: P2</li>
          </ul>
          <h5>Dynamic Events</h5>
          <ul>
            <li>Aceleration: DNS</li>
            <li>Skidpad: DNS</li>
            <li>Autocross: DNS</li>
            <li>Endurance: DNF (10 laps completed)</li>
          </ul>
          <h5>Other:</h5>
          <ul>
            <li>Business Plan: 1st Place</li>
            <li>Special Awards: Best social media presence</li>
          </ul>
        </div>

        <div className="competition-results-column">
          <h3>FSA Results</h3>
          <h5>Static Events</h5>
          <ul>
            <li>Design: P18</li>
            <li>Cost: P17</li>
          </ul>
          <h5>Dynamic Events</h5>
          <ul>
            <li>Did not complete scrutineering</li>
          </ul>
          <h5>Other:</h5>
          <ul>
            <li>Business Plan: Did not compete</li>
          </ul>
        </div>
      </div>

      {/* GALLERY */}
      <div className="fenixevo-gallery-container">
        <div className="fenixevo-section-title">
          {t(`fsdragon-page.gallery`)}
        </div>
      </div>

      <Gallery images={photos} />

      {/* SPONSORS ACCORDION */}
      <div className="sponsors-accordion-section">
        <div className="fenixevo-section-title">
          {t("fsfenixevo-page.sponsors-title") || "Patrocinadores"}
        </div>

        <div className="accordion-container">
          {Object.keys(PartnersData).map((category) => {
            const isOpen = openAccordion === category;
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
                    {PartnersData[category].map((sponsor) => (
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
          {t(`fsfenix-page.team-title`)}
        </div>

        <div className="team-number-container">
          <div className="team-number-row">
            <div className="numbers members">
              <div className="numbers-digits members">60</div>
              <div className="numbers-title members">
                {t(`fsfenix-page.team-container.members`)}
              </div>
            </div>

            <div className="numbers degrees">
              <div className="numbers-digits degrees">18</div>
              <div className="numbers-title medegreesmbers">
                {t(`fsfenix-page.team-container.degrees`)}
              </div>
            </div>

            <div className="numbers universities">
              <div className="numbers-digits universities">4</div>
              <div className="numbers-title universities">
                {t(`fsfenix-page.team-container.universities`)}
              </div>
            </div>
          </div>
        </div>

        <div ref={teamRef}>
          <motion.div className="fenix-team-animation" animate={teamController}>
            {TeamListData.map((department, index) => (
              <div key={index} className="fenix-department-container">
                <h2 style={colorGradient} className="fenix-department-title">
                  {t(`fsfenixevo-page.teams-names.${department.title}`)}
                </h2>
                <div className="fenix-team-members">
                  {department.members.map((member, memberIndex) => (
                    <MemberCard key={memberIndex} {...member} />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FenixEvoPage;