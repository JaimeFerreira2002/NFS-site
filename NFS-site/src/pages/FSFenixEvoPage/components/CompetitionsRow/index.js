import React from 'react';
import './style.css'; 
import { useTranslation } from "react-i18next";
import fspt_photo from '../../../../assets/images/FSPT.jpg'
import fsa_photo from '../../../../assets/images/FSA.jpg'


const ImageGallery = () => {

const { t } = useTranslation();

  return (
    <div className="image-gallery">
      <div className="image-row">
          <ImageCard key={'fspt'} src={fspt_photo} title={t('fsfenix-page.competitions.fspt.title')} date={t('fsfenix-page.competitions.fspt.date')} location={t('fsfenix-page.competitions.fspt.location')} division={t('fsfenix-page.competitions.fspt.class')} url={"https://www.formulastudent.pt/"} />
          <ImageCard key={'fsa'} src={fsa_photo} title={t('fsfenix-page.competitions.fsa.title')} date={t('fsfenix-page.competitions.fsa.date')} location={t('fsfenix-page.competitions.fsa.location')} division={t('fsfenix-page.competitions.fsa.class')} url={"https://fsaustria.at/"} />        
      </div>
    </div>
  );
};

const ImageCard = ({ src, title, date, location, division, url }) => {

    const handleHover = () => {
      // Handle hover state if needed
    };
  
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="fenixevo-image-card">
        <div onMouseEnter={handleHover} onMouseLeave={handleHover}>
          <img src={src} alt="Gallery Image" className="gallery-image" />
          <div className="image-overlay">
            <div className="overlay-text title">{title}</div>
            <div className="overlay-text date">{date}</div>
            <div className="overlay-text location">{location}</div>
            <div className="overlay-text division">{division}</div>
          </div>
        </div>
      </a>
    );
  };

export default ImageGallery;