import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../../firebase"; 
import "./PreviousArticlesList.css";

const PreviousArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "articles"));
        const articlesArray = querySnapshot.docs.map((doc) => ({
          id: doc.id, // Ensure the article ID is included
          ...doc.data(),
        }));
        setArticles(articlesArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles: ", error);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <p>Loading articles...</p>;
  }

  return (
    <div className="previous-articles-list">
      {articles.map((article) => (
        <Link to={`/article/${article.id}`} key={article.id}> {/* Use the article ID in the Link */}
          <div className="article-card">
            {article.imageUrl && (
              <div className="article-image">
                <img src={article.imageUrl} alt={article.title} />
              </div>
            )}
            <div className="article-details">
              <h3 className="article-title">{article.title}</h3>
              <p className="article-subtitle">{article.subtitle}</p>
            </div>
            <div className="article-date">
              <p>{new Date(article.date.seconds * 1000).toLocaleDateString()}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PreviousArticlesList;