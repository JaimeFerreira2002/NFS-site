import React, { useRef, useState, useMemo, useCallback, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import './style.css';
import PageHeader from '../../components/PageHeader';

const GaragePage = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderKey, setSliderKey] = useState(0);
  const { t } = useTranslation();

  // Car images array
  const carImages = useMemo(() => [
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FNovaEV01%2FebRender.png?alt=media&token=1703bbe8-084d-41ba-b178-4061e2bbfcb2',
      alt: 'fsnovaev01',
      title: 'NOVA EV01',
      path: 'fsnovaev01'
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2FfenixRender.png?alt=media&token=592b3e8e-113b-4202-a6be-073ea5a8c2b9',
      alt: 'fsfenixevo',
      title: 'FS FENIX EVO',
      path: 'fsfenixevo'
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2Ffsfenix.png?alt=media&token=1419a883-a4d9-4a9c-a3ed-260d664307c6',
      alt: 'fsfenix',
      title: 'FS FENIX',
      path: 'fsfenix'
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FDragon%2FdragonRender.png?alt=media&token=770c5507-bf7b-4f13-908b-4a625a30c091',
      alt: 'fsdragon',
      title: 'FS DRAGON',
      path: 'fsdragon'
    }
  ], []);

  // Force slider refresh on mount and when window resizes
  useEffect(() => {
    const handleResize = () => {
      setSliderKey(prev => prev + 1);
    };

    // Initial refresh
    const timer = setTimeout(() => {
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(0);
      }
    }, 200);

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    adaptiveHeight: true,
    afterChange: (index) => setCurrentSlide(index),
    waitForAnimate: false,
  }), [PrevArrow, NextArrow]);

  const getTitleForSlide = (slideIndex) => {
    return carImages[slideIndex]?.title || '';
  };

  const getCarPagePath = () => {
    return carImages[currentSlide]?.path || '';
  };

  return (
    <div className='garage-page'>
      <PageHeader 
        title={t("garage-page.page-title")} 
        subtitle={t("garage-page.page-subtitle")} 
        gradientColor={'#19a3ff'} 
        height={'20%'} 
      />
      <div className='car-name'>{getTitleForSlide(currentSlide)}</div>
      <div className='button-container'>
        <Link to={getCarPagePath()} className='car-button'>
          {t("garage-page.button-text")}
        </Link>
      </div>
      
      <Slider key={sliderKey} ref={sliderRef} {...settings} className='cars-image-slider'>
        {carImages.map((car, index) => (
          <div key={index} className='car-image'>
            <img 
              src={car.src} 
              alt={car.alt}
              onLoad={(e) => {
                // Force slider to recalculate when image loads
                if (sliderRef.current && index === 0) {
                  setTimeout(() => {
                    sliderRef.current.slickGoTo(0);
                  }, 50);
                }
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GaragePage;