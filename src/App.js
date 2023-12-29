import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import TeamPage from './pages/TeamPage';
import PartnersPage from './pages/PartnersPage';
import ArticlesPage from './pages/ArticlesPage';
import RecruitmentPage from './pages/RecruitmentPage';
import ContactsPage from './pages/ContactsPage';
import TopBar from './components/TopBar/TopBar'


import './App.css'; // You can add your CSS styles here


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
        <Route path="/team" element={<TeamPage/>} />
        <Route path="/partners" element={<PartnersPage/>} />
        <Route path="/articles" element={<ArticlesPage/>} />
        <Route path="/recruitment" element={<RecruitmentPage/>} />
        <Route path="/contacts" element={<ContactsPage/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
