import React, { useRef, useState } from 'react';
import "./style.css";
import { useTranslation } from "react-i18next";
import CarModelViewer from '../../components/CarModelViewer';
import SpecsSection from './components/SpecsSection'; 
import Gallery from './components/Gallery'; 
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TeamListData from './team_members_list'; 




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

import image1 from '../../assets/images/fsdragon_photos/image_1.jpg';
import image2 from '../../assets/images/fsdragon_photos/image_2.jpg';
import image3 from '../../assets/images/fsdragon_photos/image_3.jpg';
import image4 from '../../assets/images/fsdragon_photos/image_4.jpg';
import image5 from '../../assets/images/fsdragon_photos/image_5.jpg';
import image6 from '../../assets/images/fsdragon_photos/image_6.jpg';
import image7 from '../../assets/images/fsdragon_photos/image_7.jpg';
import MemberCard from './components/MemberCard';

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


const FSFenixPage = () => {

  const { t } = useTranslation();
  const ref = useRef();

  ///////////////animations///////////////////////////

    //controllers
    const specsAndModelController = useAnimation();
    const [specsAndModelRef, specsAndModelInView] = useInView({ threshold: 0.1 });

    //effects
    React.useEffect(() => {
      if (specsAndModelInView) {
        specsAndModelController.start({ opacity: 1, x: 0, transition: { duration: 0.5 } });
      } else {
        specsAndModelController.start({ opacity: 0, x: -100, transition: { duration: 0.5 } });
      }
    }, [specsAndModelController, specsAndModelInView]);

  

  //used for the specs section translations
  const generalKeys = ['weight', 'wheel-base', 'width', 'height-cg', '0-100', 'top-speed'];
  const powertrainKeys = ['engine', 'power', 'max-rpm', 'volume', 'ecu', 'quick-shifter'];
  const steeringSuspensionKeys = ['type', 'tyres', 'breaking', 'suspension'];
  const chassisKeys = ['structure', 'weight', 'impact-structure'];
  const aeroKeys = ['cd.a', 'cl.d'];

  return (
    <div className='fsfsenix-page'>

      <div className='grey-block-header'>
          <div className='page-header'>
            <div className='page-title'>{t('fsfenix-page.page-title')}</div>
            <div className='page-subtitle'>{t('fsfenix-page.page-subtitle')}</div>
          </div>
      </div>

      <div className='background-image-container'>
        <div className='background-image-gradient-overlay'/> 
      </div>     

      <div className='model_and_specs-container'>
          <div className='section-title'>
                Technical Specifications
          </div>

          <div className='specs-and-model'>
          <div ref={specsAndModelRef}> 
            <motion.div className='specs&model-animation' animate={specsAndModelController} initial={{ opacity: 0, x: 100 }}>
              <div className='specs'>
                <SpecsSection title="general" dataKeys={generalKeys} t={t} />
                <SpecsSection title="powertrain" dataKeys={powertrainKeys} t={t} />
                <SpecsSection title="steering&suspension" dataKeys={steeringSuspensionKeys} t={t} />
                <SpecsSection title="chassis" dataKeys={chassisKeys} t={t} />
                <SpecsSection title="aero" dataKeys={aeroKeys} t={t} />
              </div>
              
              <div className="fsfenix-3d-model">        
                    <CarModelViewer/>         
              </div>
            </motion.div>
          </div>
          </div>          
      </div>


      <div className='gallery-container'>
          <div className='section-title'>
            Gallery
          </div>
          <Gallery images={imageArray} />
      </div>

      <div className='team-container'>
        <div className='section-title'>
          Team
        </div>

        {TeamListData.map((department, index) => (
          <div key={index}>
            <h2 className="department-title">{department.title}</h2>
            <div className="team-members">
              {department.members.map((member, memberIndex) => (
                <MemberCard key={memberIndex} {...member} />
              ))}
            </div>
          </div>
        ))}
      </div>



    </div>
  );
};

export default FSFenixPage;
