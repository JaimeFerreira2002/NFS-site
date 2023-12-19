import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import GaragePage from './pages/GaragePage';
import PartnersPage from './pages/PartnersPage';
import ArticlesPage from './pages/ArticlesPage';
import RecruitmentPage from './pages/RecruitmentPage';
import ContactsPage from './pages/ContactsPage';
import TopBar from './Components/TopBar'

import './App.css'; // You can add your CSS styles here

//React uses JSX, which is a combination of JS and HTML tags
//A component is a JS function that returns a HTML tag
function App() {
  return (
    <Router>
      <div className="App">
      <TopBar/>
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutUsPage} />
        <Route path="/garage" component={GaragePage} />
        <Route path="/partners" component={PartnersPage} />
        <Route path="/articles" component={ArticlesPage} />
        <Route path="/recruitment" component={RecruitmentPage} />
        <Route path="/contacts" component={ContactsPage} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;