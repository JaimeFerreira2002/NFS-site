import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import TeamPhoto from '../../assets/images/team_photo_fspt.jpg';
import { useTranslation } from "react-i18next";
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import FSFenix from '../../assets/images/fsfenix.png'
import { Link } from 'react-router-dom';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'; // Ensure you import the correct icon
//TODO descomentar isto e alterar o path do video
//import fspt_video from '../../assets/videos/fspt_video.mp4'



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


  //effects

  // title
  React.useEffect(() => {
    if (titleInView) {
      titleController.start({ opacity: 0 });
    } else {
      titleController.start({ opacity: 1 });
    }
  }, [titleController, titleInView]);

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
    <div className="dragon-page">

      <div className="background-home-video">
        <div className = "video-player-container">
        
        <video className='video-player' autoPlay loop muted>
          <source src="https://firebasestorage.googleapis.com/v0/b/site-nfs.appspot.com/o/FSPT23%20-%20The%20Ultimate%20Engineering%20Showdown.mp4?alt=media&token=eac91054-1ff1-4510-9ef4-f3ba561e7fe0" type="video/mp4" />
           
          </video>


            <div ref={titleRef}> 
                <motion.div animate = {titleController}>
                    <div className="video-text-content">
                        <h1 className="nova-title"><span className="nova-word">Nova</span> Formula Student</h1>
                    </div>
                </motion.div>
            </div>
             
        </div>   


        {showScrollArrow && (
          <motion.div
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }} // Simple y-axis bounce animation
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
          <img src='https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2Fteam_photo_fspt.jpg?alt=media&token=97557c72-cc63-44b0-a1e4-3ca6783a03c5' alt="Team Leader" />
        </motion.div>
      </div>
      {/* Additional sections if needed */}
      <div className="sponsors-section" ref={sponsorRef}>
        <div className="dark-glass-overlay-sponsor">
          <motion.div
            className="icon-button-c"
            animate={controlsSponsor}
            initial={{ opacity: 0, x: -100 }} // Start from the left
            transition={{ duration: 0.5, delay: 0.2 }} // Optional: add a delay if needed
          >

            <a className="icon-button-c" href="/contacts">
              <FontAwesomeIcon  icon={faAddressBook} size="10x" />

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
        <div className="garage-home-content">
          <h2 className='title-garage'>{t('garage-page.page-title')}</h2>
          <p className='garage-content'>{t('garage-page.page-subtitle')}</p>

          <a href="/garage" className="button-link">
            <button className="home-garge-button">{t('garage-page.button-text')}</button>
          </a>
        </div>
        <div className="garage-home-image">
          <motion.div className="team-photo" animate={controlsGarage} initial={{ opacity: 0, x: 100 }}>
            <img src='https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2Ffsfenix.png?alt=media&token=1419a883-a4d9-4a9c-a3ed-260d664307c6' alt="Garage" />
          </motion.div>


        </div>
      </div>
    </div>

  );
};

export default HomePage;
