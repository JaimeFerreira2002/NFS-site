import React, { useRef, useState } from "react";
import "./style.css";
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

const photos = [
  "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2Fgaleria%2Ffenix3.jpg?alt=media&token=877adc35-2178-4c26-a755-f27c0ec874cd",
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
  "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2Fgaleria%2Ffenix1.jpg?alt=media&token=286ed59a-f5a6-43c0-858d-d7dbcbf2189a",
  "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2Fgaleria%2Ffenix2.jpg?alt=media&token=31e035f2-69bf-48fc-b490-1748ecc159b2",
  "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2Fgaleria%2Ffenix4.jpg?alt=media&token=b585f6d2-8124-4cdf-9081-27411725a28a",
  "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2Fgaleria%2Ffenix5.jpg?alt=media&token=cd785639-bf4b-4d38-8d2d-29bd78e32ee6",
  "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2Fgaleria%2Ffenix6.jpg?alt=media&token=87d9a2a3-005c-4128-a034-879bab96e453",
  "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2Fgaleria%2Ffenix7.jpg?alt=media&token=8cfb8101-ceef-43f6-94d3-540114658f3c",
];

const FenixEvoPage = () => {
  const { t } = useTranslation();
  const ref = useRef();
  const [openTeamAccordion, setOpenTeamAccordion] = useState(null);
  const [activeSeason, setActiveSeason] = useState('2526');

  const specsAndModelController = useAnimation();
  const [specsAndModelRef, specsAndModelInView] = useInView({ threshold: 0.1 });

  const teamController = useAnimation();
  const [teamRef, teamInView] = useInView({ threshold: 0.03 });

  React.useEffect(() => {
    if (specsAndModelInView) {
      specsAndModelController.start({ opacity: 1, x: 0, transition: { duration: 0.5 } });
    } else {
      specsAndModelController.start({ opacity: 0, x: -100, transition: { duration: 0.5 } });
    }
  }, [specsAndModelController, specsAndModelInView]);

  React.useEffect(() => {
    if (teamInView) {
      teamController.start({ opacity: 1, x: 0 });
    } else {
      teamController.start({ opacity: 0 });
    }
  }, [teamController, teamInView]);

  const generalKeys = ["weight", "wheel-base", "width", "height", "height-cg", "length", "top-speed"];
  const powertrainKeys = ["engine", "power", "max-rpm", "gear-box"];
  const steeringSuspensionKeys = ["type", "tyres", "breaking"];
  const chassisKeys = ["structure", "weight-dist"];
  const aeroKeys = ["bodywork"];

  const toggleTeamAccordion = (index) => {
    setOpenTeamAccordion(openTeamAccordion === index ? null : index);
  };

  const fenixevoPartners = PartnersData.fenixevo || {};
  const goldSponsors = fenixevoPartners.gold || [];

  const fenixevoTeam2425 = TeamListData.fsfenixevo_2425 || [];
  const fenixevoTeam2526 = TeamListData.fsfenixevo_2526 || [];
  const activeTeam = activeSeason === '2425' ? fenixevoTeam2425 : fenixevoTeam2526;

  const tierTitles = {
    institutional: t("fsfenixevo-page.sponsors.institutional") || "Institutional Partners",
    gold: t("fsfenixevo-page.sponsors.gold") || "Gold Partners",
    silver: t("fsfenixevo-page.sponsors.silver") || "Silver Partners",
    bronze: t("fsfenixevo-page.sponsors.bronze") || "Bronze Partners",
    software: t("fsfenixevo-page.sponsors.software") || "Software Partners"
  };

  return (
    <div className="fenixevo">
      <PageHeader
        title={t("fsfenixevo-page.page-title")}
        subtitle={t("fsfenixevo-page.page-subtitle")}
        gradientColor="#1966ff"
        height={"2.5%"}
      />

      <h2 className="gold-sponsors-title">
        {t("fsfenixevo-page.with-help-from") || "Com o apoio de"}
      </h2>

      <div className="gold-sponsors-section">
        <div className="gold-sponsors-grid">
          {goldSponsors.map((sponsor) => (
            <a key={sponsor.title} href={sponsor.link} target="_blank" rel="noopener noreferrer" className="gold-sponsor-card">
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
        <div className="fenixevo-section-title">{t("fsfenixevo-page.specs-title")}</div>
        <div className="fenixevo-specs-and-model">
          <div ref={specsAndModelRef}>
            <motion.div className="fenixevo-specs&model-animation" animate={specsAndModelController} initial={{ opacity: 0, x: 100 }}>
              <div className="fenixevo-specs">
                <SpecsSection title="general" dataKeys={generalKeys} t={t} car="fenixevo" />
                <SpecsSection title="powertrain" dataKeys={powertrainKeys} t={t} car="fenixevo" />
                <SpecsSection title="steering&suspension" dataKeys={steeringSuspensionKeys} t={t} car="fenixevo" />
                <SpecsSection title="chassis" dataKeys={chassisKeys} t={t} car="fenixevo" />
                <SpecsSection title="aero" dataKeys={aeroKeys} t={t} car="fenixevo" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="competitions-section-container">
        <div className="fenixevo-section-title">{t("fsfenixevo-page.competitions.title")}</div>
        <div className="competitions-subtitle">{t("fsfenixevo-page.competitions.subtitle")}</div>
        <div className="competitions-images-row-container">
          <ImageGallery />
        </div>
      </div>

      <div className="competition-results-container">
        <div className="competition-results-column">
          <h3>FSA Results</h3>
          <h5>Static Events</h5>
          <ul>
            <li>Engeneering Design: 18<sup>th</sup> Place</li>
            <li>Cost & Manufacturing: 17<sup>th</sup> Place</li>
            <li>Business Plan Presentation: Did not compete</li>
          </ul>
          <h5>Dynamic Events</h5>
          <ul>
            <li>Did not complete scrutineering</li>
          </ul>
        </div>
        <div className="competition-results-column">
          <h3>FSPT Results</h3>
          <h5>Static Events</h5>
          <ul>
            <li>Engeneering Design: 2<sup>nd</sup> Place</li>
            <li>Cost & Manufacturing: 2<sup>nd</sup> Place</li>
            <li>Business Plan Presentation: 1<sup>st</sup> Place</li>
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
            <li>Special Awards: Best social media presence</li>
          </ul>
        </div>
        <div className="competition-results-column">
          <h3>FSS Results</h3>
          <h5>Static Events</h5>
          <ul>
            <li>Engeneering Design: 5<sup>th</sup> Place</li>
            <li>Cost & Manufacturing: 5<sup>th</sup> Place</li>
            <li>Business Plan Presentation: 2<sup>nd</sup> Place</li>
          </ul>
          <h5>Dynamic Events</h5>
          <ul>
            <li>Aceleration: 6<sup>th</sup> Place</li>
            <li>Skidpad: DNS</li>
            <li>Autocross: 8<sup>th</sup> Place</li>
            <li>Endurance: DNF</li>
          </ul>
        </div>
      </div>

      <div className="fenixevo-gallery-container">
        <div className="fenixevo-section-title">{t(`fsdragon-page.gallery`)}</div>
      </div>

      <Gallery images={photos} />

      <div className="partners-list-section">
        <div className="partners-main-title">
          {t("fsfenixevo-page.sponsors-title") || "Patrocinadores"}
        </div>
        {Object.keys(fenixevoPartners).map((category) => {
          const categorySponsors = fenixevoPartners[category];
          if (!categorySponsors || categorySponsors.length === 0) return null;
          return (
            <div key={category} className="tier-section">
              <h3 className="tier-title">{tierTitles[category]}</h3>
              <div className={`partners-tier-grid ${category}`}>
                {categorySponsors.map((sponsor) => (
                  <a key={sponsor.title} href={sponsor.link} target="_blank" rel="noopener noreferrer" className="partner-logo-card">
                    <img src={sponsor.imageUrl} alt={sponsor.title} />
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* TEAM SECTION */}
      <div className="fenixevo-team-container">
        <div className="fenixevo-section-title">
          {t(`fsfenix-page.team-title`)}
        </div>

        {/* SEASON TOGGLE */}
        <div className="novaev01-season-toggle-container">
          <button
            className={`novaev01-season-toggle-btn ${activeSeason === '2425' ? 'active' : ''}`}
            onClick={() => setActiveSeason('2425')}
          >
            <span className="novaev01-season-toggle-label">Season</span>
            <span className="novaev01-season-toggle-year">24/25</span>
          </button>
          <button
            className={`novaev01-season-toggle-btn ${activeSeason === '2526' ? 'active' : ''}`}
            onClick={() => setActiveSeason('2526')}
          >
            <span className="novaev01-season-toggle-label">Season</span>
            <span className="novaev01-season-toggle-year">25/26</span>
          </button>
        </div>

        <div className="team-number-container">
          <div className="team-number-row">
            <div className="numbers members">
              <div className="numbers-digits members">63</div>
              <div className="numbers-title members">{t(`fsfenix-page.team-container.members`)}</div>
            </div>
            <div className="numbers degrees">
              <div className="numbers-digits degrees">18</div>
              <div className="numbers-title medegreesmbers">{t(`fsfenix-page.team-container.degrees`)}</div>
            </div>
            <div className="numbers universities">
              <div className="numbers-digits universities">4</div>
              <div className="numbers-title universities">{t(`fsfenix-page.team-container.universities`)}</div>
            </div>
          </div>
        </div>

        {/* TEAM ACCORDION */}
        <div className="team-accordion-container">
          {activeTeam.map((department, index) => {
            const isOpen = openTeamAccordion === index;
            return (
              <div key={index} className="team-accordion-item">
                <button
                  className={`team-accordion-header ${isOpen ? 'active' : ''}`}
                  onClick={() => toggleTeamAccordion(index)}
                >
                  <span className="team-department-title">
                    {t(`fsfenixevo-page.teams-names.${department.title}`)}
                  </span>
                  <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
                </button>
                <div
                  className={`team-accordion-content ${isOpen ? 'open' : ''}`}
                  style={{ maxHeight: isOpen ? '5000px' : '0', padding: isOpen ? '30px' : '0' }}
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

export default FenixEvoPage;