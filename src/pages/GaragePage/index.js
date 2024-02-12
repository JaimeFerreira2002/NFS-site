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
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    draggable: false,
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

  //used for buttons effetc
  const [isHovered, setShowButton] = useState(false);
  const handleMouseEnter = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };



  return (
    <div className='garage-page'>

      <PageHeader title={t("garage-page.page-title")} subtitle={t("garage-page.page-subtitle")} gradientColor = {'#19a3ff'} height={'20%'}/>

      <div className='car-name'>{getTitleForSlide(currentSlide)}</div>

      <Slider ref={sliderRef} {...settings} className='cars-image-slider'>
        <div
          className={`car-image ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={FSDragon} alt='fsdragon' />
          {isHovered && (
            <div className='button-container'>
              <Link to={getCarPagePath()} className='car-button'>
                {t("garage-page.button-text")}
              </Link>
            </div>
          )}
        </div>
        <div
          className={`car-image ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={FSFenix} alt='fsfenix' />
          {isHovered && (
            <div className='button-container'>
              <Link to={getCarPagePath()} className='car-button'>
                {t("garage-page.button-text")}
              </Link>
            </div>
          )}
        </div>
    </Slider>


    </div>
  );
};

export default GaragePage;
