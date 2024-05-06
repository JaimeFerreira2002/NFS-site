import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FSDragon from '../../assets/images/fsdragon.png'
import FSFenix from '../../assets/images/fsfenix.png'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import './style.css';
import PageHeader from '../../components/PageHeader';


const GaragePage = () => {
  const sliderRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const { t } = useTranslation();



  const PrevArrow = () => {
    return (
      <div
        className='custom-arrow prev-arrow'
        style={{ color: 'black' }}
        onClick={() => {
          if (sliderRef.current) {
            sliderRef.current.slickPrev();
          }
        }}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    );
  };

  const NextArrow = () => {
    return (
      <div
        className='custom-arrow next-arrow'
        style={{ color: 'black' }}
        onClick={() => {
          if (sliderRef.current) {
            sliderRef.current.slickNext();
          }
        }}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    );
  };


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    draggable: true,
    afterChange: (index) => setCurrentSlide(index),
  };


  const getTitleForSlide = (slideIndex) => {
    // Add logic to determine title based on slide index
    switch (slideIndex) {
      case 0:
        return 'FS DRAGON';
      case 1:
        return 'FS FENIX';
    }
  };


  const getCarPagePath = () => {
    switch (currentSlide) {
      case 0:
        return "fsdragon";
        
      case 1:
        return "fsfenix";        
   
    }
  };


  return (
    <div className='garage-page'>

      <PageHeader title={t("garage-page.page-title")} subtitle={t("garage-page.page-subtitle")} gradientColor = {'#19a3ff'} height={'20%'}/>

      <div className='car-name'>{getTitleForSlide(currentSlide)}</div>

      <div className='button-container'>
            <Link to={getCarPagePath()}  className='car-button'>
              {t("garage-page.button-text")}
           </Link>
      </div>

      <Slider ref={sliderRef} {...settings} className='cars-image-slider'>
        <div className={`car-image`}>
          <img src='https://firebasestorage.googleapis.com/v0/b/site-nfs.appspot.com/o/Renders%2Ffsdragon.png?alt=media&token=f47d23c6-6b44-456c-87e6-8435ae0456bb' alt='fsdragon' />       
        </div>
        <div className={`car-image`}>
          <img src='https://firebasestorage.googleapis.com/v0/b/site-nfs.appspot.com/o/Renders%2Ffsfenix.png?alt=media&token=e498e34d-6c62-4b5b-a45a-3e9814c2e551' alt='fsfenix' />   
        </div>
      </Slider>
      
    </div>
  );
};

export default GaragePage;
