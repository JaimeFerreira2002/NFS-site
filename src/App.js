import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; // Include useLocation here
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SplashScreen from './components/SplashScreen';

import ScrollToTop from './components/ScrollToTop.js'; // Adjust the import path as needed

import MobileDrawer from './components/MobileDrawer';

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
import FSDragonPage from './pages/FSDragonPage';
import Dummy from './pages/dummy';
import FSFenixPageEvo from './pages/FSFenixEvoPage/index.js';
import NewsPage from './pages/NewsPage';
import CompetitionDetails from './pages/ResultsPage/index.js';
import DepartmentPage from './pages/DepartmentPage'; // Import your DepartmentPage component

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  // State to control the drawer's open/close state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle the drawer open/close state
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  
    if (!isDrawerOpen) {
      // Disable scrolling when the drawer is open
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling when the drawer is closed
      document.body.style.overflow = '';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false); // Hide splash screen after a set time
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  // Component to handle route transitions
  const AnimatedRoutes = () => {
    const location = useLocation();
    const nodeRef = useRef(null);

    return (
      <div className="App">
        <SplashScreen isVisible={isSplashVisible} />
        <TransitionGroup component={null}>
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={300}
            nodeRef={nodeRef}
          >
            <div ref={nodeRef}>
              <Routes location={location}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/garage" element={<GaragePage />} />
                <Route path="/garage/fsfenixevo" element={<FSFenixPageEvo />} />
                <Route path="/garage/fsdragon" element={<FSDragonPage />} />
                <Route path="/garage/fsfenix" element={<FSFenixPage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/articles" element={<ArticlesPage />} />
                <Route path="/recruitment" element={<RecruitmentPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/dummy" element={<Dummy />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/competition/:id" element={<CompetitionDetails />} />
                <Route path="/department/:departmentName" element={<DepartmentPage />} /> {/* Dynamic route */}
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
          <TopBar isScrolled={isScrolled} toggleDrawer={toggleDrawer} />
          <MobileDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
          <AnimatedRoutes /> {/* Using the AnimatedRoutes component here */}
        </div>
      </Router>
      <BottomBar />
    </div>
  );
}

export default App;
