import React, { useRef, useState } from 'react';
import "../FSDragonPage/style.css"; 
import { useTranslation } from "react-i18next";
import CarModelViewer from '../../components/CarModelViewer';
import SpecsSection from '../../components/SpecsSection'; 
import Gallery from '../../components/Gallery'; 
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TeamListData from '../../components/dragon_team_list.js'; 
import PageHeader from '../../components/PageHeader/index.js';





//logos
import AltairLogo from '../../assets/images/sponsors_logos/altair.png'
import AlthimaLogo from '../../assets/images/sponsors_logos/althima.png'
import BlocksLogo from '../../assets/images/sponsors_logos/blocks.png'
import CicloLogo from '../../assets/images/sponsors_logos/ciclo_fabril.jpg'
import CoficabLogo from '../../assets/images/sponsors_logos/coficab.jpg'
import DFCTurboLogo from '../../assets/images/sponsors_logos/dfc_turbo.png'
import ESSSLogo from '../../assets/images/sponsors_logos/esss.png'
import FCTLogo from '../../assets/images/sponsors_logos/fct.jpg'
import GalpLogo from '../../assets/images/sponsors_logos/galp.png'
import KFrioLogo from '../../assets/images/sponsors_logos/kfrio.png'
import LeanAcademyLogo from '../../assets/images/sponsors_logos/lean_academy.jpg'
import LogoplasteLogo from '../../assets/images/sponsors_logos/logoplaste.jpg'
import NiterraLogo from '../../assets/images/sponsors_logos/niterra.png'
import NorelemLogo from '../../assets/images/sponsors_logos/norelem.png'
import NovaLogo from '../../assets/images/sponsors_logos/nova.png'
import VisteonLogo from '../../assets/images/sponsors_logos/visteon.png'
import VWLogo from '../../assets/images/sponsors_logos/volkswagen.png'
import WOBLogo from '../../assets/images/sponsors_logos/wob_palmela.jpg'

//photos


import MemberCard from '../../components/MemberCard';


const image1 = 'https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FDragon%2Fimage_1.jpg?alt=media&token=65326678-4677-41bc-9c28-1692c8efd323';
const image2 = 'https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FDragon%2Fimage_2.jpg?alt=media&token=a2306c1f-b1ed-4916-9d05-c5a6e6258d02';
const image3 = 'https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FDragon%2Fimage_3.jpg?alt=media&token=162a9a4e-0f88-438e-840e-5332c069b511';
const image4 = 'https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FDragon%2Fimage_4.jpg?alt=media&token=8b969bc2-995f-4919-af96-bb773aa4d8f8';
const image5 = 'https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FDragon%2Fimage_5.jpg?alt=media&token=f2fda04c-84ce-416f-a508-11ef867442fd';
const image6 = 'https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FDragon%2Fimage_6.jpg?alt=media&token=00e9c650-49d4-4124-80fe-964f38a5079d';
const image7 = 'https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FDragon%2Fimage_7.jpg?alt=media&token=a34814ce-d33f-4545-8bc2-0aa0f40cff44';
const imageArray = [image1, image2, image3, image4, image5, image6, image7];



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

  
]


const FSDragonPage = () => {
  const colorGradient = { backgroundImage: 'linear-gradient(to right, #19ff38, #ffffff)', };
  const { t } = useTranslation();
  const ref = useRef();

  ///////////////animations///////////////////////////

    //controllers/////
    const specsAndModelController = useAnimation();
    const [specsAndModelRef, specsAndModelInView] = useInView({ threshold: 0.1 });

    const teamController = useAnimation();
    const [teamRef, teamInView] = useInView({ threshold: 0.03 });

    //effects////////

    //specs and model
    React.useEffect(() => {
      if (specsAndModelInView) {
        specsAndModelController.start({ opacity: 1, x: 0, transition: { duration: 0.5 } });
      } else {
        specsAndModelController.start({ opacity: 0, x: -100, transition: { duration: 0.5 } });
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
  const generalKeys = ['weight', 'wheel-base', 'width', 'height-cg', '0-100', 'top-speed'];
  const powertrainKeys = ['engine', 'power', 'max-rpm', 'volume', 'ecu', 'quick-shifter'];
  const steeringSuspensionKeys = ['type', 'tyres', 'breaking', 'suspension'];
  const chassisKeys = ['structure', 'weight', 'impact-structure'];
  const aeroKeys = ['cd.a', 'cl.d'];

  return (
    <div className='fsdragon-page'>

      <PageHeader title={t('fsdragon-page.page-title')} subtitle={t('fsdragon-page.page-subtitle')} gradientColor = "#19ff38" height={'2.5%'}/>

      <div className='dragon-background-image-container'>
         <div className='background-image-gradient-overlay'/>
      </div>     

      {/* <div className='dragon-model_and_specs-container'>
          <div className='dragon-section-title'>
                Technical Specifications
          </div>

          <div className='dragon-specs-and-model'>
          <div ref={specsAndModelRef}> 
            <motion.div className='dragon-specs&model-animation' animate={specsAndModelController} initial={{ opacity: 0, x: 100 }}>
              <div className='dragon-specs'>
                <SpecsSection title="general" dataKeys={generalKeys} t={t} car="dragon"/>
                <SpecsSection title="powertrain" dataKeys={powertrainKeys} t={t} car="dragon"/>
                <SpecsSection title="steering&suspension" dataKeys={steeringSuspensionKeys} t={t} car="dragon"/>
                <SpecsSection title="chassis" dataKeys={chassisKeys} t={t} car="dragon"/>
                <SpecsSection title="aero" dataKeys={aeroKeys} t={t} car="dragon"/>
              </div> */}
              
              {/* <div className="fsfenix-3d-model">        
                    <CarModelViewer/>         
              </div> */}
            {/* </motion.div>
          </div>
          </div>          
      </div> */}


      <div className='dragon-gallery-container'>
          <div className='dragon-section-title'>
          {t(`fsdragon-page.gallery`)}
          </div>
          <Gallery images={imageArray} />
      </div>

      <div className='dragon-team-container'>
        <div className='dragon-section-title'>
        {t(`fsdragon-page.team-title`)}
        </div>

        <div ref={teamRef}>
          <motion.div className='dragon-team-animation' animate = {teamController}>
            {TeamListData.map((department, index) => (
              <div key={index} className='dragon-department-container'>
                <h2 style={colorGradient} className="dragon-department-title">{t(`fsdragon-page.teams-names.${department.title}`)}</h2>
                <div className="dragon-team-members">
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

export default FSDragonPage;
