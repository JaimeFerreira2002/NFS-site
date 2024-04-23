import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from "react-i18next";
import './style.css';


const Gallery = ({ images }) => {
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
      dots: false,
      infinite: false,
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
        padding: '4%', 
        // borderRadius: '30px', // Adjust the radius as needed
        // overflow: 'hidden', // Ensure that the rounded corners are visible
      };
  
    return (
        <Slider ref={sliderRef} {...settings} className='photos-slider'>
          {images.map((image, index) => (
            <div key={index} className='image-container'>
              <img src={image} alt={`Image ${index + 1}`} style={imageStyle}/>
            </div>
          ))}
        </Slider>
      );
};

export default Gallery;