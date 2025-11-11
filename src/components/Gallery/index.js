import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from "react-i18next";
import './style.css';


const Gallery = ({ images }) => {
  const sliderRef = useRef(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const { t } = useTranslation();

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const closePopup = () => {
    setSelectedPhoto(null);
  };

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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    draggable: true,
    afterChange: (index) => setCurrentSlide(index),
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    padding: '2%',
    cursor: 'pointer',
    borderRadius: '15px',
  };

  return (
    <>
      <Slider ref={sliderRef} {...settings} className='photos-slider'>
        {images.map((image, index) => (
          <div key={index} className='image-container'>
            <img 
              src={image} 
              alt={`Image ${index + 1}`} 
              style={imageStyle}
              onClick={() => handlePhotoClick(image)}
            />
          </div>
        ))}
      </Slider>

      {selectedPhoto && (
        <div className='image-popup-overlay'onClick={closePopup}>
          <div className='image-popup-content'>
            <img src={selectedPhoto} alt="Enlarged view"onClick={(e) => e.stopPropagation()}/>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;