import React, { useRef, useState } from 'react';
import "./style.css";
import { useTranslation } from "react-i18next";
import CarModelViewer from '../../components/CarModelViewer';
import SponsorsCard from '../../assets/images/FSFenix_Sponsors.png'


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

          {/* <div className='sponsors-card'>
            <img src={SponsorsCard} alt={"Sponsor-Photo"} className="sponsors-card-photo" />
          </div> */}
    </div>
  );
};

export default FSFenixPage;
