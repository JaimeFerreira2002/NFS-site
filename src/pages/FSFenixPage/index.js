import React, { useRef, useState } from 'react';
import "./style.css";
import { useTranslation } from "react-i18next";
import CarModelViewer from '../../components/CarModelViewer';


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
        <div className='page-header'>
          <h2 className='page-title'>{t('fsfenix-page.page-title')}</h2>
          <p className='page-subtitle'>{t('fsfenix-page.page-subtitle')}</p>
        </div>

        <div className='model_and_specs'>
            <div className='specs'>
            <h2 className='specs-title'>Technical Specifications</h2>
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
            <div className='sponsors-container'>
              <div className='sponsors-container-title'>
                With the support from
              </div>
                  <div className="logos-grid">
                    {logosList.map((logo, index) => (
                      <img key={index} src={logo} alt={`Logo ${index}`} className='logo-item' />
                    ))}
                  </div>                         
            </div>
    </div>
  );
};

export default FSFenixPage;
