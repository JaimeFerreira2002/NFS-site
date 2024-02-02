import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; // Include useLocation here
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SplashScreen from './components/SplashScreen';

import ScrollToTop from './components/ScrollToTop.js'; // Adjust the import path as needed


// Import your pages and components
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import PartnersPage from './pages/PartnersPage';
import ArticlesPage from './pages/ArticlesPage/ArticlesPage';
import RecruitmentPage from './pages/RecruitmentPage';
import ContactsPage from './pages/ContactsPage';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import GaragePage from './pages/GaragePage';
import FSFenixPage from './pages/FSFenixPage';
import Dummy from './pages/dummy';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };


  }, []);

  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Hiding splash screen"); // Add this line for debugging
      setIsSplashVisible(false); // Hide splash screen after a set time
    }, 2200); // Adjust time based on your needs

    return () => clearTimeout(timer);
  }, []);


  // Component to handle route transitions
  const AnimatedRoutes = () => {
    const location = useLocation(); // Correctly called within a child component of <Router>

    const nodeRef = useRef(null); // To comply with CSSTransition nodeRef requirement
    return (
      <div className="App">

        <SplashScreen isVisible={isSplashVisible} />

        <TransitionGroup component={null}>
          <CSSTransition key={location.key} classNames="fade" timeout={300} nodeRef={nodeRef}>
            <div ref={nodeRef}> {/* This div acts as the CSSTransition child */}

              <Routes location={location}>

                <Route path="/" exact element={<HomePage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/garage" element={<GaragePage />} />
                <Route path="/garage/fsfenix" element={<FSFenixPage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/articles" element={<ArticlesPage />} />
                <Route path="/recruitment" element={<RecruitmentPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/dummy" element={<Dummy />} />
              </Routes>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  };

  return (
    <div className="content-wrapper">
      <Router>
      <ScrollToTop />
        <div className="App">
          <TopBar isScrolled={isScrolled} />
          <AnimatedRoutes /> {/* Using the AnimatedRoutes component here */}
        </div>
      </Router>
      <BottomBar />
    </div>
  );
}

export default App;
