// src/components/NewsPage.js
import React from "react";
import LatestArticle from "./LatestArticle";
import PreviousArticlesList from "./PreviousArticlesList";
import NewsletterColumn from "./NewsletterColumn";
import './style.css';

const NewsPage = () => {
  return (
    <div>
      <div className="news-container">
        <div className="main-content">
          <LatestArticle />
          <PreviousArticlesList />
        </div>
        <div className="sidebar">
          <NewsletterColumn />
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
