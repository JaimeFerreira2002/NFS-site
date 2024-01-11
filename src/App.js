import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
// import TeamPage from './pages/TeamPage';
import PartnersPage from './pages/PartnersPage/PartnersPage';
import ArticlesPage from './pages/ArticlesPage/ArticlesPage';
import RecruitmentPage from './pages/RecruitmentPage/RecruitmentPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import TopBar from './components/TopBar'
import BottomBar from './components/BottomBar';
import GaragePage from './pages/GaragePage';
import FSFenixPage from './pages/FSFenixPage';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'; 


//React uses JSX, which is a combination of JS and HTML tags
//A component is a JS function that returns a HTML tag
function App() {
  return (
    <Router>
      <div className="App">
      <TopBar/>
      <Routes>
        <Route path="/" exact element={<HomePage/>} />
        <Route path="/about" element={<AboutUsPage/>} />
        <Route path="/garage" element={<GaragePage/>} />
        <Route path="/garage/fsfenix" element={<FSFenixPage/>} />
        <Route path="/partners" element={<PartnersPage/>} />
        <Route path="/articles" element={<ArticlesPage/>} />
        <Route path="/recruitment" element={<RecruitmentPage/>} />
        <Route path="/contacts" element={<ContactsPage/>} /> 
      </Routes>
      <BottomBar/>
      </div>
    </Router>
  );
}

export default App;
