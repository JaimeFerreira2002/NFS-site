import React, { Component, useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
// import TeamPage from './pages/TeamPage';
import PartnersPage from './pages/PartnersPage';
import ArticlesPage from './pages/ArticlesPage/ArticlesPage';

import RecruitmentPage from './pages/RecruitmentPage/RecruitmentPage';
import ContactsPage from './pages/ContactsPage';

import TopBar from './components/TopBar'
import BottomBar from './components/BottomBar';
import GaragePage from './pages/GaragePage';
import FSFenixPage from './pages/FSFenixPage';
import Dummy from './pages/dummy';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust this threshold as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="content-wrapper">
      <Router>
        <div className="App">
          <TopBar isScrolled={isScrolled} />
          <Routes>
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
          <BottomBar />
        </div>
      </Router>
    </div>
  );
}

//React uses JSX, which is a combination of JS and HTML tags
//A component is a JS function that returns a HTML tag


export default App;
