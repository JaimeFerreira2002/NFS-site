import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import CircularProgressBar from '../CircleProgressBar'; // Adjust the path as needed
import './style.css';
import NFSLogo from '../../assets/images/NFSLogo.png';

const SplashScreen = ({ isVisible }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalDuration = 200; // Interval of 200ms for each update
    const totalDuration = 1200; // Total duration of 1200ms (seems there was a typo in your comment)
    const increment = 100 / (totalDuration / intervalDuration); // Calculate increment for each update to reach 100% in 1200ms

    const intervalId = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + increment;
        if (newProgress >= 100) {
          clearInterval(intervalId);
          return 100; // Ensure progress does not exceed 100%
        }
        return newProgress;
      });
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`splash-screen ${isVisible ? '' : 'hidden'}`}>
      <motion.img
        src={NFSLogo}
        className="logo-splash"
        alt="Logo"
        animate={{ scale: [1, 1.1, 1] }} // Pulsating scale effect
        transition={{
          repeat: Infinity,
          duration: 2, // Adjust duration of one pulse
          ease: "easeInOut"
        }}
      />
      <CircularProgressBar size={250} progress={progress} strokeWidth={4} />
    </div>
  );
};

export default SplashScreen;
