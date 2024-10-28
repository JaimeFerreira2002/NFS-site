import React, { useState, useEffect } from "react";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import { db } from "../../firebase";
import "./LatestArticle.css";
import { useTranslation } from 'react-i18next';

const LatestArticle = () => {
  const [latestArticle, setLatestArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showFullContent, setShowFullContent] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchLatestArticle = async () => {
      try {
        const articlesCollection = collection(db, "articles");
        const q = query(articlesCollection, orderBy("date", "desc"), limit(1));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const latestDoc = querySnapshot.docs[0];
          setLatestArticle({
            id: latestDoc.id,
            ...latestDoc.data(),
          });
        } else {
          console.log("No articles found.");
        }
      } catch (error) {
        console.error("Error fetching latest article: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestArticle();
  }, []);

  if (loading) {
    return <p>Loading latest article...</p>;
  }

  if (!latestArticle) {
    return <p>No articles available.</p>;
  }

  return (
    <div className="latest-article">
      <h1>{latestArticle.title}</h1>
      <p>{latestArticle.subtitle}</p>
      {latestArticle.imageUrl && (
        <img className="article-image" src={latestArticle.imageUrl} alt={latestArticle.title} />
      )}
      <div className="article-content-container">
        <div
          className={`article-content ${showFullContent ? "full-content" : "truncated-content"}`}
          dangerouslySetInnerHTML={{
            __html: showFullContent ? latestArticle.content : latestArticle.content.slice(0, 600) + "...",
          }}
        />
        {!showFullContent && (
          <div className="fade-overlay">
          <Link to={`/article/${latestArticle.id}`} className="show-more-button">
            {t('news-page.read-more')}
          </Link>
        </div>
        )}
      </div>
      <p><em>Published on: {new Date(latestArticle.date.seconds * 1000).toLocaleDateString()}</em></p>
    </div>
  );
};

export default LatestArticle;