// src/components/NewsPage.js
import React from "react";
import LatestArticle from "./LatestArticle";
import PreviousArticlesList from "./PreviousArticlesList";
import NewsletterColumn from "./NewsletterColumn";
import "./style.css";
import PageHeader from "../../components/PageHeader";

const NewsPage = () => {
  return (
    <div className="newspage">
      <PageHeader
        title={"Artigos"}
        subtitle={"Noticias do NFS"}
        gradientColor="#19a3ff"
        height={"2.5%"}
      />
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
