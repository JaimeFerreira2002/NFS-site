import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import TeamLeaderPhoto from '../../assets/images/members_photos/Ricardo_Cutileiro_TL.jpg';
import { useTranslation } from "react-i18next";
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import FSDragon from '../../assets/images/fsdragon2.png'
import { Link } from 'react-router-dom';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'; // Ensure you import the correct icon



const HomePage = () => {
  const controlsTeam = useAnimation();
  const [teamRef, teamInView] = useInView({ threshold: 0.1 });

  const controlsSponsor = useAnimation();
  const [sponsorRef, sponsorInView] = useInView({ threshold: 0.1 });

  const controlsGarage = useAnimation();
  const [garageRef, garageInView] = useInView({ threshold: 0.1 });

  const { t } = useTranslation();

  const [showScrollArrow, setShowScrollArrow] = useState(true); // State to control arrow visibility

  useEffect(() => {
    const handleScroll = () => {
      // Hide the arrow if the page is scrolled down by a certain amount, e.g., 100px
      if (window.scrollY > 100) {
        setShowScrollArrow(false);
      } else {
        setShowScrollArrow(true);
      }
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array ensures this effect runs only once on mount


  React.useEffect(() => {
    if (teamInView) {
      controlsTeam.start({ opacity: 1, x: 0, transition: { duration: 0.5 } });
    } else {
      controlsTeam.start({ opacity: 0, x: -100, transition: { duration: 0.5 } });
    }
  }, [controlsTeam, teamInView]);

  React.useEffect(() => {
    if (sponsorInView) {
      controlsSponsor.start({ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } });
    } else {
      controlsSponsor.start({ opacity: 0, x: -100, transition: { duration: 0.5 } });
    }
  }, [controlsSponsor, sponsorInView]);

  React.useEffect(() => {
    if (garageInView) {
      controlsGarage.start({ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.4 } });
    } else {
      controlsGarage.start({ opacity: 0, x: 100, transition: { duration: 0.5 } });
    }
  }, [controlsGarage, garageInView]);

  return (
    <div className="home-page">
      <div className="sobre">
        <div className="dark-glass-overlay">

          <h1 className="nova-title"><span className="nova-word">Nova</span> Formula Student</h1>

        </div>
        {showScrollArrow && (
          <motion.div
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }} // Simple y-axis bounce animation
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FontAwesomeIcon icon={faAnglesDown} size="3x" color='white' />
          </motion.div>
        )}
      </div>

      <div className="black-section" ref={teamRef}>
        <div className="team-content">
          <h2 className='title-team'>{t('home.team')}</h2>
          <p className='content-team'>{t('home.team_desc')}</p>
        </div>

        <motion.div className="team-photo" animate={controlsTeam} initial={{ opacity: 0, x: 100 }}>

          <img src={TeamLeaderPhoto} alt="Team Leader" />
          <div className="leader-name-overlay">Ricardo Cutileiro</div>
          <div className="leader-name-overlay-sub">Team Leader</div>
        </motion.div>
      </div>
      {/* Additional sections if needed */}
      <div className="sponsors-section" ref={sponsorRef}>
        <div className="dark-glass-overlay">
          <motion.div
            className="icon-button"
            animate={controlsSponsor}
            initial={{ opacity: 0, x: -100 }} // Start from the left
            transition={{ duration: 0.5, delay: 0.2 }} // Optional: add a delay if needed
          >
            <a className="icon-button" href="/contacts">
              <FontAwesomeIcon icon={faAddressBook} size="10x" />
            </a>

          </motion.div>

          <div className="sponsor-text-content">
            <h2 className='title-sponsor'>{t('home.sponsor_title')}</h2>
            <p className='content-sponsor'>{t('home.sponsor_text')}</p>
          </div>

        </div>

      </div>

      <div className="garage-home-section" ref={garageRef}>
        <div className="garage-home-content">
          <h2 className='title-team'>{t('garage-page.page-title')}</h2>
          <p className='content-team'>{t('garage-page.page-subtitle')}</p>

          <a href="/garage" className="button-link">
            <button>{t('garage-page.button-text')}</button>
          </a>
        </div>
        <div className="garage-home-image">
          <motion.div className="team-photo" animate={controlsGarage} initial={{ opacity: 0, x: 100 }}>

            <img src={FSDragon} alt="Garage" />
            <div className="garage-image-overlay">
              <a href="/garage/fsfenix" className="button-link">
                <button>FS Fenix</button>
              </a>
            </div>
          </motion.div>


        </div>
      </div>
    </div>

  );
};

export default HomePage;
