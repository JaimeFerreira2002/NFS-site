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


const image1 = 'https://firebasestorage.googleapis.com/v0/b/site-nfs.appspot.com/o/image_1.jpg?alt=media&token=4218f056-21c2-417f-a641-e2c906c511b8';
const image2 = 'https://firebasestorage.googleapis.com/v0/b/site-nfs.appspot.com/o/image_2.jpg?alt=media&token=b242db41-8235-47c8-b57c-f5d4ea9f907d';
const image3 = 'https://firebasestorage.googleapis.com/v0/b/site-nfs.appspot.com/o/image_3.jpg?alt=media&token=3d5fc4bc-8ca3-4dc1-9e63-aa7060a85a0a';
const image4 = 'https://firebasestorage.googleapis.com/v0/b/site-nfs.appspot.com/o/image_4.jpg?alt=media&token=ff640648-f3ba-4e7d-b158-7cb7f2f19067';
const image5 = 'https://firebasestorage.googleapis.com/v0/b/site-nfs.appspot.com/o/image_5.jpg?alt=media&token=6b48cd96-ed4a-43e8-bae3-05aeff71a21b';
const image6 = 'https://firebasestorage.googleapis.com/v0/b/site-nfs.appspot.com/o/image_6.jpg?alt=media&token=6436488a-8a6c-4ff2-bd28-0f0da602f599';
const image7 = 'https://firebasestorage.googleapis.com/v0/b/site-nfs.appspot.com/o/image_7.jpg?alt=media&token=34e4920c-6a83-4831-b9b8-2b6f4b8ff486';

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
            Gallery
          </div>
          <Gallery images={imageArray} />
      </div>

      <div className='dragon-team-container'>
        <div className='dragon-section-title'>
          Team
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
