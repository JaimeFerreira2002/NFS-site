import React, { useRef, useState } from "react";
import "../FSFenixEvoPage/style.css";
import { useTranslation } from "react-i18next";
import CarModelViewer from "../../components/CarModelViewer";
import SpecsSection from "../../components/SpecsSection";
import Gallery from "../../components/Gallery";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TeamListData from "../../components/team_members_list.js";
import PageHeader from "../../components/PageHeader/index.js";
import { Link } from "react-router-dom";

//logos
import AltairLogo from "../../assets/images/sponsors_logos/altair.png";
import AlthimaLogo from "../../assets/images/sponsors_logos/althima.png";
import BlocksLogo from "../../assets/images/sponsors_logos/blocks.png";
import CicloLogo from "../../assets/images/sponsors_logos/ciclo_fabril.jpg";
import CoficabLogo from "../../assets/images/sponsors_logos/coficab.jpg";
import DFCTurboLogo from "../../assets/images/sponsors_logos/dfc_turbo.png";
import ESSSLogo from "../../assets/images/sponsors_logos/esss.png";
import FCTLogo from "../../assets/images/sponsors_logos/fct.jpg";
import GalpLogo from "../../assets/images/sponsors_logos/galp.png";
import KFrioLogo from "../../assets/images/sponsors_logos/kfrio.png";
import LeanAcademyLogo from "../../assets/images/sponsors_logos/lean_academy.jpg";
import LogoplasteLogo from "../../assets/images/sponsors_logos/logoplaste.jpg";
import NiterraLogo from "../../assets/images/sponsors_logos/niterra.png";
import NorelemLogo from "../../assets/images/sponsors_logos/norelem.png";
import NovaLogo from "../../assets/images/sponsors_logos/nova.png";
import VisteonLogo from "../../assets/images/sponsors_logos/visteon.png";
import VWLogo from "../../assets/images/sponsors_logos/volkswagen.png";
import WOBLogo from "../../assets/images/sponsors_logos/wob_palmela.jpg";


import MemberCard from "../../components/MemberCard";
import ImageGallery from "./components/CompetitionsRow/index.js";
//photos
const image0 = "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2F_DSC4175.JPG?alt=media&token=51ac6880-72fa-4aa6-ba31-9d46b5f87189"
const image1 = "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2FFENIX_EVO.JPG?alt=media&token=7ddf6654-efce-4706-8f6b-595723565ea0";
const image2 = "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2Ffenixevo2.JPG?alt=media&token=0091748a-a8d1-4b44-9906-93d7d5b105d6";
const image3 = "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2Ffenixevo3.JPG?alt=media&token=551869b2-e774-4693-9070-1efc3b779f32";
const image4 = "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2Ffenixevo4.JPG?alt=media&token=a570ef03-90df-4bdc-b68b-63b150923ea5";
const image5 = "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2F_DSC4311.JPG?alt=media&token=5fd53d2c-1790-419b-8618-aa187522f8e7";
const imageArray = [image0, image1, image2, image5, image3, image4];

const colorGradient = {
  backgroundImage: "linear-gradient(to right, #286196, #70a0ff)",
};

//logos
const logosList = [
  VWLogo,
  FCTLogo,
  NovaLogo,
  VisteonLogo,
  GalpLogo,
  LeanAcademyLogo,
  BlocksLogo,
  AltairLogo,
  AlthimaLogo,
  CicloLogo,
  CoficabLogo,
  DFCTurboLogo,
  ESSSLogo,
  KFrioLogo,
  LogoplasteLogo,
  NiterraLogo,
  NorelemLogo,
  WOBLogo,
];

const FenixEvoPage = () => {
  const { t } = useTranslation();
  const ref = useRef();

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

  return (
    <div className="fenixevo">
      <PageHeader
        title={t("fsfenixevo-page.page-title")}
        subtitle={t("fsfenixevo-page.page-subtitle")}
        gradientColor="#1966ff"
        height={"2.5%"}
      />
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

              {/* <div className="fenixevo-fenixevo-3d-model">        
                      <CarModelViewer/>         
                </div> */}
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

      {/* GALLERY */}
       <div className='fenixevo-gallery-container'>
          <div className='fenixevo-section-title'>
          {t(`fsdragon-page.gallery`)}
          </div>
          <Gallery images={imageArray} />
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
