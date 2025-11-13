import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import { useTranslation } from "react-i18next";
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import SplashScreen from '../../components/SplashScreen/index.js'; // Import SplashScreen if it's not imported already
import { Link } from 'react-router-dom';

const HomePage = () => {
  const titleController = useAnimation();
  const [titleRef, titleInView] = useInView({ threshold: 0.03 });

  const controlsTeam = useAnimation();
  const [teamRef, teamInView] = useInView({ threshold: 0.1 });

  const controlsSponsor = useAnimation();
  const [sponsorRef, sponsorInView] = useInView({ threshold: 0.1 });

  const controlsGarage = useAnimation();
  const [garageRef, garageInView] = useInView({ threshold: 0.1 });

  const { t } = useTranslation();

  const [showScrollArrow, setShowScrollArrow] = useState(true);
  const [isLoading, setIsLoading] = useState(true); // State to control splash screen visibility

  // --- CAR DATA ---
// We define all car data here to create the grid
const carData = [
    {
    name: "FS DRAGON",
    year: "2015",
    path: "/garage/fsdragon",
    // This is the Dragon image from your old carousel
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FDragon%2Fcar_background.jpg?alt=media&token=b4845e0b-8f0b-407e-8f4d-1efce819f1d3"
  },
  {
    name: "FS FENIX",
    year: "2023",
    path: "/garage/fsfenix",
    // This is the Fenix render from your old carousel
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%2Ffsfenix_render3.png?alt=media&token=f6f6d07e-71a5-4524-9761-e3460a77c3fd"
  },
  {
    name: "FS FENIX EVO",
    year: "2024",
    path: "/garage/fsfenixevo",
    // This is the image from your Fenix Evo page
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2Fcarro_fspt.jpg?alt=media&token=c254dd19-2cd4-400c-9694-0b700ddab32d"
  },
  {
    name: "FS NOVA EV01",
    year: "2025",
    path: "/garage/fsnovaev01", // You will need to create this page
    // Placeholder image - replace this with your new car's image URL!
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2Ffenixevo2.JPG?alt=media&token=0091748a-a8d1-4b44-9906-93d7d5b105d6"
  }
];

  // Handle scroll arrow visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollArrow(window.scrollY <= 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track video and image loading
  useEffect(() => {
    const video = document.querySelector('.video-player');
    const images = [
      'https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2Fteam_photo_fspt.jpg?alt=media&token=97557c72-cc63-44b0-a1e4-3ca6783a03c5',
      'https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2Ffsfenix.png?alt=media&token=1419a883-a4d9-4a9c-a3ed-260d664307c6'
    ];
  
    // Load images
    let imagesLoaded = 0;
    let videoLoaded = false;
  
    // here we dont use the refactored function because it has the video
    
    images.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imagesLoaded += 1;
        if (imagesLoaded === images.length && videoLoaded) {
          setIsLoading(false);
        }
      };
    });
  
    // Load video
    if (video) {
      video.onloadeddata = () => {
        videoLoaded = true;
        if (imagesLoaded === images.length) {
          setIsLoading(false);
        }
      };
    }
  
  }, []);
  

  // Effects for animations
  useEffect(() => {
    if (titleInView) {
      titleController.start({ opacity: 0 });
    } else {
      titleController.start({ opacity: 1 });
    }
  }, [titleController, titleInView]);

  useEffect(() => {
    if (teamInView) {
      controlsTeam.start({ opacity: 1, x: 0, transition: { duration: 0.5 } });
    } else {
      controlsTeam.start({ opacity: 0, x: -100, transition: { duration: 0.5 } });
    }
  }, [controlsTeam, teamInView]);

  useEffect(() => {
    if (sponsorInView) {
      controlsSponsor.start({ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } });
    } else {
      controlsSponsor.start({ opacity: 0, x: -100, transition: { duration: 0.5 } });
    }
  }, [controlsSponsor, sponsorInView]);

  useEffect(() => {
    if (garageInView) {
      controlsGarage.start({ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.4 } });
    } else {
      controlsGarage.start({ opacity: 0, x: 100, transition: { duration: 0.5 } });
    }
  }, [controlsGarage, garageInView]);

 

  return (
    <div className="home-page">
    <SplashScreen isVisible={isLoading}/>
      <div className="background-home-video">
        <div className="video-player-container">
          <video className='video-player' autoPlay loop muted>
            <source src="https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/fspt_video%20(2).mp4?alt=media&token=f769f0cc-ed41-4c45-adb0-7533a8ecd0dd" type="video/mp4" />
          </video>
          <div ref={titleRef}>
            <motion.div animate={titleController}>
              <div className="video-text-content">
                <h1 className="nova-title">Nova Formula Student</h1>
              </div>
            </motion.div>
          </div>
        </div>

        {showScrollArrow && (
          <motion.div
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FontAwesomeIcon icon={faAnglesDown} size="2x" color='white' />
          </motion.div>
        )}
      </div>

      <div className="black-section" ref={teamRef}>
        <div className="team-content">
          <h2 className='title-team'>{t('home.team')}</h2>
          <p className='content-team'>{t('home.team_desc1')}</p>
          <p className='content-team'>{t('home.team_desc2')}</p>
          <p className='content-team'>{t('home.team_desc3')}</p>
        </div>
        <motion.div className="team-photo" animate={controlsTeam} initial={{ opacity: 0, x: 100 }}>
          <img src='https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2Fteam_photo_2025.jpg?alt=media&token=7fb76067-f655-4e54-9680-4a0984848092' alt="Team Leader" />
        </motion.div>
      </div>

      <div className="sponsors-section" ref={sponsorRef}>
        <div className="dark-glass-overlay-sponsor">
          <motion.div
            className="icon-button-c"
            animate={controlsSponsor}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a className="icon-button-c" href="/contacts">
              <FontAwesomeIcon icon={faAddressBook} size="10x" />
              <div className='reach'>{t("home.reach_us")}</div>
            </a>
          </motion.div>

          <div className="sponsor-text-content">
            <h2 className='title-sponsor'>{t('home.sponsor_title')}</h2>
            <p className='content-sponsor'>{t('home.sponsor_text')}</p>
          </div>
        </div>
      </div>

      <div className="garage-home-section" ref={garageRef}> 
          {/* Main Title */}
        <div className="garage-home-content">
          <h2 className='title-garage'>{t('garage-page.page-title')}</h2>
          <p className='garage-content'>{t('garage-page.page-subtitle')}</p>
        </div>
          
        {/* 4-Card Grid */}
        <motion.div className='garage-grid-container'
          animate={controlsGarage} 
          initial={{ opacity: 0, x: 100 }}
        >
        {carData.map((car) => (
          <Link 
            key={car.name} 
            to={car.path} 
            className='car-card'
            style={{ backgroundImage: `url(${car.imageUrl})` }}
          >
            <div className='car-card-overlay'>
              <div className='car-card-text'>
                <h3>{car.name}</h3>
                <p>{car.year}</p>
              </div>
            </div>
          </Link>
          ))}
        </motion.div>
    </div>
    </div>
  );
};

export default HomePage;
