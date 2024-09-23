// src/components/PreviousArticlesList.js
import React from "react";
import './PreviousArticlesList.css';

const PreviousArticlesList = () => {
  const articles = [
    {
      title: "Previous Article 1",
      link: "/article-1",
      subtitle: "Understanding the Basics",
      date: "2024-01-15"
      
    },
    {
      title: "Previous Article 2",
      link: "/article-2",
      subtitle: "Understanding the Basics",
      date: "2024-01-15"
      
    },
    {
      title: "Previous Article 3",
      link: "/article-3",
      subtitle: "Understanding the Basics",
      date: "2024-01-15"
      
    },
  ];

  return (
    <div className="previous-articles-list">
      {articles.map((article, index) => (
        <div key={index} className="article-card">
          <div className="article-details">
            <h3 className="article-title">{article.title}</h3>
            <p className="article-subtitle">{article.subtitle}</p>
          </div>
          <div className="article-date">
            <p>{new Date(article.date).toLocaleDateString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PreviousArticlesList;
