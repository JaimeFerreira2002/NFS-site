import React, { useRef, useState, useMemo, useCallback, useEffect } from 'react';
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



  const PrevArrow = useCallback(() => {
    return (
      <div
        className='custom-arrow prev-arrow'
        style={{ color: 'white' }}
        onClick={() => {
          if (sliderRef.current) {
            sliderRef.current.slickPrev();
          }
        }}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    );
  }, []);

  const NextArrow = useCallback(() => {
    return (
      <div
        className='custom-arrow next-arrow'
        style={{ color: 'white' }}
        onClick={() => {
          if (sliderRef.current) {
            sliderRef.current.slickNext();
          }
        }}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    );
  }, []);


const settings = useMemo(() => ({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    draggable: true,
    afterChange: (index) => setCurrentSlide(index),
  }), [PrevArrow, NextArrow]);


  const getTitleForSlide = (slideIndex) => {
    // Add logic to determine title based on slide index
    switch (slideIndex) {
      case 0:
        return 'FS FENIX EVO';
      case 1:
        return 'FS FENIX';
      case 2:
        return 'FS DRAGON';
      case 3:
        return 'FS NOVA EV01';
    }
  };


  const getCarPagePath = () => {
    switch (currentSlide) {
      case 0:
        return "fsfenixevo";
      case 1:
        return "fsfenix";
      case 2:
        return "fsdragon";
      case 3:
        return "fsnovaev01";
    }
  };

  useEffect(() => {
    console.log("GaragePage --- MOUNTED");
    return () => {
      console.log("GaragePage --- UNMOUNTED");
    };
  }, []);

return (
    <div className='garage-page'>

      <PageHeader title={t("garage-page.page-title")} subtitle={t("garage-page.page-subtitle")} gradientColor={'#19a3ff'} height={'20%'} />

      <div className='car-name'>{getTitleForSlide(currentSlide)}</div>

      <div className='button-container'>
        <Link to={getCarPagePath()} className='car-button'>
          {t("garage-page.button-text")}
        </Link>
      </div>

      <Slider ref={sliderRef} {...settings} className='cars-image-slider'>
        <div className={`car-image`}>
          <img src='https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2Frender_frente_fenix_evo.png?alt=media&token=a21e76dd-3ae8-4899-ac56-68abad3cece8' alt='fsfenixevo' />
        </div>
        <div className={`car-image`}>
          <img src='https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2Ffsfenix.png?alt=media&token=1419a883-a4d9-4a9c-a3ed-260d664307c6' alt='fsfenix' />
        </div>
        <div className={`car-image`}>
          <img src='https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2Ffsdragon.png?alt=media&token=f76b0ebf-07f9-4410-b869-5e9854c29799' alt='fsdragon' />
        </div>
        <div className={`car-image`}>
          <img src='https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2Ffenixevo2.JPG?alt=media&token=0091748a-a8d1-4b44-9906-93d7d5b105d6' alt='fsnovaev01' />
        </div>
      </Slider>
    </div>
  );
};

export default GaragePage;
