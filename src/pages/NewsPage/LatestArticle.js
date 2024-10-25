import React, { useState, useEffect } from "react";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "../../firebase"; // Import Firestore instance

const LatestArticle = () => {
  const [latestArticle, setLatestArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestArticle = async () => {
      try {
        // Query Firestore for the latest article, ordered by the 'date' field
        const articlesCollection = collection(db, "articles");
        const q = query(articlesCollection, orderBy("date", "desc"), limit(1)); // Fetch the most recent article
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
    <div>
      <h1>{latestArticle.title}</h1>
      <p>{latestArticle.subtitle}</p>
      {latestArticle.imageUrl && (
        <img className="article-image" src={latestArticle.imageUrl} alt={latestArticle.title} />
      )}
      <p>{latestArticle.content}</p>
      <p><em>Published on: {new Date(latestArticle.date.seconds * 1000).toLocaleDateString()}</em></p>
    </div>
  );
};

export default LatestArticle;