import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FSDragon from '../../assets/images/fsdragon.png'
import GaragePhoto2 from '../../assets/images/3_car_garage_2.jpg';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";


import './style.css';

const GaragePage = () => {
  const sliderRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const { t } = useTranslation();



  const PrevArrow = () => {
    return (
      <div
        className='custom-arrow prev-arrow'
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


  return (
    <div className='garage-page'>

        <div className='page-header-container'>
          <div className='page-title'>Garage</div>
          <div className='page-subtitle'>Discover our cars</div>
        </div>
    

      <div className='car-name'>{getTitleForSlide(currentSlide)}</div>

      <Slider ref={sliderRef} {...settings} className='cars-image-slider'>
        <div className='car-image'>
          <img src={FSDragon} alt='fsdragon' />
        </div>
        <div className='car-image'>
          <img src={FSDragon} alt='fsfenix' />
        </div>
      </Slider>

    <div className='button-container'>
      <Link to = {getCarPagePath()} className='car-button'>
          LEARN MORE
      </Link>
    </div>

    </div>
  );
};

export default GaragePage;
