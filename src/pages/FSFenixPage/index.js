import React, { useRef, useState } from 'react';
import "./style.css";
import { useTranslation } from "react-i18next";
import CarModelViewer from '../../components/CarModelViewer';


//logos
import AltairLogo from '../../assets/images/sponsors_logos/altair.png'
import AlthimaLogo from '../../assets/images/sponsors_logos/althima.png'
import BlocksLogo from '../../assets/images/sponsors_logos/blocks.png'
import CicloLogo from '../../assets/images/sponsors_logos/cf.png';
import CoficabLogo from '../../assets/images/sponsors_logos/coficab.jpg'
import DFCTurboLogo from '../../assets/images/sponsors_logos/dfc_turbo.png'
import ESSSLogo from '../../assets/images/sponsors_logos/esss.png'
import FCTLogo from '../../assets/images/sponsors_logos/fct.jpg'
import GalpLogo from '../../assets/images/sponsors_logos/galp.png'
import KFrioLogo from '../../assets/images/sponsors_logos/kfrio.png'
import LeanAcademyLogo from '../../assets/images/sponsors_logos/lean_acadamy.png';
import LogoplasteLogo from '../../assets/images/sponsors_logos/logoplaste.jpg'
import NiterraLogo from '../../assets/images/sponsors_logos/niterra.png'
import NorelemLogo from '../../assets/images/sponsors_logos/norelem.png'
import NovaLogo from '../../assets/images/sponsors_logos/NOVA.png'
import VisteonLogo from '../../assets/images/sponsors_logos/visteon.png'
import VWLogo from '../../assets/images/sponsors_logos/volkswagen.png'
import WOBLogo from '../../assets/images/sponsors_logos/wob_palmela.jpg'
import SectionTitle from '../../components/SectionTitle';

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

      <div className='fsfenix-numbers-container'>

        <SectionTitle text={"FS FENIX IN NUMBERS"} fontSize={"30px"} altName={"FSFenix-in-numbers"}/>
  
        <div className='numbers-container'>
            <div className='common-container members-container'>
            <div className='text'>MEMBERS</div>
            <div className='number'>55</div>
          </div>

          <div className='common-container faculties-container'>
            <div className='text'>FACULTIES</div>
            <div className='number'>3</div>
          </div>

          <div className='common-container partners-container'>
            <div className='text'>PARTNERS</div>
            <div className='number'>24</div>
          </div>
        </div>
      </div>



      <div className='model_and_specs-container'>

          <SectionTitle text={"TECHNICAL SPECIFICATIONS"} fontSize={"30px"} altName={"technical-specifications"}/>
          
          <div className='specs-and-model'>
            <div className='specs'>
                  <ul>
                    <li>Engine Type - V6</li>
                    <li>Horsepower - 300 HP</li>
                    <li>Transmission - Automatic</li>
                    <li>Fuel Efficiency - 25 MPG</li>
                    <li>Color Options - Red, Blue, Silver</li>
                    <li>Safety Features - ABS, Airbags</li>
                    <li>Warranty - 3 years</li>
                  </ul>
            </div>
            <div className="fsfenix-3d-model">        
                  <CarModelViewer/>         
              </div>
          </div>          
      </div>
    </div>
  );
};

export default FSFenixPage;
