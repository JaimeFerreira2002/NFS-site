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
import ArticlesPage from './pages/ArticlePage/index.js';
import RecruitmentPage from './pages/RecruitmentPage';
import ContactsPage from './pages/ContactsPage';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import GaragePage from './pages/GaragePage';
import FSFenixPage from './pages/FSFenixPage';
import FSDragonPage from './pages/FSDragonPage';
import Dummy from './pages/dummy';
import FSFenixPageEvo from './pages/FSFenixEvoPage/index.js';
import NewsPage from './pages/NewsPage/index.js';
import CompetitionDetails from './pages/ResultsPage/index.js';
import LoginPage from './pages/LoginPage/index.js';
import AddArticlePage from './pages/AddArticlePage/index.js';
import ArticlePage from './pages/ArticlePage/index.js'; // Import the new article page
import FSNovaEV01Page from './pages/FSNovaEV01/index.js';

// Component to handle route transitions
  const AnimatedRoutes = () => {
    const location = useLocation(); // Correctly called within a child component of <Router>
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);



    const nodeRef = useRef(null); // To comply with CSSTransition nodeRef requirement
    return (
      
      <div className="App">
        
          {/* <SplashScreen isVisible={isSplashVisible} /> */}

          <TransitionGroup component={null}>
            <CSSTransition
              key={location.key}
              classNames="fade"
              timeout={300}
              nodeRef={nodeRef}
            >
              <div ref={nodeRef}>
                {" "}
                {/* This div acts as the CSSTransition child */}
                <Routes location={location}>
                  <Route path="/" exact element={<HomePage />} />
                  <Route path="/about" element={<AboutUsPage />} />
                  <Route path="/garage" element={<GaragePage />} />
                  <Route path="/garage/fsfenixevo" element={<FSFenixPageEvo />} />
                  <Route path="/garage/fsdragon" element={<FSDragonPage />} />
                  <Route path="/garage/fsfenix" element={<FSFenixPage />} />
                  <Route path="/garage/fsnovaev01" element={<FSNovaEV01Page />} />
                  <Route path="/partners" element={<PartnersPage />} />
                  <Route path="/articles" element={<ArticlesPage />} />
                  <Route path="/recruitment" element={<RecruitmentPage />} />
                  <Route path="/contacts" element={<ContactsPage />} />
                  <Route path="/dummy" element={<Dummy />} />
                  <Route path="/news" element={<NewsPage />} />
                  <Route path="/competition/:id" element={<CompetitionDetails />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/addarticle" element={<AddArticlePage />} />
                  <Route path="/article/:articleId" element={<ArticlePage />} />
                </Routes>
              </div>
            </CSSTransition>
          </TransitionGroup>
        
      </div>
    );
  };

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  // State to control the drawer's open/close state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle the drawer open/close state
  const toggleDrawer = () => {
    // Assuming 'isOpen' reflects the current state of the drawer
    setIsDrawerOpen(!isDrawerOpen); // Toggle the drawer open state
  
    if (!isDrawerOpen) {
      // If the drawer is about to open, disable scrolling on the body
      document.body.style.overflow = 'hidden';
    } else {
      // If the drawer is about to close, re-enable scrolling on the body
      document.body.style.overflow = '';
    }
  };
  

  const width = window.innerWidth;


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
      console.log("Hiding splash screen"); // Add this line for debugging
      setIsSplashVisible(false); // Hide splash screen after a set time
    }, 2200); // Adjust time based on your needs

    return () => clearTimeout(timer);
  }, []);

  

  return  (
    <div className="content-wrapper">
      <Router>
        <ScrollToTop />
        <div className="App">
          <TopBar toggleDrawer={toggleDrawer} />
          <MobileDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
          <AnimatedRoutes /> {/* Using the AnimatedRoutes component here */}
        </div>
      </Router>
      <BottomBar />
    </div>
  );
}

export default App;
