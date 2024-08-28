// src/components/PreviousArticlesList.js
import React from "react";
import './PreviousArticlesList.css';

const PreviousArticlesList = () => {
  const articles = [
    {
      title: "Previous Article 1",
      link: "/article-1",
      image: "https://via.placeholder.com/100", // Replace with actual image URL
    },
    {
      title: "Previous Article 2",
      link: "/article-2",
      image: "https://via.placeholder.com/100", // Replace with actual image URL
    },
    {
      title: "Previous Article 3",
      link: "/article-3",
      image: "https://via.placeholder.com/100", // Replace with actual image URL
    },
  ];

  return (
    <div className="previous-articles">
      <h2>Previous Articles</h2>
      <div className="article-tiles">
        {articles.map((article, index) => (
          <a href={article.link} key={index} className="article-tile">
            <img src={article.image} alt={article.title} className="article-image" />
            <div className="article-info">
              <h3>{article.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PreviousArticlesList;
