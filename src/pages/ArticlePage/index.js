import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To extract articleId from URL
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import ReactMarkdown from 'react-markdown'; // For rendering Markdown
import "./style.css";
import PageHeader from "../../components/PageHeader/index.js";

const ArticlePage = () => {
  const { articleId } = useParams(); // Get the article ID from the URL
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const docRef = doc(db, "articles", articleId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setArticle(docSnap.data());
        } else {
          console.log("No such article!");
        }
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]);

  if (loading) {
    return <p>Loading article...</p>;
  }

  if (!article) {
    return <p>Article not found.</p>;
  }

  return (
    <div className="article-page">
      <PageHeader
        title={article.title}
        gradientColor={"#19a3ff"}
      />
      {article.imageUrl && <img className="article-image" src={article.imageUrl} alt={article.title} />}

     
      <div className="article-content-container"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      <p className="publish-date">Published on: {new Date(article.date.seconds * 1000).toLocaleDateString()}</p>
    </div>
  );
};

export default ArticlePage;